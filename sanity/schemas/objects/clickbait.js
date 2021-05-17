const clickbait = {
	name: 'clickbait',
	title: 'Clickbait',
	type: 'object',
	fields: [
		{
			name: 'content',
			title: 'What can we say to lure the users to click this??',
			type: 'text',
			validation: (Rule) => Rule.required(),
		}
	]
}

export default clickbait;