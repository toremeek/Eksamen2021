import { FaInfoCircle as icon } from 'react-icons/fa';

const info = {
	name: 'info',
	title: 'Contact info',
	type: 'document',
	icon,
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
			description: 'Navn på bedrift',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'address',
			title: 'Address',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'zip',
			title: 'Zip',
			type: 'number',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'postalcode',
			title: 'Postal code',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'geopoint',
			title: 'Geopoint',
			type: 'geopoint',
		},
		{
			name: 'phone',
			title: 'Phone',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'mail',
			title: 'Mail',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: {
			address: 'address',
			zip: 'zip',
			postalcode: 'postalcode',
			phone: 'phone',
			mail: 'mail',
		},
		prepare: ({ address, zip, postalcode, phone, mail }) => {
			return {
				title: `${address}, ${zip} ${postalcode}`,
				subtitle: `Tlf: ${phone} Mail: ${mail}`,
			}
		}
	}
}

export default info;