import { FaTags as icon } from 'react-icons/fa';

const category = {
	name: 'category',
	title: 'Categories',
	type: 'document',
	icon,
	fields: [
		{
			name: 'category',
			title: 'Category',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'category',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		},
	]
}

export default category;