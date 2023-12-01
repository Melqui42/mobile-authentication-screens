import { ReactNode } from 'react'

import * as C from './styled'

interface FormHeaderProps {
  children: ReactNode
}

const FormHeader: React.FC<FormHeaderProps> = ({ children, ...props }) => {
  return <C.Header {...props}>{children}</C.Header>
}

export default FormHeader
