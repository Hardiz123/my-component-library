import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

const meta = {
	title: 'my-components/Button',
	component: Button,
	tags: ['autodocs'],
    args: {
        disabled: false,
        label: 'Click me',
        isLoading: false,
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        label: 'Click Me',
        disabled: false,
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        label: 'Click Me',
        disabled: false,
    },
}

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        label: 'Click Me',
        disabled: false,
    },
}