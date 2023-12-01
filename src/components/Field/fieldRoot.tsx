import { ReactNode } from 'react'
import { ViewProps } from 'react-native'

import * as C from './styled'

interface FieldRootProps extends ViewProps {
  children: ReactNode
}

const FieldRoot: React.FC<FieldRootProps> = ({ children, ...props }) => {
  return <C.Root {...props}>{children}</C.Root>
}

export default FieldRoot
