import { FaLink as icon } from 'react-icons/fa';

const navigation = {
	name: 'navigation',
	title: 'Navigation',
	type: 'document',
	icon,
	fields: [
		{
			name: 'location',
			title: 'Location',
			type: 'string',
			description: 'Where should this navigation be used?? Eks: header or footer',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'link',
			title: 'Link',
			type: 'array',
			of: [{type: 'link'}],
			validation: (Rule) => Rule.required(),
		},
	]
}

export default navigation;