import type { Meta, StoryObj } from '@storybook/react';

import { ViteColors } from './Colors';

const meta: Meta<typeof ViteColors> = {
	component: ViteColors,
};

export default meta;
type Story = StoryObj<typeof ViteColors>;

export const BrandColors: Story = {
	args: {},
};

export const BasicColors: Story = {
	args: {},
};
