import type { Meta, StoryObj } from "@storybook/react";
import Todo from ".";

const meta = {
  title: "Todo",
  component: Todo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Todo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Hello World",
    id: 1,
    handleEditValue: (id: number, value: string) => {},
    handleDelete: (id: number) => {},
  },
};
