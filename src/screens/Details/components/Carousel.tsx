import {useRef, useState} from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';
import {Pagination, Carousel} from 'react-native-snap-carousel-v4';
import {SLIDER_WIDTH, ITEM_WIDTH} from '../Details';
import NextIcon from '../../../assets/icons/next.svg'
import PrevIcon from '../../../assets/icons/Prev.svg'

type TImg = {
  url: string;
};
type TImageCarousel = {
  imgs: Array<TImg>;
};
const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 0,
  },
  containerStyle: {
    margin: 0,
  },
  carousel: {
    width: 250,
  },
  dotContainerStyle: {
    marginVertical: 0,
    marginHorizontal: 3,
  },
  layout: {
    marginTop: 45,
  },
  icon: {
    width: 25,
    height: 25,
  },
  image: {
    width: 250,
    height: 250,
  },
  inactiveDotStyle: {
    backgroundColor: '#C3C3C3',
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#008ACE',
  },
});
const renderItem = ({item}: {item: TImg}) => {
  return (
    <View>
      <Image source={{uri: item.url}} style={styles.image} />
    </View>
  );
};
export const ImageCarousel = ({imgs}: TImageCarousel): JSX.Element => {
  const carouselRef = useRef<Carousel<any>>(null);
  const [index, setIndex] = useState(0);
  const nextImg = () => carouselRef?.current?.snapToNext();
  const prevImg = () => carouselRef?.current?.snapToPrev();
  return (
    <View style={styles.layout}>
      <View style={styles.container}>
        <Pressable onPressIn={prevImg}>
          <PrevIcon style={styles.icon} />
        </Pressable>
        <View style={styles.carousel}>
          <Carousel
            vertical={false}
            ref={carouselRef}
            data={imgs}
            renderItem={renderItem}
            sliderWidth={SLIDER_WIDTH - 100}
            itemWidth={ITEM_WIDTH}
            onSnapToItem={setIndex}
          />
        </View>
        <Pressable onPressIn={nextImg}>
          <NextIcon style={styles.icon} />
        </Pressable>
      </View>
      <Pagination
        dotsLength={imgs.length}
        activeDotIndex={index}
        dotStyle={styles.dotStyle}
        dotContainerStyle={styles.dotContainerStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        containerStyle={styles.containerStyle}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    </View>
  );
};
