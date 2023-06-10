import { useRef, useState } from 'react'
import { Dimensions, View } from 'react-native'
import { Box, HStack, Image } from 'native-base'
import CarouselReanimated, {
  ICarouselInstance,
} from 'react-native-reanimated-carousel'

type Item = {
  id: number
  uri: string
}

type Props = {
  data: Item[]
}

export function Carousel({ data }: Props) {
  const [newIndex, setNewIndex] = useState(0)
  const carouselRef = useRef<ICarouselInstance>(null)

  const width = Dimensions.get('window').width

  return (
    <Box>
      <CarouselReanimated
        style={{
          backgroundColor: '#000',
        }}
        ref={carouselRef}
        loop={false}
        width={width}
        height={280}
        autoPlay={false}
        data={data}
        scrollAnimationDuration={100}
        onSnapToItem={(index) => setNewIndex(index)}
        renderItem={({ item, index }) => (
          <View key={index}>
            <Image
              width={width}
              height={280}
              source={{ uri: item.uri }}
              alt=""
              resizeMode="cover"
            />
          </View>
        )}
      />
      <HStack
        mt={-2}
        ml={2}
        mr={2}
        p={0}
        justifyContent="space-between"
        h={2}
        style={{
          gap: 4,
          width: width - 16,
        }}
      >
        {data.map((item) => (
          <View
            key={item.id}
            style={[
              {
                backgroundColor:
                  newIndex + 1 === item.id
                    ? 'rgba(247,247,248,1)'
                    : 'rgba(247,247,248,.5)',
                width: (width - 56) / data.length,
              },
              {
                display: 'flex',
                height: 3,
                borderRadius: 999,
              },
            ]}
          />
        ))}
      </HStack>
    </Box>
  )
}
