import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './index';

const meta = {
	title: 'my-components/Label',
	component: Label,
	tags: ['autodocs'],
    args: {
        disabled: false,
    },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    
}
