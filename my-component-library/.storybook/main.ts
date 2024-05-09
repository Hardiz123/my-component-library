import type {StorybookConfig} from '@storybook/react-vite';

const config: StorybookConfig={
	stories: ['../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		"@storybook/addon-styling"
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	// staticDirs: ['../lib/assets'],
};
export default config;
