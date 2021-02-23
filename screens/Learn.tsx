import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useFirebaseData from "hooks/useFirebaseData";

import Layout from "components/Layout";
import LearnType from "components/LearnViews/LearnTypeTerm";
import Button from "components/Button";

const Learn = () => {
  const navigation = useNavigation();
  const [dicitonaryIndex, setDictionaryIndex] = useState(0);
  const { dictionary } = useFirebaseData();
  const handleNextWord = () => setDictionaryIndex((prev) => prev + 1);

  return (
    <Layout>
      {dicitonaryIndex < dictionary.length ? (
        <LearnType
          data={dictionary[dicitonaryIndex]}
          index={dicitonaryIndex}
          setNextWord={handleNextWord}
        />
      ) : (
        <View style={styles.container}>
          {dictionary.length ? (
            <Button onPress={() => setDictionaryIndex(0)}>Learn again</Button>
          ) : null}
          <Button
            onPress={() => {
              navigation.navigate("Home");
              setDictionaryIndex(0);
            }}
          >
            Leave
          </Button>
        </View>
      )}
    </Layout>
  );
};

export default Learn;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "25%",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
