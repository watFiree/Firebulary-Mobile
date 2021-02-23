import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { useFormikContext } from "formik";

interface StringMap {
  [key: string]: string;
}

const SwapValuesButton: React.FC<{
  firstVariable: string;
  secondVariable: string;
  style?: Object;
}> = ({ firstVariable, secondVariable, style }) => {
  const { values, setFieldValue } = useFormikContext<StringMap>();
  return (
    <TouchableOpacity
      style={style}
      onPress={() => {
        const buffor = values[firstVariable];
        setFieldValue(firstVariable, values[secondVariable]);
        //localStorage.setItem(firstVariable, values[secondVariable]);
        setFieldValue(secondVariable, buffor);
        //localStorage.setItem(secondVariable, buffor);
      }}
    >
      <Image source={require("assets/swap_icon.png")} />
    </TouchableOpacity>
  );
};

export default SwapValuesButton;
