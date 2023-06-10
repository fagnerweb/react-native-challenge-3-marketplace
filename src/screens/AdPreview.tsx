import {
  HStack,
  Heading,
  ScrollView,
  Text,
  VStack,
  useTheme,
  Pressable,
} from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { AppNavigatorRoutesProps } from '@routes/app.routes'

import { ArrowLeft, Tag } from 'phosphor-react-native'

import { AddBody } from '@components/AddBody'
import { Carousel } from '@components/Carousel'

export function AdPreview() {
  const data = [
    {
      id: 1,
      uri: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 2,
      uri: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 3,
      uri: 'https://images.unsplash.com/uploads/14122621859313b34d52b/37e28531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 4,
      uri: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 5,
      uri: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 6,
      uri: 'https://plus.unsplash.com/premium_photo-1676795223491-836df29d4ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    },
  ]

  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const { colors } = useTheme()
  const COLOR_HEADER = colors.blue[500]
  return (
    <>
      <SafeAreaView style={{ backgroundColor: COLOR_HEADER }} />
      <ScrollView>
        <VStack bg="blue.500" pb={4} pt={5}>
          <Heading
            fontSize="md"
            fontFamily="heading"
            color="gray.700"
            textAlign="center"
          >
            Pré visualização do anúncio
          </Heading>
          <Text
            fontSize="sm"
            fontFamily="body"
            color="gray.700"
            textAlign="center"
          >
            É assim que seu produto vai aparecer!
          </Text>
        </VStack>
        <Carousel data={data} />
        <AddBody />
      </ScrollView>
      <HStack
        px={4}
        pt={5}
        pb={7}
        bg="white"
        justifyContent="space-between"
        alignItems="center"
      >
        <Pressable
          h={11}
          bg="gray.500"
          width="48%"
          alignItems="center"
          justifyContent="center"
          rounded={6}
          onPress={() => navigate('edit')}
        >
          <HStack alignItems="center">
            <ArrowLeft
              style={{ marginTop: 2, marginRight: 10 }}
              color={colors.gray[200]}
              size={16}
            />
            <Text fontSize="sm" fontFamily="heading" color="gray.200">
              Voltar e editar
            </Text>
          </HStack>
        </Pressable>
        <Pressable
          h={11}
          bg="blue.500"
          width="48%"
          alignItems="center"
          justifyContent="center"
          rounded={6}
          onPress={() => navigate('editAddDetails')}
        >
          <HStack alignItems="center">
            <Tag
              style={{ marginTop: 2, marginRight: 10 }}
              size={16}
              color={colors.gray[600]}
            />
            <Text fontSize="sm" fontFamily="heading" color="white">
              Publicar
            </Text>
          </HStack>
        </Pressable>
      </HStack>
    </>
  )
}
