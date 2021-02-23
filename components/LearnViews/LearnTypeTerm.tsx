import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { DictionarySection } from "../../types";

import useLearnViewFunctions from "hooks/useLearnViewFunctions";
import Title from "../Title";
import Input from "../Input";
import Button from "../Button";
import ResponsePopover from "./ResponsePopover";

const LearnType: React.FC<{
  data: DictionarySection;
  index: number;
  setNextWord: () => void;
}> = ({ data, index, setNextWord }) => {
  const [
    handleCheck,
    answer,
    setAnswer,
    usedHint,
    showHint,
    answeredCorrectly,
    responsePopover,
  ] = useLearnViewFunctions(index, data.translation, setNextWord);

  return (
    <>
      {responsePopover ? (
        <ResponsePopover answeredCorrectly={answeredCorrectly} />
      ) : null}
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.heading}>
          <Title>{data.word}</Title>
          {usedHint ? (
            <Title style={{ fontSize: 32, color: "white" }}>
              {data.translation}
            </Title>
          ) : null}
        </View>

        <View style={styles.form}>
          <Input
            placeholder="Enter translation here"
            value={answer}
            onChangeText={(input) => setAnswer(input)}
          />
          <Button onPress={handleCheck} backgroundColor="#55a630">
            Check
          </Button>
        </View>

        <View style={styles.buttons}>
          {!usedHint ? <Button onPress={showHint}>Hint</Button> : null}
          <Button onPress={setNextWord}>Next</Button>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LearnType;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 64,
    width: "90%",
    justifyContent: "center",
  },
  heading: {
    alignItems: "center",
    marginVertical: 24,
  },
  form: {
    height: "30%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttons: {
    marginTop: 36,
    height: "30%",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
