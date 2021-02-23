import React from "react";

import useFirebaseData from "hooks/useFirebaseData";

import Table from "components/DictionaryTable";

const Dictionary = () => {
  const { dictionary } = useFirebaseData();

  return <Table data={dictionary} />;
};

export default Dictionary;
