import { IoMdSchool as icon } from 'react-icons/io';

const course = {
	name: "course",
	title: "Kurs",
	type: "document",
	icon,
	fields: [
		{
			name: "title",
			title: "Tittel",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "image",
			title: "Bilde",
			type: "image",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "description",
			title: "Beskrivelse",
			type: "text",
			of: { type: "block" },
			validation: (Rule) => Rule.required(),
		},
		{
			name: "adress",
			title: "Adresse",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "zipcode",
			title: "Postnummer",
			type: "number",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "location",
			title: "Poststed",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: 'title',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: "startDate",
			title: "Startdato",
			type: "date",
			options: {
				dateFormat: "DD-MM-YYYY",
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: "free",
			title: "Gratis",
			type: "boolean",
		},
		{
			name: "price",
			title: "Pris",
			type: "number",
		},
	],
	initialValue: {
		free: true,
	},
};

export default course;
  