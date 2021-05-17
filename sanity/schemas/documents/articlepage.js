import { RiArticleFill as icon } from 'react-icons/ri';

const articlepage = {
	name: 'articlepage',
	title: 'Articlepage',
	type: 'document',
	icon,
	fields: [
		{
			name: 'featured',
			title: 'Featured',
			type: 'boolean',
			description: 'Is this a featured article?'
		},
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			description: 'This is the title of the article',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			description: 'This is the unique url',
			options: {
				source: 'title',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'image',
			title: 'Poster',
			type: 'customimage',
			description: 'Article poster',
			options: {
				hotspot: true
			}
		},
		{
			name: 'clickbait',
			title: 'Clickbait',
			type: 'text',
			description: 'The clickbait text',
		},
		{
			name: 'content',
			title: 'Content',
			type: 'content',
			description: 'This is the content of the article',
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
			name: 'published',
			title: 'Published',
			type: 'boolean',
			description: 'Should this article be published?'
		},
	],
	initialValue: {
		published: true,
		featured: false,
	},
	preview: {
		select: {
			title: 'title',
			media: 'image.image.asset',
			published: 'published',
			featured: 'featured',
			category0: 'category.0.category',
			category1: 'category.1.category',
			category2: 'category.2.category',
			category3: 'category.3.category',
		},
		prepare: ({ title, media, published, featured, ...category }) => {
			const categories = Object.values(category).filter(Boolean);

			return {
				title: `${title} ${published ? '' : '🚫'} ${featured ? '⭐' : ''}`,
				media,
				subtitle: categories.join(', '),
			};
		}
	}
}

export default articlepage;