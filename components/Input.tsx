import React from "react";
import {
  TextInput,
  StyleSheet,
  TextInputComponent,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";

const Input: React.FC<TextInputProps> = (props) => {
  return (
    <TextInput
      style={styles.input}
      {...props}
      placeholderTextColor={"#a0aec0"}
    />
  );
};

/* 
{
  onChangeText?: ((text: string) => void) | undefined;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  value?: string;
  secureTextEntry?: boolean;
  style?: Object;
  placeholder?: string
}
*/

export default Input;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 42,
    paddingHorizontal: 8,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "#1c1c1e",
    color: "black",
  },
});
