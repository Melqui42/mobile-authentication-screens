import { ReactNode } from 'react'

import * as C from './styled'

interface FormContentProps {
  children: ReactNode
}

const FormContent: React.FC<FormContentProps> = ({ children, ...props }) => {
  return <C.Content {...props}>{children}</C.Content>
}

export default FormContent
