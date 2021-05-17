import { FaMailBulk as icon } from 'react-icons/fa';

const registration = {
	name: "registration",
	title: "Påmelding",
	type: "document",
	icon,
	fields: [
		{
			name: "email",
			title: "Epost",
			type: "string",
			readOnly: true,
			validation: (Rule) => Rule.required(),
		},
		{
			name: "name",
			title: "Navn",
			type: "string",
			readOnly: true,
		},
		{
			name: "phone",
			title: "Telefon",
			type: "string",
			readOnly: true,
		},
		{
			name: "courseTitle",
			title: "Registrert til kurs: ",
			type: "string",
			readOnly: true,
		},
	],
	preview: {
		select: {
			email: 'email',
			course: 'courseTitle',
		},
		prepare({email, course}) {
			return {
				title: email,
				subtitle: course
			};
		}
	}
};

export default registration;
  