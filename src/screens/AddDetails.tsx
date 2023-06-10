import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, HStack, Pressable, ScrollView, Text } from 'native-base'

import { ArrowLeft, WhatsappLogo } from 'phosphor-react-native'

import { AddBody } from '@components/AddBody'
import { Carousel } from '@components/Carousel'

export function AddDetails() {
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

  const { goBack } = useNavigation()

  return (
    <>
      <SafeAreaView />
      <ScrollView>
        <HStack mt={5} mx={6} mb={3}>
          <Pressable onPress={() => goBack()}>
            <ArrowLeft size={24} />
          </Pressable>
        </HStack>
        <Carousel data={data} />
        <AddBody />
      </ScrollView>
      <HStack p={6} justifyContent="space-between" alignItems="center">
        <HStack alignItems="flex-end">
          <Text fontSize="sm" fontFamily="heading" color="blue.500">
            R$
          </Text>
          <Text fontSize="lg" fontFamily="heading" color="blue.500" mb={-1}>
            120,00
          </Text>
        </HStack>
        <Button px={3} bg="blue.500" h={10} rounded={6}>
          <HStack alignItems="center">
            <WhatsappLogo size={16} color="white" weight="fill" />
            <Text ml={2} fontSize="sm" fontFamily="heading" color="gray.700">
              Entrar em contato
            </Text>
          </HStack>
        </Button>
      </HStack>
    </>
  )
}
