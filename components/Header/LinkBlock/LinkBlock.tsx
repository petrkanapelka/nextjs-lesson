import Link from "next/link";
import React from "react";
import "./LinkBlock.module.css";

type PropsType = {
  title: string;
};

export const LinkBlock = (props: PropsType) => {
  const { title } = props;

  return (
    <div className="link-wrapper">
      <Link href={`/${title.toLowerCase()}`}>
        <h2>{title} →</h2>
      </Link>
    </div>
  );
};
