import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './index';

const meta = {
	title: 'my-components/Dropdown',
	component: Dropdown,
	tags: ['autodocs'],
    args: {
        disabled: false,
    },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    
}
