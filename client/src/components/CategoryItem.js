import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Title from './Title';

const CategoryItem = ({ data }) => (
  <>
    <section>
      <Title title={data?.category} />
      {data?.articles?.map((article) => (
        <p key={Math.random()}>
          <Link to={`/artikler/${article.replace(/ /g, '-').toLowerCase()}`}>
            {article}
          </Link>
        </p>
      ))}
    </section>
  </>
);

CategoryItem.propTypes = {
  data: PropTypes.object,
};

export default CategoryItem;
