import { Box, HStack, Image, Pressable, Text } from 'native-base'

type Props = {
  size: number
  isNew: boolean
  showAvatar?: boolean
  isActive?: boolean
}

export function Card({
  size,
  isNew,
  showAvatar = true,
  isActive = true,
}: Props) {
  return (
    <Box w={size} mb={6}>
      <Box style={{ position: 'relative' }}>
        <Image
          width="100%"
          height={100}
          source={{
            uri: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
          }}
          rounded={8}
          alt="Imagem ilustrativa do post"
        />
        {showAvatar && (
          <Pressable style={{ position: 'absolute', top: 4, left: 4 }}>
            <Image
              size={6}
              rounded="full"
              borderWidth={2}
              borderColor="blue.500"
              alt=""
              source={{
                uri: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
              }}
            />
          </Pressable>
        )}

        <Pressable
          style={{
            position: 'absolute',
            top: 4,
            right: 4,
            paddingTop: 2,
            paddingBottom: 2,
          }}
          bg={isNew ? 'blue.700' : 'gray.200'}
          pl={2}
          pr={2}
          rounded="full"
        >
          <Text
            fontFamily="heading"
            fontSize="xxs"
            color="white"
            textTransform="uppercase"
          >
            {isNew ? 'Novo' : 'Usado'}
          </Text>
        </Pressable>
        {!isActive && (
          <Text
            fontFamily="heading"
            color="gray.700"
            textTransform="uppercase"
            style={{ position: 'absolute', bottom: 8, left: 8, fontSize: 11 }}
          >
            Anúncio desativado
          </Text>
        )}
      </Box>
      <Text
        fontSize="sm"
        fontFamily="heading"
        color={!isActive ? 'gray.400' : 'gray.200'}
      >
        Tênis vermelho
      </Text>
      <HStack alignItems="flex-end">
        <Text
          fontSize="xs"
          fontFamily="heading"
          mr={1}
          color={!isActive ? 'gray.400' : 'gray.100'}
        >
          R$
        </Text>
        <Text
          fontSize="md"
          fontFamily="heading"
          color={!isActive ? 'gray.400' : 'gray.100'}
          style={{
            marginBottom: -2,
          }}
        >
          59,90
        </Text>
      </HStack>
    </Box>
  )
}
