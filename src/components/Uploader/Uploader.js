import React, { useState, useCallback } from "react"

import cn from "classnames"
import { useDropzone } from "react-dropzone"

import Button from "@material-ui/core/Button"
import ButtonBase from "@material-ui/core/ButtonBase"
import CloudUpload from "@material-ui/icons/CloudUpload"
import Close from "@material-ui/icons/Close"

import useStyles from "./styles"

export default function Uploader({ onLoad, helperText, ...props }) {
  const classes = useStyles(props)
  const [isLoaded, setIsLoaded] = useState(false)
  const [imgSrc, setImgSrc] = useState("")
  const onDrop = useCallback(handleLoad, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  })

  const active = isLoaded || isDragActive ? classes.active : ""

  function handleLoad(files) {
    const file = files[0]

    if (!file) return

    const url = URL.createObjectURL(file)
    setIsLoaded(true)
    setImgSrc(url)
    onLoad && onLoad(url)
  }

  function removeImage() {
    setIsLoaded(false)
    setImgSrc("")
  }

  return (
    <div className={classes.root}>
      <ButtonBase {...getRootProps()} className={cn(classes.uploader, active)} disabled={isLoaded}>
        {isLoaded ? (
          <img alt="" src={imgSrc} className={classes.imgOut} />
        ) : (
          <CloudUpload className={classes.uploadIcon} />
        )}
        {!isLoaded && <h4 className={classes.helperText}>{helperText}</h4>}
      </ButtonBase>
      {isLoaded && (
        <Button className={classes.removeBtn} onClick={removeImage}>
          <Close className={classes.removeIcon} />
        </Button>
      )}
      <input {...getInputProps()} className={classes.input} />
    </div>
  )
}

Uploader.defaultProps = {}
