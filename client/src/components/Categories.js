import PropTypes from 'prop-types';
import CategoryList from './CategoryList';

const Categories = ({ data }) => (
  <>
    <section>
      {data &&
        data.map((category) => (
          <CategoryList key={category._id} data={category} />
        ))}
    </section>
  </>
);

Categories.propTypes = {
  data: PropTypes.array,
};

export default Categories;
