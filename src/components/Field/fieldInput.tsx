import { TextInputProps } from 'react-native'

import * as C from './styled'

type FieldInputProps = TextInputProps

const FieldInput: React.FC<FieldInputProps> = ({ ...props }) => {
  return <C.Input {...props} />
}

export default FieldInput
