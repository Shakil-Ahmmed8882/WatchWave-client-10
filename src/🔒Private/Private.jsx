import { useState } from "react";

const Private = ({ children }) => {
  const { loading } = useState();

  if (loading) {
    return <p>Loading</p>;
  }

  return <div>{children}</div>;
};

export default Private;
