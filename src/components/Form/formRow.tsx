import { ReactNode } from 'react'
import { ViewProps } from 'react-native'

import * as C from './styled'

interface FormRowProps extends ViewProps {
  children: ReactNode
}

const FormRow: React.FC<FormRowProps> = ({ children, ...props }) => {
  return <C.Row {...props}>{children}</C.Row>
}

export default FormRow
