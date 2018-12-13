import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements'

class Footer extends Component {
  render(){
    return (
    <View style={[styles.footerStyle, styles.cardStyle]}>
      <Button
        icon={{name: 'code'}}
        backgroundColor='#03A9F4'
        title="Buy Now!"
      />
    </View>
    )
  }
}

const styles = {
  footerStyle: {
    // flex: 1,
    margin: 32,
    marginTop: 0,
    marginBottom: 0,
  },
  cardStyle: {
    // marginTop: 16,
    shadowOpacity: 0,
    border: 0,
    borderRadius: 0,
    shadowRadius: 0,
    flex: 1,
    // position: 'absolute',
    // // resizeMode: 'stretch',
  }
}

export default Footer
