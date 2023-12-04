import { ReactNode } from 'react'

import * as C from './styled'

interface FormContainerProps {
  children: ReactNode
}

const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
  return (
    <C.Screen>
      <C.StyledStatusBar />
      <C.Container>{children}</C.Container>
    </C.Screen>
  )
}

export default FormContainer
