import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './index';

const meta = {
	title: 'my-components/Carousel',
	component: Carousel,
	tags: ['autodocs'],
    args: {
        disabled: false,
    },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    
}
