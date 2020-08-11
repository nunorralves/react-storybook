import React from "react";
import Input from "./Input";

export default {
  title: "Nuno/Input",
  component: Input,
};

export const Small = () => <Input size='small' placeholder='small'></Input>
export const Medium = () => <Input size='medium' placeholder='medium'></Input>
export const Large = () => <Input size='large' placeholder='large'></Input>
