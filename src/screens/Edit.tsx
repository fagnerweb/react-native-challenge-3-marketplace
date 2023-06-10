import { useNavigation } from '@react-navigation/native'
import {
  Box,
  Checkbox,
  HStack,
  Heading,
  Input,
  Pressable,
  Radio,
  ScrollView,
  Switch,
  Text,
  TextArea,
  useTheme,
} from 'native-base'
import { ArrowLeft, Plus } from 'phosphor-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { AppNavigatorRoutesProps } from '@routes/app.routes'

export function Edit() {
  const { navigate, goBack } = useNavigation<AppNavigatorRoutesProps>()

  const { colors } = useTheme()
  const ICON_COLOR_PLUS = colors.gray[400]
  return (
    <>
      <SafeAreaView style={{ backgroundColor: colors.gray[600] }} />
      <ScrollView bg="gray.600">
        <Box px={4} pt={5}>
          <HStack>
            <Pressable onPress={() => navigate('myAdds')} mr="auto">
              <ArrowLeft />
            </Pressable>
            <Heading
              mr="auto"
              fontSize="lg"
              fontFamily="heading"
              color="gray.100"
              mb={6}
            >
              Editar anúncio
            </Heading>
          </HStack>
          <Heading fontSize="md" fontFamily="heading" color="gray.200" mb={1}>
            Imagens
          </Heading>
          <Text fontSize="sm" fontFamily="body" color="gray.300" mb={4}>
            Escolha até 3 imagens para mostrar o quando o seu produto é
            incrível!
          </Text>
          <HStack mb={8}>
            <Pressable
              w={25}
              h={25}
              bg="gray.500"
              alignItems="center"
              justifyContent="center"
              rounded={6}
            >
              <Plus size={24} color={ICON_COLOR_PLUS} />
            </Pressable>
          </HStack>
          <Heading fontSize="md" fontFamily="heading" color="gray.200" mb={4}>
            Sobre o produto
          </Heading>
          <Input
            h={12}
            placeholderTextColor="gray.400"
            borderWidth={0}
            mb={4}
            fontSize="md"
            fontFamily="body"
            color="gray.400"
            py={3}
            px={4}
            bg="white"
            placeholder="Título o anúncio"
          />
          <TextArea
            h={40}
            placeholderTextColor="gray.400"
            borderWidth={0}
            mb={4}
            fontSize="md"
            fontFamily="body"
            color="gray.400"
            py={3}
            px={4}
            bg="white"
            autoCompleteType
            placeholder="Descrição do produto"
          />
          <Radio.Group
            name="status-product"
            accessibilityLabel="Informe se o produto é novo ou usado"
          >
            <HStack mb={8}>
              <Radio
                size="sm"
                value="product-new"
                _text={{
                  fontSize: 'md',
                  fontFamily: 'body',
                  color: 'gray.200',
                }}
              >
                Produto novo
              </Radio>
              <Radio
                ml={5}
                size="sm"
                value="product-old"
                _text={{
                  fontSize: 'md',
                  fontFamily: 'body',
                  color: 'gray.200',
                }}
              >
                Produto usado
              </Radio>
            </HStack>
          </Radio.Group>
          <Heading fontSize="md" fontFamily="heading" color="gray.200" mb={4}>
            Venda
          </Heading>
          <Input
            h={12}
            placeholderTextColor="gray.400"
            borderWidth={0}
            mb={4}
            fontSize="md"
            fontFamily="body"
            color="gray.400"
            py={3}
            px={4}
            bg="white"
            leftElement={
              <Text ml={4} fontSize="md" fontFamily="body" color="gray.100">
                R$
              </Text>
            }
            placeholder="Valor do produto"
          />
          <Heading fontSize="sm" fontFamily="heading" color="gray.200" mb={2}>
            Aceita troca?
          </Heading>
          <HStack>
            <Switch size="lg" height={6} mr="auto" />
          </HStack>
          <Heading fontSize="md" fontFamily="heading" color="gray.200" mb={4}>
            Meios de pagamentos aceitos
          </Heading>
          <Checkbox
            mb={3}
            borderColor="gray.400"
            bg="gray.600"
            value="boleto"
            _text={{
              fontSize: 'md',
              fontFamily: 'body',
              color: 'gray.200',
            }}
          >
            Boleto
          </Checkbox>
          <Checkbox
            mb={3}
            borderColor="gray.400"
            bg="gray.600"
            value="pix"
            _text={{
              fontSize: 'md',
              fontFamily: 'body',
              color: 'gray.200',
            }}
          >
            Pix
          </Checkbox>
          <Checkbox
            mb={3}
            borderColor="gray.400"
            bg="gray.600"
            value="dinheiro"
            _text={{
              fontSize: 'md',
              fontFamily: 'body',
              color: 'gray.200',
            }}
          >
            Dinheiro
          </Checkbox>
          <Checkbox
            mb={3}
            borderColor="gray.400"
            bg="gray.600"
            value="cartao-de-credito"
            _text={{
              fontSize: 'md',
              fontFamily: 'body',
              color: 'gray.200',
            }}
          >
            Cartão de Crédito
          </Checkbox>
          <Checkbox
            mb={3}
            borderColor="gray.400"
            bg="gray.600"
            value="deposito-bancario"
            _text={{
              fontSize: 'md',
              fontFamily: 'body',
              color: 'gray.200',
            }}
          >
            Depósito Bancário
          </Checkbox>
        </Box>
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
          onPress={goBack}
        >
          <Text fontSize="sm" fontFamily="heading" color="gray.200">
            Cancelar
          </Text>
        </Pressable>
        <Pressable
          h={11}
          bg="gray.100"
          width="48%"
          alignItems="center"
          justifyContent="center"
          rounded={6}
          onPress={() => navigate('adPreview')}
        >
          <Text fontSize="sm" fontFamily="heading" color="white">
            Avançar
          </Text>
        </Pressable>
      </HStack>
    </>
  )
}
