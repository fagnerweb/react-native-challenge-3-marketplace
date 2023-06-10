import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, Center, Input, ScrollView, Text, useTheme } from 'native-base'

import { Eye, EyeClosed } from 'phosphor-react-native'

import LogoSvg from '../assets/logo.svg'

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

export function SignIn() {
  const [passwordIsVisibily, setPasswordIsVisibily] = useState(false)

  const { navigate } = useNavigation<AuthNavigatorRoutesProps>()

  function handleSignUp() {
    navigate('signUp')
  }

  const { colors } = useTheme()
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Center pt={16} pb={16} borderBottomRadius={24} px={8} bg="gray.600">
        <LogoSvg />
        <Text fontSize="sm" color="gray.300" fontFamily="heading">
          Seu espaço de compra e venda
        </Text>

        <Text fontFamily="body" fontSize="sm" color="gray.200" mt={20} mb={4}>
          Acesse sua conta
        </Text>
        <Input
          placeholder="E-mail"
          mb={4}
          borderWidth={0}
          bg="white"
          fontFamily="body"
          fontSize="md"
          pt={3}
          pb={4}
          color="gray.400"
        />
        <Input
          placeholder="Senha"
          secureTextEntry={passwordIsVisibily}
          mb={8}
          borderWidth={0}
          bg="white"
          fontFamily="body"
          fontSize="md"
          pt={3}
          pb={4}
          color="gray.400"
          rightElement={
            <TouchableOpacity
              onPress={() => setPasswordIsVisibily(!passwordIsVisibily)}
            >
              {passwordIsVisibily ? (
                <Eye
                  style={{ marginRight: 16 }}
                  size={20}
                  color={colors.gray[300]}
                />
              ) : (
                <EyeClosed
                  style={{ marginRight: 16 }}
                  size={20}
                  color={colors.gray[300]}
                />
              )}
            </TouchableOpacity>
          }
        />
        <Button
          bg="blue.500"
          w="full"
          py={3}
          _text={{
            fontSize: 'sm',
            fontFamily: 'heading',
          }}
        >
          Entrar
        </Button>
      </Center>
      <Center px={8} pb={20}>
        <Text fontFamily="body" mt={12} mb={4}>
          Ainda não tem acesso?
        </Text>
        <Button
          w="full"
          py={3}
          backgroundColor="gray.500"
          _text={{ fontFamily: 'body', fontSize: 14, color: 'gray.200' }}
          onPress={handleSignUp}
        >
          Criar uma conta
        </Button>
      </Center>
    </ScrollView>
  )
}
