import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CheckBox from "@react-native-community/checkbox";
import { Formik } from "formik";
import * as yup from "yup";
import { functions } from "../fb";

import Input from "./Input";
import Button from "./Button";
import SwapValuesButton from "./SwapValuesButton";
import SelectLanguageInput from "./SelectLanguageInput";

const AddWordForm = () => {
  const [translateLangs, setTranslateLangs] = useState({
    from: "en",
    to: "pl",
    autoTranslate: false,
  });
  useEffect(() => {
    (async () => {
      const storage = await getStoragedLangs();
      setTranslateLangs(storage);
    })();
  }, []);

  const addWordToDictionary = functions.httpsCallable("addWordToDictionary");
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        word: "",
        translation: "",
        autoTranslate: false,
        translateFrom: translateLangs.from,
        translateTo: translateLangs.to,
      }}
      validationSchema={yup.object().shape({
        word: yup.string().required("Word is required"),
        translation: yup.string(),
        autoTranslate: yup.boolean(),
        translateFrom: yup.string(),
        translateTo: yup.string(),
      })}
      onSubmit={async (values, { resetForm }) => {
        resetForm();
        await addWordToDictionary(values);
      }}
    >
      {({ setFieldValue, handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.wrapper}>
          <Input
            placeholder="Enter the word here"
            onChangeText={handleChange("word")}
            onBlur={handleBlur("word")}
            value={values.word}
          />
          {!values.autoTranslate ? (
            <Input
              placeholder="Enter the word's translation here"
              onChangeText={handleChange("translation")}
              onBlur={handleBlur("translation")}
              value={values.translation}
            />
          ) : null}
          <View style={styles.checkboxWrapper}>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginRight: 8 }}>
              Auto translate
            </Text>
            <CheckBox
              value={values.autoTranslate}
              onValueChange={(value) => setFieldValue("autoTranslate", value)}
              tintColor="#3f37c9"
              onFillColor="#3f37c9"
            />
          </View>
          {values.autoTranslate ? (
            <View style={styles.languagesWrapper}>
              <SelectLanguageInput
                type="translateFrom"
                value={values.translateFrom}
              />
              <SwapValuesButton
                style={styles.swapButton}
                firstVariable="translateFrom"
                secondVariable="translateTo"
              />
              <SelectLanguageInput
                type="translateTo"
                value={values.translateTo}
              />
            </View>
          ) : null}
          <Button onPress={handleSubmit}>Add</Button>
        </View>
      )}
    </Formik>
  );
};

export default AddWordForm;

const styles = StyleSheet.create({
  wrapper: {
    width: "75%",
    height: "45%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  checkboxWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  languagesWrapper: {
    marginTop: -12,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  swapButton: {
    marginHorizontal: 27,
  },
});

const getStoragedLangs = async () => {
  const translateFrom = await AsyncStorage.getItem("translateFrom");
  const translateTo = await AsyncStorage.getItem("translateTo");
  const autoTranslate = await AsyncStorage.getItem("autoTranslate");
  return {
    from: translateFrom || "en",
    to: translateTo || "pl",
    autoTranslate: Boolean(autoTranslate),
  };
};
