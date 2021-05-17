import { FaUser as icon } from 'react-icons/fa';

const person = {
	name: 'person',
	type: 'document',
	title: 'Staffmembers',
	icon,
	fields: [
		{
			name: 'first',
			type: 'string',
			title: 'First',
			description: 'This is the first name of the staff member',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'last',
			type: 'string',
			title: 'Last',
			description: 'This is the last name of the staff member',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: doc => `${doc.first}-${doc.last}`,
				maxLength: 100,
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'role',
			type: 'string',
			title: 'Role',
			description: 'The role the staff member has',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'bio',
			type: 'text',
			title: 'Bio',
			description: 'Tell us a bit about this person',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'image',
			type: 'customimage',
			title: 'Image',
		},
	],
	preview: {
		select: {
			first: 'first',
			last: 'last',
			role: 'role',
			media: 'image.image.asset',
		},
		prepare: ({ first, last, role, media }) => {
			return {
				title: `${first} ${last}`,
				media,
				subtitle: `${role}`,
			}
		}
	}
}

export default person;