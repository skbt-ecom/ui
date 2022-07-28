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
  onLoad,
  helperText,
  classes,
  disabled = false,
  isMobileLoad = false,
}) {
  const upClasses = useStyles({ classes })
  const [isLoaded, setIsLoaded] = useState(false)
  const [imgSrc, setImgSrc] = useState("")
  const handleLoad = (files) => {
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
  const onDrop = useCallback(handleLoad, [onLoad])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
    capture: isMobileLoad ? "environment" : "",
  })
  const active = isLoaded || isDragActive ? upClasses.active : ""
  const btnBaseClasses = {
    root: cn(upClasses.uploader, active),
    disabled: upClasses.disabled,
  }

  function removeImage() {
    setIsLoaded(false)
    setImgSrc("")
  }

  const icon = isMobileLoad ? (
    <PhotoCameraOutlinedIcon className={upClasses.uploadIcon} />
  ) : (
    <CloudUpload className={upClasses.uploadIcon} />
  )

  return (
    <div className={upClasses.root}>
      <ButtonBase {...getRootProps()} disabled={disabled || isLoaded} classes={btnBaseClasses}>
        {isLoaded ? <img alt="" src={imgSrc} className={upClasses.imgOut} /> : icon}
        {!isLoaded && <h4 className={upClasses.helperText}>{helperText}</h4>}
        <input {...getInputProps()} />
      </ButtonBase>
      {isLoaded && (
        <Button className={upClasses.removeBtn} onClick={removeImage}>
          <Close className={upClasses.removeIcon} />
        </Button>
      )}
    </div>
  )
}
