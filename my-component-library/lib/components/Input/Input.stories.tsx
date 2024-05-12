import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './index';

const meta = {
	title: 'my-components/Input',
	component: Input,
	tags: ['autodocs'],
    args: {
        disabled: false,
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        value: '',
        onChange: (e) => console.log(e.target.value),
        placeholder:'placeHolder'
    },
};
