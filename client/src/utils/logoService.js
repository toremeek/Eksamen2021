import client from './client';

const logoFields = ` 
	'image': image.image.asset->{url},
	caption,
	'alt': image.alt,
	_key,  
`;

export const getLogo = async () => {
  const getLogoData = await client.fetch(`*[_type == "logo"]{${logoFields}}`);
  return getLogoData;
};
