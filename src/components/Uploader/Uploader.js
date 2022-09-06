import React, { useState, useCallback } from "react"

import cn from "classnames"
import { useDropzone } from "react-dropzone"

import Button from "@material-ui/core/Button"
import ButtonBase from "@material-ui/core/ButtonBase"
import CloudUpload from "@material-ui/icons/CloudUpload"
import PhotoCameraOutlinedIcon from "@material-ui/icons/PhotoCameraOutlined"
import Close from "@material-ui/icons/Close"

import useStyles from "./styles"

export default function Uploader({
  onChange,
  onLoad,
  onRemove,
  helperText,
  classes,
  disabled = false,
  isOnlyCameraForMobile = false,
}) {
  const upClasses = useStyles({ classes })
  const [isLoaded, setIsLoaded] = useState(false)
  const [imgSrc, setImgSrc] = useState("")
  const handleLoad = (files) => {
    if (onChange) {
      onChange(files)
    }

    const file = files[0]
    if (!file) return

    const reader = new FileReader()

    reader.onload = (e) => {
      const { result } = e.target
      setIsLoaded(true)
      setImgSrc(result)

      if (onLoad) {
        onLoad(result)
      }
    }

    reader.readAsDataURL(file)
  }

  const onDrop = useCallback(handleLoad, [onLoad, onChange])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  })
  const active = isLoaded || isDragActive ? upClasses.active : ""
  const btnBaseClasses = {
    root: cn(upClasses.uploader, active),
    disabled: upClasses.disabled,
  }

  function removeImage() {
    const agreement = confirm('Вы точно хотите удалить фотографию?')

    if(agreement) {
      setIsLoaded(false)
      onRemove()
      setImgSrc("")
    } else {
      setIsLoaded(true)
      const reader = new FileReader()

      reader.onload = (e) => {
        const { result } = e.target
        setImgSrc(result)
      }
    }
  }

  const icon = isOnlyCameraForMobile ? (
    <PhotoCameraOutlinedIcon className={upClasses.uploadIcon} />
  ) : (
    <CloudUpload className={upClasses.uploadIcon} />
  )

  const inputProps = {
    ...getInputProps(),
    capture: isOnlyCameraForMobile ? "environment" : "",
  }

  return (
    <div className={upClasses.root}>
      <ButtonBase {...getRootProps()} disabled={disabled || isLoaded} classes={btnBaseClasses}>
        {isLoaded ? <img alt="" src={imgSrc} className={upClasses.imgOut} /> : icon}
        {!isLoaded && <h4 className={upClasses.helperText}>{helperText}</h4>}
        <input {...inputProps} />
      </ButtonBase>
      {isLoaded && (
        <Button className={upClasses.removeBtn} onClick={removeImage}>
          <Close className={upClasses.removeIcon} />
        </Button>
      )}
    </div>
  )
}
