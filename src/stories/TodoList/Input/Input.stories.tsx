import type { Meta, StoryObj } from "@storybook/react";
import Input from ".";

const meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputComponent: Story = {
  args: {
    setValue: (): string => "",
    handleKeyPress: (): Array<string> => [],
    value: "",
  },
};
