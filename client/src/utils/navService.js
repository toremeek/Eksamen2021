import client from './client';

const navFields = `
	'link': link[]{
		_key,
		name, 
		href
	}
`;

export const getNav = async (slug) => {
  const data = await client.fetch(
    `*[_type == "navigation" && location == $slug]{${navFields}}`,
    {
      slug,
    }
  );
  return data?.[0];
};
