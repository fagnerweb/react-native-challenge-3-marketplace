import { useState } from 'react'
import { AxiosError } from 'axios'
import { TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'
import * as yup from 'yup'
import {
  Avatar,
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  // Input,
  ScrollView,
  Text,
  useTheme,
} from 'native-base'

import {
  User,
  PencilSimpleLine,
  Eye,
  EyeClosed,
  FileText,
} from 'phosphor-react-native'

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

import LogoSvg from '@assets/logo-short.svg'
import { Input } from '@components/Input'
import MaskInput from 'react-native-mask-input'
import { api } from '@services/api'

type FormDataProps = {
  name: string
  email: string
  phone: string
  password: string
  confirm_password: string
}

const signUpSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Nome precisa ter pelo menos 3 caracteres.')
    .required('Informe o nome.'),
  email: yup.string().email('E-mail inválido.').required('Informe o e-mail.'),
  phone: yup.string(),
  password: yup.string().min(6, 'A senha precisa ter pelo menos 6 caracteres.'),
  confirm_password: yup
    .string()
    .required('Confirme a senha')
    .oneOf([yup.ref('password'), null], 'A confirmação da senha não bate.')
    .when('password', {
      is: (Field: any) => Field,
      then: yup.string().required('Informe a confirmação da senha'),
    }),
})

export function SignUp() {
  const [photo, setPhoto] = useState({} as any)
  const [photoIsLoading, setPhotoIsLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [passwordIsVisibily, setPasswordIsVisibily] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirm_password: '',
    },
    resolver: yupResolver(signUpSchema),
  })

  const { navigate } = useNavigation<AuthNavigatorRoutesProps>()

  function handeSignIn() {
    navigate('signIn')
  }

  async function handleUserPhotoSelected() {
    setPhotoIsLoading(true)

    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      })

      if (photoSelected.canceled) {
        return
      }

      const photoSelectedUri = photoSelected.assets[0].uri
      if (photoSelectedUri) {
        const photoInfo = await FileSystem.getInfoAsync(photoSelectedUri)

        if (photoInfo.exists && photoInfo.size / 1024 / 1024 > 5) {
          return Alert.alert('Imagem muito grande')
        }

        const fileExtension = photoSelectedUri.split('.').pop()

        const photoFile = {
          name: `fagner.${fileExtension}`.toLowerCase(),
          uri: photoSelectedUri,
          type: `${photoSelected.assets[0].type}/${fileExtension}`,
        } as any

        setPhoto(photoFile)
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function handleCreateUser(data: FormDataProps) {
    if (!photo.name) {
      return Alert.alert('Selecione uma imagem para continuar.')
    }

    try {
      setIsLoading(true)

      const formData = new FormData()
      formData.append('avatar', photo)
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('tel', data.phone)
      formData.append('password', data.password)

      const response = await api.post('/users', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      console.log(response)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  const { colors } = useTheme()

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Center pt={16} pb={16} px={8} bg="gray.600">
        <LogoSvg />
        <Heading fontSize={20} fontFamily="body" color="gray.100">
          Boas vindas!
        </Heading>
        <Text
          fontSize="sm"
          color="gray.300"
          fontFamily="heading"
          textAlign="center"
        >
          Crie sua conta e use o espaçõ para comprar itens variados e vender
          seus produtos
        </Text>

        <Center mt={8} mb={4}>
          <TouchableOpacity
            onPress={handleUserPhotoSelected}
            activeOpacity={0.7}
            style={styles.buttonAvatar}
          >
            <Avatar bg="gray.500" size={20}>
              <User color={colors.gray[400]} size={50} />
            </Avatar>
            <Box style={styles.IconButtonAvatar}>
              <PencilSimpleLine size={16} color="white" />
            </Box>
          </TouchableOpacity>
        </Center>

        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Nome"
              value={value}
              onChangeText={onChange}
              messageError={errors.name?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="E-mail"
              value={value}
              onChangeText={onChange}
              messageError={errors.email?.message}
              keyboardType="email-address"
              textTransform="lowercase"
            />
          )}
        />

        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Telefone"
              value={value}
              onChangeText={onChange}
              messageError={errors.phone?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Senha"
              value={value}
              onChangeText={onChange}
              messageError={errors.password?.message}
              secureTextEntry={!passwordIsVisibily}
              rightElement={
                <TouchableOpacity
                  onPress={() => setPasswordIsVisibily(!passwordIsVisibily)}
                >
                  {passwordIsVisibily ? (
                    <Eye
                      size={20}
                      color={colors.gray[400]}
                      style={{ marginRight: 16 }}
                    />
                  ) : (
                    <EyeClosed
                      size={20}
                      color={colors.gray[400]}
                      style={{ marginRight: 16 }}
                    />
                  )}
                </TouchableOpacity>
              }
            />
          )}
        />
        <Controller
          control={control}
          name="confirm_password"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Confirme a senha"
              value={value}
              onChangeText={onChange}
              messageError={errors.confirm_password?.message}
              secureTextEntry={!passwordIsVisibily}
              rightElement={
                <TouchableOpacity
                  onPress={() => setPasswordIsVisibily(!passwordIsVisibily)}
                >
                  {passwordIsVisibily ? (
                    <Eye
                      size={20}
                      color={colors.gray[400]}
                      style={{ marginRight: 16 }}
                    />
                  ) : (
                    <EyeClosed
                      size={20}
                      color={colors.gray[400]}
                      style={{ marginRight: 16 }}
                    />
                  )}
                </TouchableOpacity>
              }
            />
          )}
        />
        <Button
          bg="gray.100"
          w="full"
          py={3}
          onPress={handleSubmit(handleCreateUser)}
          isLoading={isLoading}
          _text={{
            fontSize: 'sm',
            fontFamily: 'heading',
          }}
        >
          Criar
        </Button>
        <Center w="full" px={8}>
          <Text fontFamily="body" mt={12} mb={4}>
            Já tem uma conta?
          </Text>
          <Button
            w="full"
            py={3}
            backgroundColor="gray.500"
            _text={{ fontFamily: 'body', fontSize: 14, color: 'gray.200' }}
            onPress={handeSignIn}
          >
            Ir para o login
          </Button>
        </Center>
      </Center>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  buttonAvatar: {
    position: 'relative',
  },
  IconButtonAvatar: {
    position: 'absolute',
    bottom: 0,
    right: -8,
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#647FC7',
    borderRadius: 999,
  },
})
