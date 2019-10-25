import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Code = ({ data }) => (
  <SyntaxHighlighter language="json" showLineNumbers style={dracula}>
    {data}
  </SyntaxHighlighter>
);

export default Code;
