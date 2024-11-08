import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import Contacts from "./Contacts";

const ContactList = () => {
  return (
    <ScrollView scrollEnabled style={styles.Container}>
      {Contacts.map(({ UID, Images, LastTime, Name, Online, Status }) => (
        <View key={UID} style={styles.CardContainer}>
          <View style={styles.RightSideFlex}>
            <Image
              source={{
                uri: Images,
              }}
              style={styles.ProfilePics}
            />
            <View>
              <Text style={[styles.NameText]}>{Name}</Text>
              <Text style={[styles.StutasText]}>{Status}</Text>
            </View>
          </View>
          <View>
            <View>
              {Online ? (
                <View style={styles.onlineSymb}></View>
              ) : (
                <View><Text style={styles.LastTime}>{LastTime}</Text></View>
              )}
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#000",
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    marginTop: 50,
    padding: 10,
  },

  CardContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#10101a",
    marginVertical: 20,
    marginHorizontal: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
  },

  RightSideFlex: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 30,
  },

  ProfilePics: {
    height: 50,
    width: 50,
    borderRadius: 90,
  },

  NameText: {
    color: "rgba(255,255,255, 1)",
    fontWeight: "700",
    fontSize: 18,
  },

  StutasText: {
    color: "background:rgba(255,255,255, 0.5)",
  },

  onlineSymb: {
    height: 15,
    width: 15,
    backgroundColor: "green",
    borderWidth: 1,
    borderRadius: 90,
    borderColor: "#fff",
  },

  LastTime: {
    color: "#fff",
  },
});
