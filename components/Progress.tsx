import React from "react";

type Props = {};

const Progress = (props: Props) => {
  return (
    <div className="flex flex-col items-center p-1 gap-6">
      <progress className="progress w-96" value={0} max="100"></progress>
      <progress className="progress w-96" value="10" max="100"></progress>
      <progress className="progress w-96" value="40" max="100"></progress>
      <progress className="progress w-96" value="70" max="100"></progress>
      <progress className="progress w-96" value="100" max="100"></progress>
    </div>
  );
};

export default Progress;
