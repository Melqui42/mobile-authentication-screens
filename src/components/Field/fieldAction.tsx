import { TouchableOpacityProps } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import * as C from './styled'

interface FieldActionProps extends TouchableOpacityProps {
  security: boolean
}

const FieldAction: React.FC<FieldActionProps> = ({ security, ...props }) => {
  return (
    <C.Action {...props}>
      {!security ? (
        <Ionicons name="eye" size={22} color={'#7065ff'} />
      ) : (
        <Ionicons name="eye-off" size={22} color={'#7065ff'} />
      )}
    </C.Action>
  )
}

export default FieldAction
