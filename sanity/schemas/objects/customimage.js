const customimage = {
	name: 'customimage',
	type: 'object',
	title: 'Customimage',
	fields: [
		{
			name: 'image',
			title: ' ',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'alt',
			title: 'Alt text',
			type: 'string',
			description: 'How do you want the screen readers to describe this image??',
			validation: (Rule) => Rule.required(),
		}
	]
}

export default customimage;