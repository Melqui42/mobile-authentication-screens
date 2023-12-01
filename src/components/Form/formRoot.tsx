import { ReactNode } from 'react'

import * as C from './styled'

interface FormRootProps {
  children: ReactNode
}

const FormRoot: React.FC<FormRootProps> = ({ children }) => {
  return (
    <C.Root>
      <C.Center>{children}</C.Center>
    </C.Root>
  )
}

export default FormRoot
