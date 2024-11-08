import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const NavBar = () => {
  return (
    <View style={styles.Container}>
      <Image
        source={require("../Assets/Image/Menu.png")}
        style={[styles.Svgs]}
      />
      <View>
        <Image
          source={require("../Assets/Image/My_image.jpg")}
          style={[styles.My_Image]}
        />
        <View style={styles.onlineSym}></View>
      </View>
      <Image
        source={require("../Assets/Image/Bell.png")}
        style={[styles.Svgs]}
      />
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 12,
  },

  Svgs: {
    height: 40,
    width: 40,
  },

  My_Image: {
    height: 80,
    width: 80,
    borderRadius: 50,
    position:'absolute'
  },

  onlineSym : {
    height : 20,
    width : 20,
    backgroundColor : 'green',
    borderColor : '#fff',
    borderWidth : 1.5,
    borderRadius:90,
    marginLeft : 66,
    marginTop:50,
  }
});
