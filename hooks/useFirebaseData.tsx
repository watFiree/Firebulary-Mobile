import { useState, useEffect } from "react";
import { auth, firestore } from "../fb";

interface DataSection {
  word: string;
  translation: string;
  translatedToLanguage: string;
  answeredCorrectly: boolean;
}

const useFirebaseData = () => {
  const [dictionary, setDictionary] = useState<DataSection[]>([]);
  const [learnt, setLearnt] = useState<DataSection[]>([]);
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const dataObserver = firestore
        .doc(`data/${user.uid}`)
        .onSnapshot((snapshot) => {
          const data = snapshot.data() as {
            dictionary: DataSection[];
            learnt: DataSection[];
          };
          setDictionary(data.dictionary);
          setLearnt(data.learnt);
        });
      return () => dataObserver();
    }
  }, []);

  return {
    dictionary,
    learnt,
  };
};

export default useFirebaseData;
