import client from './client';

const articleFields = `
	_createdAt,
	_id,
	_type,
	'authors': author[]->{first, last, _id, 'slug': slug.current},
	'categories': category[]->{category, _id},
	clickbait,
	'content': content[]{...}
	,
	featured,
	'links': link[]{
		_key,
		name,
		href
	},
	'img': image{
		alt,
		image{
			asset->{url}
		},
	},
	'raw': image,
	published,
	'slug': slug.current,
	title,
`;

const personFields = `
	_id,
	_type,
	bio,
	first,
	'img': image{
		alt,
		image{
			asset->{url}
		},
	},
	last,
	role,
	'slug': slug.current,
	'articles': *[_type == "articlepage" && references(^._id)].title,
	'articlesslugs': *[_type == "articlepage" && references(^._id)].slug.current,
`;

const galleriFields = `
	_createdAt,
	_id,
	'img': image{
		alt,
		image{
			asset->{url}
		},
	},
`;

const categoriesFields = `
	_id,
	category,
`;

const categoryFields = `
	_id,
	_type,
	category,
	'articles': *[_type == "articlepage" && references(^._id)].title,
	'articlesslugs': *[_type == "articlepage" && references(^._id)].slug.current,
`;
const courseFields = `
    ...,
    'slug': slug.current,
`;

let pagefields = ``;

export const getPage = async (source, fields, sortorder) => {
  if (fields === 'articlefields') {
    pagefields = articleFields;
  }
  if (fields === 'personfields') {
    pagefields = personFields;
  }
  if (fields === 'gallerifields') {
    pagefields = galleriFields;
  }
  if (fields === 'categoriesfields') {
    pagefields = categoriesFields;
  }
  if (fields === 'categoryfields') {
    pagefields = categoryFields;
  }
  if (fields === 'coursefields') {
    pagefields = courseFields;
  }
  const data = await client.fetch(
    `*[_type == $source]| order(_createdAt ${
      sortorder || 'desc'
    }){${pagefields}}`,
    {
      source,
      fields,
    }
  );
  return data;
};

export const getItem = async (source, fields, slug) => {
  if (fields === 'articlefields') {
    pagefields = articleFields;
  }
  if (fields === 'personfields') {
    pagefields = personFields;
  }
  if (fields === 'gallerifields') {
    pagefields = galleriFields;
  }
  if (fields === 'categoryfields') {
    pagefields = categoryFields;
  }
  if (fields === 'coursefields') {
    pagefields = courseFields;
  }
  const data = await client.fetch(
    `*[_type == $source && slug.current == $slug]{${pagefields}}`,
    {
      slug,
      source,
      fields,
    }
  );
  return data?.[0];
};
