import type { Meta, StoryObj } from '@storybook/react';
import { LoadingButton } from './index';

const meta = {
	title: 'my-components/LoadingButton',
	component: LoadingButton,
	tags: ['autodocs'],
    args: {
        disabled: false,
    },
} satisfies Meta<typeof LoadingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    
}
