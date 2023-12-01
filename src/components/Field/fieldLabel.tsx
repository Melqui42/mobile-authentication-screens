import { ReactNode } from 'react'

import * as C from './styled'

interface FieldLabelProps {
  children: ReactNode
}

const FieldLabel: React.FC<FieldLabelProps> = ({ children }) => {
  return <C.Label>{children}</C.Label>
}

export default FieldLabel
