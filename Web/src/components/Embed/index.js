import React from "react";
import { Embed } from "./style";

const DefaultEmbed = ({ data }) => (
  <Embed>
    <header>
      <h4>{data.title || data.sitename}</h4>
    </header>
    <section>
      <p>{data.description}</p>
      <img
        src={data.thumbnail || data.image}
        alt={"Logo de " + data.title || data.sitename}
      />
    </section>
    <footer>
      <span>{data.sitename || data.title}</span> <code>•</code>{" "}
      <a href={data.url}>{data.source}</a>
    </footer>
  </Embed>
);

export default DefaultEmbed;
