import { ReactNode } from 'react'
import { TextProps } from 'react-native'

import * as C from './styled'

interface FieldErrorMessageProps extends TextProps {
  children: ReactNode
}

const FieldErrorMessage: React.FC<FieldErrorMessageProps> = ({
  children,
  ...props
}) => {
  return (
    <C.ErrorContainer>
      <C.ErrorMessage {...props}>{children}</C.ErrorMessage>
    </C.ErrorContainer>
  )
}

export default FieldErrorMessage
