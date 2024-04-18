import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './index';

const meta = {
	title: 'my-components/Spinner',
	component: Spinner,
	tags: ['autodocs'],
    args: {
        disabled: false,
    },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    
}
