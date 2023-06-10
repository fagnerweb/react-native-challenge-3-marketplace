import { useState } from 'react'
import { Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  CheckIcon,
  HStack,
  Heading,
  Pressable,
  ScrollView,
  Select,
  Text,
  ChevronDownIcon,
  View,
  useTheme,
} from 'native-base'
import { Plus } from 'phosphor-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { AppNavigatorRoutesProps } from '@routes/app.routes'

import { Card } from '@components/Card'

export function MyAdds() {
  const [filter, setFilter] = useState('')

  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const MARGIN_HORIZONTAL = 32
  const GAP = 18
  const width = Dimensions.get('window').width - MARGIN_HORIZONTAL - GAP

  const { colors } = useTheme()
  return (
    <>
      <SafeAreaView style={{ backgroundColor: colors.gray[600] }} />
      <ScrollView px={4} pt={5} contentContainerStyle={{ paddingBottom: 80 }}>
        <HStack mb={8} alignItems="center" justifyContent="center">
          <Heading
            ml="auto"
            fontSize="lg"
            fontFamily="heading"
            color="gray.100"
          >
            Meus anúncios
          </Heading>
          <Pressable onPress={() => navigate('create')} ml="auto">
            <Plus size={24} />
          </Pressable>
        </HStack>
        <HStack alignItems="center" mb={5}>
          <Text flex={1}>9 anúncios</Text>
          <Select
            minWidth="110"
            selectedValue={filter}
            accessibilityLabel="Filtre os anúncios"
            placeholder="Todos"
            dropdownOpenIcon={
              <ChevronDownIcon style={{ width: 16, marginRight: 10 }} />
            }
            dropdownCloseIcon={
              <ChevronDownIcon style={{ width: 16, marginRight: 10 }} />
            }
            h={8}
            _selectedItem={{
              bg: 'gray.600',
              endIcon: <CheckIcon />,
            }}
            _text={{
              fontSize: 'sm',
              fontFamily: 'body',
              color: 'gray.100',
            }}
            onValueChange={(itemValue) => setFilter(itemValue)}
          >
            <Select.Item label="Todos" value="all" />
            <Select.Item label="Ativos" value="active" />
            <Select.Item label="Inativos" value="inactive" />
            <Select.Item label="Novos" value="new" />
            <Select.Item label="usados" value="old" />
          </Select>
        </HStack>
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
          <Pressable onPress={() => navigate('editAddDetails')}>
            <Card size={width / 2} showAvatar={false} isNew isActive={false} />
          </Pressable>
          <Pressable onPress={() => navigate('editAddDetails')}>
            <Card size={width / 2} showAvatar={false} isNew isActive={false} />
          </Pressable>
          <Pressable onPress={() => navigate('editAddDetails')}>
            <Card size={width / 2} showAvatar={false} isNew={false} />
          </Pressable>
          <Pressable onPress={() => navigate('editAddDetails')}>
            <Card size={width / 2} showAvatar={false} isNew isActive={false} />
          </Pressable>
          <Pressable onPress={() => navigate('editAddDetails')}>
            <Card
              size={width / 2}
              showAvatar={false}
              isNew={false}
              isActive={false}
            />
          </Pressable>
          <Pressable onPress={() => navigate('editAddDetails')}>
            <Card size={width / 2} showAvatar={false} isNew={false} />
          </Pressable>
          <Pressable onPress={() => navigate('editAddDetails')}>
            <Card size={width / 2} showAvatar={false} isNew isActive={false} />
          </Pressable>
          <Pressable onPress={() => navigate('editAddDetails')}>
            <Card size={width / 2} showAvatar={false} isNew={false} />
          </Pressable>
        </View>
      </ScrollView>
    </>
  )
}
