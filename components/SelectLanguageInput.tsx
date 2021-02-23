import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useFormikContext } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";

import languages from "utils/languages";

type LangType = "translateFrom" | "translateTo";

interface Props {
  type: LangType;
  value: string;
}

const SelectLanguageInput: React.FC<Props> = ({ type, value }) => {
  const { setFieldValue } = useFormikContext();
  return (
    <Picker
      selectedValue={value}
      style={styles.select}
      dropdownIconColor="#000000"
      onValueChange={async (itemValue) => {
        setFieldValue(type, itemValue);
        await setStorageLang(type, String(itemValue));
      }}
    >
      {languages.map((item, index) => (
        <Picker.Item
          key={index + item.language}
          label={item.name}
          value={item.language}
        />
      ))}
    </Picker>
  );
};

export default SelectLanguageInput;

const styles = StyleSheet.create({
  select: {
    height: 50,
    width: 120,
    backgroundColor: "white",
  },
});

const setStorageLang = async (type: LangType, value: string) =>
  await AsyncStorage.setItem(type, value);
