import { IoMdImages as icon } from 'react-icons/io';

const imagegallery = {
	name: 'gallery',
	title: 'Gallery',
	type: 'document',
	icon,
	fields: [
		{
			name: 'image',
			title: 'Image',
			type: 'customimage',
		},
	],
	preview: {
		select: {
			media: 'image.image.asset',
			alt: 'image.alt',
		},
		prepare: ({ media, alt}) => {
			return {
				title: `${alt}`,
				media,
			};
		}
	}
}

export default imagegallery;