import type { Meta, StoryObj } from "@storybook/react";
import TodoList from ".";

const meta = {
  title: "TodoList",
  component: TodoList,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TodoList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TodoListComponent: Story = {};
