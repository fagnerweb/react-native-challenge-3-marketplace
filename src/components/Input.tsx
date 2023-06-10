import {
  FormControl,
  Input as InputNative,
  IInputProps,
  useTheme,
} from 'native-base'
import { WarningCircle } from 'phosphor-react-native'

type Props = {
  messageError?: string
} & IInputProps

export function Input({ messageError, ...rest }: Props) {
  const { colors } = useTheme()
  return (
    <FormControl isInvalid mb={4}>
      <InputNative
        borderWidth={0}
        bg="white"
        fontFamily="body"
        fontSize="md"
        pt={3}
        pb={4}
        color="gray.400"
        {...rest}
      />
      <FormControl.ErrorMessage
        _text={{
          fontSize: 'xs',
          color: 'red.500',
        }}
        leftIcon={<WarningCircle size={20} color={colors.red[500]} />}
      >
        {messageError}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}
