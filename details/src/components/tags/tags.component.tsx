import React from "react";
import Tag from "../tag/tag.component";

import "./tags.component.scoped.scss";

interface Props {
  tags: {
    id: string;
    name: string;
  }[];
}

export default ({ tags }: Props) => {
  return (
    <div className="tags">
      {tags?.map((tag) => (
        <Tag key={tag?.id} value={tag?.name} />
      ))}
    </div>
  );
};
