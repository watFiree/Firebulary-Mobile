import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Image, Animated } from "react-native";

import Title from "../Title";

const ResponsePopover: React.FC<{ answeredCorrectly: boolean }> = ({
  answeredCorrectly,
}) => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [animatedOpacity]);

  return (
    <Animated.View style={[styles.container, { opacity: animatedOpacity }]}>
      <Image
        source={
          answeredCorrectly
            ? require("/assets/HappyEmoji.png")
            : require("/assets/SadEmoji.png")
        }
      />
      <Title style={{ color: answeredCorrectly ? "#38b000" : "#1c1c1e" }}>
        {answeredCorrectly ? "Correct !" : "Wrong answer"}
      </Title>
    </Animated.View>
  );
};

export default ResponsePopover;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1000,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
