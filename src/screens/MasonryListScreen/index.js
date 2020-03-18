import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, Image } from 'react-native'

export default class MasonryListScreen extends Component {

  constructor(props){
    super(props)

    this.state = {
      imageRows: [
        [
          {
            uri: 'https://i.etsystatic.com/5400716/r/il/267b4a/2164321610/il_1588xN.2164321610_s6a1.jpg',
            height: 300,
            marginTop: 0,
            viewMargin: 0,
            color: 'black'
          },
          {
            uri:  'https://i.etsystatic.com/18468018/r/il/ade52f/1826323133/il_1588xN.1826323133_r2c6.jpg',
            height: 260,
            marginTop: 0,
            color: 'orange'
          }
        ],
        [
          {
            uri: 'https://i.etsystatic.com/5400716/r/il/267b4a/2164321610/il_1588xN.2164321610_s6a1.jpg',
            height: 230,
            marginTop: 40,
            viewMargin: -40,
            color: 'blue'
          },
          {
            uri:  'https://i.etsystatic.com/18468018/r/il/ade52f/1826323133/il_1588xN.1826323133_r2c6.jpg',
            height: 280,
            marginTop: 0,
            color: 'yellow'
          }
        ],
        [
          {
            uri: 'https://i.etsystatic.com/5400716/r/il/267b4a/2164321610/il_1588xN.2164321610_s6a1.jpg',
            height: 230,
            viewMargin: -30,
            color: 'red'
          },
          {
            uri:  'https://i.etsystatic.com/18468018/r/il/ade52f/1826323133/il_1588xN.1826323133_r2c6.jpg',
            height: 230,
            marginTop: 10,
            color: 'green'
          }
        ]
      ]
    }
  }

  render(){
    const { imageRows } = this.state
    return(
      <FlatList
        contentContainerStyle={{backgroundColor: 'white', paddingVertical: 100 }}
        style={styles.flatList}
        data={imageRows}
        renderItem={({item, index}) => {
          return (
            <ImageRow imageRow={item} index={index} />
          )
        }}
      />
    )
  }
}

const ImageRow = ({imageRow, index}) => {

  const src1 =  {
    uri: imageRow[0].uri
  }
  const src2 =  {
    uri: imageRow[1].uri
  }

  const bg = index % 2 == 0 ? 'red' : 'yellow'

  return (
    <View style={[styles.imageRow,{  
      marginTop: imageRow[0].viewMargin }]}>
      <Image 
        source={null} 
        style={[styles.imageStyle, {
          height: imageRow[0].height,
          marginTop: imageRow[0].marginTop,
          backgroundColor: imageRow[0].color
        }]} />
      <Image 
        source={null} 
        style={[styles.imageStyle, {
          height: imageRow[1].height,
          marginTop: imageRow[1].marginTop,
          backgroundColor: imageRow[1].color
        }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  flatList: {},
  imageRow: {
    borderRadius: 4,
    height: 300,
    flexDirection: 'row',
  },
  imageStyle: {
    borderRadius: 8,
    flex: 1,
    opacity: 0.8,
    height: 300,
    width: '100%'
  }
})
