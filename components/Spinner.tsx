import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "50px auto",
};

type Props = {
  loading: boolean;
};

const Spinner = ({ loading }: Props) => {
  return (
    <ClipLoader
      color="#DCA54C"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};

export default Spinner;
