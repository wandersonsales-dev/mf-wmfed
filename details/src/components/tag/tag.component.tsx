import React from "react";

import "./tag.component.scoped.scss";

interface Props {
  value: string;
}

export default ({ value }: Props) => {
  return <div className="tag">{value}</div>;
};
