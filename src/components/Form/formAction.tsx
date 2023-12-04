import { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'

import * as C from './styled'

interface FormActionProps extends TouchableOpacityProps {
  children: ReactNode
  status: boolean
}

const FormAction: React.FC<FormActionProps> = ({
  children,
  status,
  ...props
}) => {
  return (
    <C.Action {...props} style={{ opacity: status ? 0.8 : 1 }}>
      <C.ActionText>{children}</C.ActionText>
    </C.Action>
  )
}

export default FormAction
