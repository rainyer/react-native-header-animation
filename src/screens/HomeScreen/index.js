import React from 'react'
import { View, Text, ScrollView, Animated, StyleSheet, Button } from 'react-native'
import items from './items.json'


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: new Animated.Value(0),
    }
  }

  getItems = () => {
    return items.map((item, i) => {
      return (
        <View key={String(i)} style={styles.item}>
          <Text>{item.title}</Text>
        </View>
      )
    })
  }

  render() {
    const {scrollY} = this.state

    return (
      <>
        <AnimatedHeader scrollY={scrollY} />
        <Animated.ScrollView
          contentContainerStyle={styles.scrollViewContentStyles}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}],
            {useNativeDriver: true},
          )}
        >
          <Button title={'Masonry List'} onPress={
            () => this.props.navigation.navigate('MasonryListScreen')
          } />
          {this.getItems()}
        </Animated.ScrollView>
      </>
    )
  }
}

const AnimatedHeader = ({scrollY}) => {
  const endingHeaderAnimation = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  })

  const initialHeaderAnimation = scrollY.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  })

  return (
    <>
      <ColoredHeader opacityAnimatedValue={endingHeaderAnimation} />
      <TransparentHeader opacityAnimatedValue={initialHeaderAnimation} />
    </>
  )
}

const TransparentHeader = ({opacityAnimatedValue}) => {
  return (
    <Animated.View
      style={{
        ...styles.header,
        backgroundColor: 'transparent',
        opacity: opacityAnimatedValue,
      }}
    >
      <Text
        style={{
          ...styles.headerTitle,
          color: 'white',
        }}
      >
        Transparent Header
      </Text>
    </Animated.View>
  )
}

const ColoredHeader = ({opacityAnimatedValue}) => {
  return (
    <Animated.View
      style={{
        ...styles.header,
        backgroundColor: 'white',
        opacity: opacityAnimatedValue,
      }}
    >
      <Text
        style={{
          ...styles.headerTitle,
          color: 'black',
        }}
      >
        Colored Header
      </Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  scrollViewContentStyles: {
    backgroundColor: '#836fa9',
    paddingTop: 80,
    paddingHorizontal: 16,
  },
  header: {
    width: '100%',
    zIndex: 200,
    position: 'absolute',
    top: 0,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  item: {
    marginBottom: 20,
    backgroundColor: '#ca9b52',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
})