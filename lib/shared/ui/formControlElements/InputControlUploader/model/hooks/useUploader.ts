import { useState } from 'react'
import { type DropzoneOptions, type FileRejection, useDropzone } from 'react-dropzone'
import toast from 'react-hot-toast'
import { FilesErrorCode } from '../helpers'

export type TUseUploader = {
  controlledFiles: File[]
  dropzoneOptions: DropzoneOptions
  onValueChange: (f: File[]) => void
}

export const useUploader = ({ dropzoneOptions, controlledFiles, onValueChange }: TUseUploader) => {
  const [filesStatus, setFilesStatus] = useState<Record<string, 'loading' | 'success' | 'error'>>({})

  const removeFile = (index: number) => {
    const updatedFiles = controlledFiles.filter((_, idx) => idx !== index)
    onValueChange(updatedFiles)
  }

  const onDrop = (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      setFilesStatus((prev) => ({ ...prev, [file.name]: 'loading' }))

      reader.onload = () => {
        setFilesStatus((prev) => ({ ...prev, [file.name]: 'success' }))
      }

      reader.readAsArrayBuffer(file)
    })

    switch (rejectedFiles[0]?.errors[0]?.code) {
      case FilesErrorCode.FileInvalidType:
        toast.error('Неверный формат файла. Загрузите в формате jpg/png/pdf')
        break
      case FilesErrorCode.FileTooLarge:
        toast.error(`Файл слишком большой. Максимальный размер ${dropzoneOptions.maxSize} МБ`)
        break
      case FilesErrorCode.TooManyFiles:
        toast.error(`Вы загрузили слишком много файлов. Максимальное количество ${dropzoneOptions.maxFiles}`)
        break
      default:
        break
    }

    const updatedFiles = [...controlledFiles, ...acceptedFiles]

    onValueChange(updatedFiles)
  }

  const dropzoneState = useDropzone({
    onDrop,
    ...dropzoneOptions
  })

  return { filesStatus, removeFile, dropzoneState }
}
