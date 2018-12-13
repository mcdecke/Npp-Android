import React, {Component} from 'react'
import {
  Text,
  Animated,
  View,
  Image,
  ImageBackground,
  PanResponder,
  Dimensions,
  LayoutAnimation,
  UIManager
 } from 'react-native'
 import {Button, Card} from 'react-native-elements'
 import Footer from './Footer'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height
const SWIPE_THRESHOLD = .25 * SCREEN_WIDTH
const SWIPE_OUT_DURATION = 250

class Poster extends Component {

    renderPoster(){
      // console.log(this.props.posters);
      let park = this.props.posters
      // console.log(this.park);
      if(park == undefined){
        return(
          <Text>Loading!!!</Text>
        )
      } else {
        return (
        <Animated.View
          style={[
            styles.cardStyle,
            {elevation: 1}]}
          // {...this.state.panResponder.panHandlers}
        >
          <Card >
            <Image
            source={{uri: park.url}}
            style={[styles.posterStyle]}
            >
            </Image>
          </Card>
        </Animated.View>
        )
      }
    }


  render(){
    return(
      <Animated.View style={styles.cardStyle}>
        {this.renderPoster()}
      </Animated.View>
    )
  }

}

const styles={
  posterStyle: {
    // flex: 1,
    resizeMode: 'stretch',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT - 68,

  },
  cardStyle: {
    width: SCREEN_WIDTH + 42,
    marginLeft: -16,
  }
}

export default Poster
