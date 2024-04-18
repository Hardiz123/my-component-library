import type { Meta, StoryObj } from '@storybook/react';
import { StandardInput } from './index';

const meta = {
	title: 'my-components/StandardInput',
	component: StandardInput,
	tags: ['autodocs'],
    args: {
        disabled: false,
    },
} satisfies Meta<typeof StandardInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    
}
