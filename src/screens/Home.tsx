import { useCallback, useMemo, useRef } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import {
  HStack,
  ScrollView,
  VStack,
  Text,
  Avatar,
  Image,
  Pressable,
  useTheme,
  Input,
  Divider,
  View,
} from 'native-base'

import BottomSheet from '@gorhom/bottom-sheet'
import {
  ArrowRight,
  Tag,
  Plus,
  MagnifyingGlass,
  Sliders,
} from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'

import { Card } from '@components/Card'
import AvatarImage from '@assets/avatar.png'

export function Home() {
  const { colors } = useTheme()

  const { navigate } = useNavigation<AppNavigatorRoutesProps>()
  const bottomSheetRef = useRef<BottomSheet>(null)

  const snapPoints = useMemo(() => ['1%', '64%'], [])

  const handleSheetChanges = useCallback((index: number) => {
    if (index <= 0) {
      handleCloseBottomSheet()
    }
  }, [])

  function handleOpenBottomSheet() {
    bottomSheetRef.current?.expand()
  }

  function handleCloseBottomSheet() {
    bottomSheetRef.current?.close()
  }

  // const loadCards = useCallback(async () => {
  //   await fetch('http://localhost:3333/products')
  //     .then((response) => response.json())
  //     .then((response) => console.log(response.data))
  // }, [])

  // useEffect(() => {
  //   loadCards()
  // }, [loadCards])

  const MARGIN_HORIZONTAL = 32
  const GAP = 18
  const width = Dimensions.get('window').width - MARGIN_HORIZONTAL - GAP

  return (
    <View flexGrow={1} bg="gray.600">
      <ScrollView
        px={4}
        pt={10}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80, flexGrow: 1 }}
      >
        <HStack alignItems="center" mb={8}>
          <HStack flex={1} alignItems="center">
            <Avatar mr={2} borderWidth={2} borderColor="blue.500">
              <Image size={45} source={AvatarImage} alt="" />
            </Avatar>
            <VStack>
              <Text fontFamily="body" fontSize="md" color="gray.100" mb={0}>
                Boas vindas,
              </Text>
              <Text fontFamily="heading" color="gray.100" fontSize="md">
                Maria!
              </Text>
            </VStack>
          </HStack>
          <Pressable
            bg="gray.100"
            rounded={8}
            p={3}
            onPress={() => navigate('create')}
          >
            <HStack alignItems="center">
              <Plus color="white" size={16} style={{ marginRight: 10 }} />
              <Text color="white" fontSize={14} fontFamily="body">
                Criar anúncio
              </Text>
            </HStack>
          </Pressable>
        </HStack>
        <Text mb={3} fontFamily="body" fontSize="sm" color="gray.300">
          Seus produtos anunciados para venda
        </Text>
        <HStack
          justifyContent="space-between"
          pt={3}
          pb={3}
          pl={4}
          pr={5}
          bg="blue.200"
          alignItems="center"
          borderRadius={6}
          mb={8}
        >
          <HStack alignItems="center">
            <Tag size={22} color={colors.blue[700]} />
            <VStack ml={4}>
              <Text fontSize="lg" fontFamily="heading" color="gray.200">
                4
              </Text>
              <Text fontSize="xs" fontFamily="body" color="gray.200">
                anúncios ativos
              </Text>
            </VStack>
          </HStack>
          <Pressable onPress={() => navigate('myAdds')}>
            <HStack alignItems="center">
              <Text fontFamily="heading" fontSize="xs" color="blue.700" mr="2">
                Meus anúncios
              </Text>
              <ArrowRight size={16} color={colors.blue[700]} />
            </HStack>
          </Pressable>
        </HStack>
        <Text color="gray.300" fontSize="sm" fontFamily="body" mb={3}>
          Compre produtos variados
        </Text>
        <Input
          placeholder="Buscar anúncio"
          bg="gray.700"
          placeholderTextColor="gray.400"
          fontSize="md"
          fontFamily="body"
          rightElement={
            <HStack h={4} alignItems="center" mr={4}>
              <Pressable>
                <MagnifyingGlass />
              </Pressable>
              <Divider orientation="vertical" mx="3" bg="gray.400" />
              <Pressable onPress={handleOpenBottomSheet}>
                <Sliders />
              </Pressable>
            </HStack>
          }
        />
        <View
          mt={6}
          flexWrap="wrap"
          style={{
            marginTop: 24,
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Card size={width / 2} isNew isActive={false} />
          <Card size={width / 2} isNew />
          <Card size={width / 2} isNew={false} />
          <Card size={width / 2} isNew />
          <Card size={width / 2} isNew={false} />
          <Card size={width / 2} isNew={false} />
          <Card size={width / 2} isNew />
          <Card size={width / 2} isNew={false} />
        </View>
      </ScrollView>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
})
