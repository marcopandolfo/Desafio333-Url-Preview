import React from "react";
import { Button } from "./style";

const DefaultButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

export default DefaultButton;
