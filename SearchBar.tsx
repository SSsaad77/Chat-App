import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View style={styles.Container}>
      <TextInput
      placeholder='Search Massage'
      style={styles.InputBar}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    InputBar : {
       backgroundColor : 'rgba(170, 0, 255, .50)',
       width:350,
       padding : 10,
       borderRadius : 99,
       color : '#fffa'
    },

    Container : {
        flex : 1,
        flexDirection : 'row',
        marginTop :50,
        justifyContent:'center',
        alignItems:'center'
    }
})