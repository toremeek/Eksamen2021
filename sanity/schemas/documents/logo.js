import { IoMdImage as icon } from 'react-icons/io';

const logo = {
	name: 'logo',
	title: 'Logo',
	type: 'document',
	icon,
	fields: [
		{
			name: 'image',
			title: 'Image',
			type: 'customimage',
		},
		{
			name: 'caption',
			title: 'Caption',
			type: 'string',
			description: '',
			validation: (Rule) => Rule.required(),
		},
	],
}

export default logo;