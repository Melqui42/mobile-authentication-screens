import { ReactNode } from 'react'

import * as C from './styled'

interface FormTitleProps {
  children: ReactNode
}

const FormTitle: React.FC<FormTitleProps> = ({ children, ...props }) => {
  return <C.Title {...props}>{children}</C.Title>
}

export default FormTitle
