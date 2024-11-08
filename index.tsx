import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import ContactList from "@/components/ContactList";

const index = () => {
  return (
    <View style={styles.Container}>
      <SafeAreaView>
        <ScrollView>
          <NavBar />
          <SearchBar />
          <ContactList />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#6C30A9",
    height: "auto",
  },
});
