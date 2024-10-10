export type TClassesUploaderMain = {
  wrapperMainContent: string
  borderContent: string
  wrapperTextContent: string
  uploaderIcon: string
  selectFileText: string
  selectFileTextSpan: string
  uploaderInput: string
  message: string
}

export type TClassesUploaderFiles = {
  filesWrapperContent: string
  fileWrapperContent: string
  fileContent: string
  fileDeleteIcon: string
  fileText: string
  fileButtonDeleteWrapper: string
  fileButtonDelete: string
}

export const FilesErrorCode = {
  FileInvalidType: 'file-invalid-type',
  FileTooLarge: 'file-too-large',
  FileTooSmall: 'file-too-small',
  TooManyFiles: 'too-many-files'
} as const

export type TClassesUploader = TClassesUploaderFiles & TClassesUploaderMain
