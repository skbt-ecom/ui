import React, { useState, useEffect, useCallback } from "react"

import cn from "classnames"
import { useDropzone } from "react-dropzone"

import Button from "@material-ui/core/Button"
import ButtonBase from "@material-ui/core/ButtonBase"
import CloudUpload from "@material-ui/icons/CloudUpload"
import PhotoCameraOutlinedIcon from "@material-ui/icons/PhotoCameraOutlined"
import Close from "@material-ui/icons/Close"

import { getIDBValue, setIDBValue, deleteIDBValue } from "../../utils/idbUtils"

import useStyles from "./styles"

export default function Uploader({
  onChange,
  onLoad,
  onRemove,
  helperText,
  documentType,
  classes,
  disabled = false,
  isOnlyCameraForMobile = false,
  required = true,
}) {
  const upClasses = useStyles({ classes })
  const [isLoaded, setIsLoaded] = useState(false)
  const [imgSrc, setImgSrc] = useState("")
  const [hasClick, setHasClick] = useState(false)

  function fileReader(files) {
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

  useEffect(() => {
    getIDBValue(documentType).then((file) => {
      if (file) {
        fileReader(file)
      } else {
        console.log("У вас нет файлов в хранилище")
      }
    })
    // eslint-disable-next-line
  }, [])

  const handleLoad = (files) => {
    const filesObj = {
      files,
      required,
    }

    setIDBValue(documentType, filesObj)

    if (onChange) {
      onChange(files)
    }
    fileReader(files)
  }
  // eslint-disable-next-line
  const onDrop = useCallback(handleLoad, [onLoad, onChange])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  })
  const active = isLoaded || isDragActive ? upClasses.active : ""
  const btnBaseClasses = {
    root: hasClick
      ? cn(upClasses.uploader, upClasses.without_border, active)
      : cn(upClasses.uploader, active),
    disabled: upClasses.disabled,
  }

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      setHasClick(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false)

    return () => {
      document.removeEventListener("keydown", escFunction, false)
    }
  }, [escFunction])

  useEffect(() => {
    if (hasClick) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [hasClick])

  const setClick = () => {
    setHasClick(true)
  }

  const unsetClick = () => {
    setHasClick(false)
  }

  function removeImage(event) {
    event.stopPropagation()

    if (hasClick) {
      unsetClick()
    } else {
      // eslint-disable-next-line no-restricted-globals, no-alert
      const agreement = confirm("Вы точно хотите удалить фотографию?")

      if (agreement) {
        setIsLoaded(false)
        deleteIDBValue(documentType)

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
    <div
      className={hasClick ? cn(upClasses.lightbox, upClasses.show) : upClasses.root}
      onClick={isLoaded && !hasClick ? setClick : undefined}
      onKeyDown={isLoaded && !hasClick ? setClick : undefined}
      aria-hidden="true"
    >
      <ButtonBase {...getRootProps()} disabled={disabled || isLoaded} classes={btnBaseClasses}>
        {isLoaded ? (
          <img
            src={imgSrc}
            className={hasClick ? upClasses.show_image : upClasses.imgOut}
            alt="img"
          />
        ) : (
          icon
        )}

        {!isLoaded && <h4 className={upClasses.helperText}>{helperText}</h4>}
        <input {...inputProps} />
      </ButtonBase>
      {isLoaded && (
        <div className={upClasses.btnWrapper} onClick={removeImage} aria-hidden="true">
          <Button
            classes={{
              root: hasClick
                ? cn(upClasses.removeBtn, upClasses.largeRemoveIcon)
                : upClasses.removeBtn,
            }}
          >
            <Close className={hasClick ? upClasses.largeRemoveIcon : upClasses.removeIcon} />
          </Button>
        </div>
      )}
    </div>
  )
}
