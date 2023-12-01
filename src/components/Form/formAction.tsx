import { ReactNode } from 'react'

import * as C from './styled'

interface FormActionProps {
  children: ReactNode
}

const FormAction: React.FC<FormActionProps> = ({ children, ...props }) => {
  return (
    <C.Action {...props}>
      <C.ActionText>{children}</C.ActionText>
    </C.Action>
  )
}

export default FormAction
