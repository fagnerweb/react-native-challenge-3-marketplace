import { useState } from 'react'
import {
  HStack,
  ScrollView,
  Text,
  useTheme,
  Pressable,
  VStack,
  Box,
} from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import {
  ArrowLeft,
  PencilSimple,
  Power,
  TrashSimple,
} from 'phosphor-react-native'

import { AppNavigatorRoutesProps } from '@routes/app.routes'

import { AddBody } from '@components/AddBody'
import { Carousel } from '@components/Carousel'

export function EditAdDetails() {
  const [adDisabled, setAdDisabled] = useState(false)
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

  const { goBack, navigate } = useNavigation<AppNavigatorRoutesProps>()

  const { colors } = useTheme()

  return (
    <>
      <SafeAreaView />
      <ScrollView>
        <HStack px={6} pt={5} pb={3} justifyContent="space-between">
          <Pressable onPress={goBack}>
            <ArrowLeft size={24} color={colors.gray[100]} />
          </Pressable>
          <Pressable onPress={() => navigate('edit')}>
            <PencilSimple size={24} color={colors.gray[100]} />
          </Pressable>
        </HStack>
        <Box position="relative">
          {adDisabled && (
            <Box
              position="absolute"
              bg="rgba(0,0,0,0.5)"
              zIndex={4}
              w="full"
              style={{ height: 280 }}
              alignItems="center"
              justifyContent="center"
            >
              <Text
                fontSize="sm"
                fontFamily="heading"
                color="gray.700"
                textTransform="uppercase"
              >
                Anúncio desativado
              </Text>
            </Box>
          )}

          <Carousel data={data} />
        </Box>
        <AddBody />
        <VStack px={6} pb={4} bg="gray.600">
          {adDisabled ? (
            <Pressable
              h={11}
              bg="blue.500"
              alignItems="center"
              justifyContent="center"
              rounded={6}
              mb={2}
              onPress={() => setAdDisabled(false)}
            >
              <HStack alignItems="center">
                <Power
                  style={{ marginTop: 2, marginRight: 10 }}
                  color={colors.gray[700]}
                  size={16}
                />
                <Text fontSize="sm" fontFamily="heading" color="gray.700">
                  Reativar anúncio
                </Text>
              </HStack>
            </Pressable>
          ) : (
            <Pressable
              h={11}
              bg="gray.100"
              alignItems="center"
              justifyContent="center"
              rounded={6}
              mb={2}
              onPress={() => setAdDisabled(true)}
            >
              <HStack alignItems="center">
                <Power
                  style={{ marginTop: 2, marginRight: 10 }}
                  color={colors.gray[700]}
                  size={16}
                />
                <Text fontSize="sm" fontFamily="heading" color="gray.700">
                  Desativar anúncio
                </Text>
              </HStack>
            </Pressable>
          )}

          <Pressable
            h={11}
            bg="gray.500"
            alignItems="center"
            justifyContent="center"
            rounded={6}
          >
            <HStack alignItems="center">
              <TrashSimple
                style={{ marginTop: 2, marginRight: 10 }}
                size={16}
                color={colors.gray[200]}
              />
              <Text fontSize="sm" fontFamily="heading" color="gray.200">
                Excluir anúncio
              </Text>
            </HStack>
          </Pressable>
        </VStack>
      </ScrollView>
    </>
  )
}
