import { fn } from "@storybook/test";
import { Button } from "../components/button2";

export default {
  title: "Example/Button/button2",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};
