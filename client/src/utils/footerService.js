import client from './client';

const footerItems = `
	name, 
	mail, 
	address, 
	phone, 
	postalcode, 
	zip,
	'nav': *[_type == "navigation" && location == 'Header'],
`;

export const getFooterItems = async () => {
  const footerData = await client.fetch(`*[_type == "info"]{${footerItems}}`);
  return footerData;
};
