export interface SharableProps {
  label?: string
  data?: dataType[]
  placeholder?: string
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement> | any
  ) => void
  onKeyDown?: (e: React.KeyboardEvent) => void
  addItemLocation?: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => void
  name?: string
  value?: string | number
  className?: string
  onBlur?: (e: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement>) => void
  errorsMessage?: string | boolean
  autoSize?: boolean | object
  readOnly?: boolean 
}

type dataType = {
  name?: string
  id?: number
}
