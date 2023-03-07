import React from "react";
import { Images } from "../Images";

export const ListArticles = ({ img, title, date }) => {
  return (
    <article class="mod-caja-nota lugares w-100-mobile">
      <section id="" class="cont-figure">
        <a href="" class="figure">
          <picture id="" class="content-pic picture">
            <Images url={img} className="content-img" />
          </picture>
        </a>
      </section>
      <div class="mod-caja-nota__descrip">
        <h2 class="com-title-acu">
          <a href="">{title}</a>
        </h2>
        <h4 class="com-date">{date}</h4>
      </div>
    </article>
  );
};
