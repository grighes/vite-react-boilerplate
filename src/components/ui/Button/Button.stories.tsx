import type { Meta, StoryObj } from '@storybook/react';

// import { redDark } from '@radix-ui/colors';

import { ViteButton } from './Button';
import { BookmarkIcon } from '@radix-ui/react-icons';

const meta: Meta<typeof ViteButton> = {
	component: ViteButton,
};

export default meta;
type Story = StoryObj<typeof ViteButton>;

export const Primary: Story = {
	args: {
		size: '2',
		variant: 'soft',
		color: 'blue',
		radius: 'small',
		children: 'Button Primary',
	},
};

export const Secondary: Story = {
	args: {
		...Primary.args,
		color: 'red',
		children: 'Button Secondary',
	},
};

export const Tertiary: Story = {
	args: {
		...Primary.args,
		children: '',
	},
	render: (args) => (
		<ViteButton {...args}>
			<BookmarkIcon width="16" height="16" /> Tertiary
		</ViteButton>
	),
};
