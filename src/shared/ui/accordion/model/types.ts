import type { ReactNode } from 'react'

export interface IAccordionHeaderClasses {
  trigger: string
  icon: string
  header: string
  inner: string
}

export interface IAccordionRootClasses {
  item: string
  content: string
  accordion: string
}

export interface IAccordionItem {
  label: string
  content: ReactNode
}
