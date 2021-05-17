import { MdMessage as icon } from 'react-icons/md';

const feedback = {
	name: 'feedback',
	title: 'Feedback',
	type: 'document',
	icon,
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
			description: 'This is the name of the user',
			readOnly: true,
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'mail',
			title: 'Mail',
			type: 'string',
			readOnly: true,
			description: 'This is the mail address of the user',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'message',
			title: 'Message',
			type: 'text',
			readOnly: true,
			description: 'This is what the user wanted to tell us',
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: {
			name: 'name',
			message: 'message',
			created: '_createdAt',
		},
		prepare: ({ name, created }) => {

			// let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
			let options = { year: 'numeric', month: '2-digit', day: '2-digit' }

			return {
				title: `From: ${name}`,
				subtitle: `${created && new Date(created).toLocaleTimeString('no', options)}`,
			}
		}
	}
}

export default feedback;