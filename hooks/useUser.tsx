import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../fb";

const useUser = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((snapshot) => {
      console.log("app effect", !!auth.currentUser);
      if (!snapshot) {
        return navigation.navigate("Start");
      }
    });
    return () => unsubscribe();
  }, [auth.currentUser]);
};

export default useUser;
