import { ATTRS } from '$docs/constants';
import type { APISchema } from '$docs/types';

const builder: APISchema = {
	title: 'createLabel',
	description: 'The builder function used to create a label element.',
};

const root: APISchema = {
	title: 'root',
	description: 'The label element',
	dataAttributes: [
		{
			label: 'data-melt-label',
			value: ATTRS.MELT('label'),
		},
	],
};

const schemas = {
	builder,
	root,
};

const features = [
	'Supports nested controls',
	'Disables text selection when double clicking the label',
	'Can be used multiple times from a single instance of the builder',
];

export const labelData = {
	schemas,
	features,
};
