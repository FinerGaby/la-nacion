import React from "react";
import { CustomLink } from "../../../CustomLink";

export const Social = ({ list }) => {
  return list.map((item, index) => (
    <CustomLink key={index} href={item.ahref} target="_blank" class="item_link">
      {item?.icon ? <i class={item.icon}></i> : item.title}
    </CustomLink>
  ));
};
