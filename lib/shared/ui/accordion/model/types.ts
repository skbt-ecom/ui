import type { ReactNode } from 'react'

export type TAccordionHeaderClasses = {
  trigger: string
  icon: string
  header: string
  inner: string
}

export type TAccordionRootClasses = {
  item: string
  content: string
  contentInner: string
  accordion: string
}

export interface IAccordionItem {
  label: string
  content: ReactNode
}
