import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';

const SanityContent = ({ data }) => <BlockContent blocks={data || []} />;

SanityContent.propTypes = {
  data: PropTypes.array,
};

export default SanityContent;
