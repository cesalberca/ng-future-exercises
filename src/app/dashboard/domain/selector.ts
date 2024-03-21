import { Option } from './option'

export interface Selector {
  options: Option[]
  currentOption: Option
  onChange: (option: Option) => void
}
