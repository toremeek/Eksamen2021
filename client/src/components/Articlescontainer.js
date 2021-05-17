import PropTypes from 'prop-types';

const Articlescontainer = ({ children, viewtype }) => (
  <section className={viewtype}>{children}</section>
);

Articlescontainer.propTypes = {
  children: PropTypes.node.isRequired,
  viewtype: PropTypes.string.isRequired,
};

export default Articlescontainer;
