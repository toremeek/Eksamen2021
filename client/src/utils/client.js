import sanityClient from '@sanity/client';

const options = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET_NAME,
  token: process.env.SANITY_WRITE_TOKEN,
};

const client = sanityClient({
  ...options,
  ignoreBrowserTokenWarning: true,
  apiVersion: new Date().toISOString().split('T')[0],
  useCdn: process.env.NODE_ENV === 'production',
});

export default client;
