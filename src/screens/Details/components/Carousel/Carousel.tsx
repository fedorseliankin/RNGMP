import {useRef, useState} from 'react';
import {View, Image, Pressable} from 'react-native';
import {Pagination, Carousel} from 'react-native-snap-carousel-v4';

import NextIcon from '@icons/next.svg'
import PrevIcon from '@icons/Prev.svg'

import {SLIDER_WIDTH, ITEM_WIDTH} from '../../Details';
import {styles} from './styles';
import  {TImg, TImageCarousel} from './types';


const renderItem = ({item}: {item: TImg}): JSX.Element => 
  <View>
    <Image source={{uri: item.url}} style={styles.image} />
  </View>;

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
