import {
  Avatar,
  Badge,
  Box,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from 'native-base'
import { Bank, Barcode, CreditCard, Money, QrCode } from 'phosphor-react-native'

export function AddBody() {
  return (
    <Box pb={6} pt={5} bg="gray.600">
      <HStack px={6}>
        <Avatar size={6} overflow="hidden">
          <Image
            size={6}
            source={{
              uri: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
            }}
            alt=""
          />
        </Avatar>
        <Text fontSize="sm" fontFamily="body" color="gray.100" ml={2}>
          Makenna Baptista
        </Text>
      </HStack>
      <VStack alignItems="flex-start" px={6} mt={6}>
        <Badge
          rounded={999}
          bg="gray.500"
          px={2}
          style={{ paddingVertical: 2 }}
          _text={{
            fontSize: 'xxs',
            textTransform: 'uppercase',
            color: 'gray.200',
            fontFamily: 'heading',
          }}
        >
          Novo
        </Badge>
        <HStack
          w="full"
          mt={2}
          mb={2}
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <Heading fontSize="lg" fontFamily="heading" color="gray.100">
            Bicicleta
          </Heading>
          <HStack alignItems="flex-end">
            <Text fontSize="sm" fontFamily="heading" color="blue.500">
              R$
            </Text>
            <Text fontSize="lg" fontFamily="heading" color="blue.500" mb={-1}>
              120,00
            </Text>
          </HStack>
        </HStack>
        <Text fontSize="sm" fontFamily="body" color="gray.200" mb={6}>
          Cras congue cursus in tortor sagittis placerat nunc, tellus arcu.
          Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet
          nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis
          in aliquam.
        </Text>

        <HStack mb={4}>
          <Text fontSize="sm" fontFamily="heading" color="gray.200" mr={2}>
            Aceita troca?
          </Text>
          <Text fontSize="sm" fontFamily="body" color="gray.200">
            Sim
          </Text>
        </HStack>

        <Text fontSize="sm" fontFamily="heading" color="gray.200" mb={2}>
          Meios de pagamento:
        </Text>
        <HStack alignItems="center" mb={1}>
          <Barcode size={16} />
          <Text fontSize="sm" fontFamily="body" color="gray.200" ml={2}>
            Boleto
          </Text>
        </HStack>
        <HStack alignItems="center" mb={1}>
          <QrCode size={16} />
          <Text fontSize="sm" fontFamily="body" color="gray.200" ml={2}>
            Pix
          </Text>
        </HStack>
        <HStack alignItems="center" mb={1}>
          <Money size={16} />
          <Text fontSize="sm" fontFamily="body" color="gray.200" ml={2}>
            Dinheiro
          </Text>
        </HStack>
        <HStack alignItems="center" mb={1}>
          <CreditCard size={16} />
          <Text fontSize="sm" fontFamily="body" color="gray.200" ml={2}>
            Cartão de Crédito
          </Text>
        </HStack>
        <HStack alignItems="center" mb={1}>
          <Bank size={16} />
          <Text fontSize="sm" fontFamily="body" color="gray.200" ml={2}>
            Depósito Bancário
          </Text>
        </HStack>
      </VStack>
    </Box>
  )
}
