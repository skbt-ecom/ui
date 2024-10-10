import { type DropzoneOptions } from 'react-dropzone'

export const defaultDropzoneOptions: DropzoneOptions = {
  maxSize: 4 * 1024 * 1024,
  multiple: true,
  accept: {
    'image/jpeg': [],
    'image/png': [],
    'application/pdf': []
  }
}
