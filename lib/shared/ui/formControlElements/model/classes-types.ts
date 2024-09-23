export type TFieldWrapperClasses = {
  field: string
  label: string
}

export type TFieldAttachmentClasses = {
  badge: string
  icon: string
  attachmentWrapper: string
}

export type TFieldContainerClasses = {
  container: string
}

export type TInputCommonClasses = {
  input: string
  message: string
}

export type TAdditionalInputPrimitiveClasses = TFieldWrapperClasses & TFieldContainerClasses & TInputCommonClasses
export type TAdditionalInputClassesWithAttachment = TAdditionalInputPrimitiveClasses & TFieldAttachmentClasses
