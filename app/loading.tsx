import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

type Props = {
  loading: boolean;
};

const LoadingPage = ({ loading }: Props) => {
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

export default LoadingPage;
