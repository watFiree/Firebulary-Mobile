import React from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { functions } from "../fb";

import Layout from "./Layout";
//import TableWordSection from "./TableWordSection";

interface DataSection {
  word: string;
  translation: string;
  translatedToLanguage: string;
  answeredCorrectly: boolean;
}

const DictionaryTable: React.FC<{ data: DataSection[] }> = ({ data }) => {
  return (
    <Layout style={{ justifyContent: "flex-start", paddingTop: 18 }}>
      <View style={styles.row}>
        <View style={[styles.cell, styles.left, styles.heading]}>
          <Text style={styles.headingText}>Word</Text>
        </View>
        <View style={[styles.cell, styles.heading]}>
          <Text style={styles.headingText}>Translation</Text>
        </View>
        <View style={[styles.cell, styles.right, styles.heading]}>
          <Text style={styles.headingText}>Delete</Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={TableWordSection}
        keyExtractor={(data, index) => data.word + index}
      />
    </Layout>
  );
};

export default DictionaryTable;

const TableWordSection: React.FC<{
  item: { word: string; translation: string };
  index: number;
}> = ({ item, index }) => {
  const deleteWord = functions.httpsCallable("deleteWord");
  return (
    <View style={styles.row}>
      <View style={[styles.cell, styles.left]}>
        <Text style={{ textAlign: "center" }}>{item.word}</Text>
      </View>
      <View style={[styles.cell]}>
        <Text style={{ textAlign: "center" }}>{item.translation}</Text>
      </View>
      <TouchableOpacity
        style={[styles.cell, styles.right, { alignItems: "center" }]}
        onPress={() => deleteWord(index)}
      >
        <MaterialIcons name="delete-forever" size={32} color="#F41226" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    minWidth: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  cell: {
    minWidth: "30%",
    maxWidth: "30%",
    paddingVertical: 6,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    borderTopWidth: 1,
  },
  headingText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  left: {
    borderRightWidth: 0,
  },
  right: {
    borderLeftWidth: 0,
  },
});
