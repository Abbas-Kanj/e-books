import React from "react";

type Props = {
  params: {
    genre: string;
  };
};

const Page = ({ params }: Props) => {
  return <div>{params.genre}</div>;
};

export default Page;
