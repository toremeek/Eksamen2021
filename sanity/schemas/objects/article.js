const article = {
	name: 'article',
	title: 'Article',
	type: 'object',
	fields: [
		{
			name: 'when',
			title: 'Created',
			type: 'datetime',
			description: 'Click the "Set to current time" button',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			description: 'This is the unique url',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'clickbait',
			title: 'Clickbait',
			type: 'clickbait',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'image',
			title: 'Image',
			type: 'customimage',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'content',
			title: 'Content',
			type: 'content',
			description: 'This is the content of the article',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'author',
			title: 'Author',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [
						{ type: 'person' },
					]
				}
			],
			description: 'This is the author(s)',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'category',
			title: 'Category',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'category' }],
				}
			],
			description: 'What category(ies) does this article go under?',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'link',
			title: 'Link',
			type: 'array',
			of: [{type: 'link'}]
		},
	],
	preview: {
		select: {
			title: 'title',
			media: 'image.image.asset',
			first: 'author.0.first',
			last: 'author.0.last',
			category0: 'category.0.category',
			category1: 'category.1.category',
			category2: 'category.2.category',
			category3: 'category.3.category',
		},
		prepare: ({ title, media, first, last, authoricon, ...category }) => {
			const categories = Object.values(category).filter(Boolean);

			return {
				title: `${title}`,
				media,
				subtitle: `Author: ${first} ${last} | Category: ${categories}`
			}
		}
	}
}

export default article;