import React from "react";
import Button from "./Button";
import Center from "../../decorators/Center/Center";

export default {
  title: "Nuno/Button",
  component: Button,
  decorators: [(story) => <Center>{story()}</Center>],
};

export const Primary = () => <Button variant='primary'>Primary</Button>;
export const Success = () => <Button variant='success'>Success</Button>;
export const Danger = () => <Button variant='danger'>Danger</Button>;
