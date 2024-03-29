import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const PriceResult = ({ result, navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          id = result.id;
          //console.log(id);
          navigation.navigate("Details", { id });
        }}
      >
        <Image style={styles.image} source={{ uri: result.image_url }} />
        <Text style={styles.name}>{result.name}</Text>
        <Text>
          Avg. {result.rating} stars from {result.review_count} reviews
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 100,
    borderRadius: 4
  },
  name: {
    fontWeight: "bold"
  }
});

export default PriceResult;
