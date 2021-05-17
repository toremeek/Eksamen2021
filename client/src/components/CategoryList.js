import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Categorybox = styled.section`
  margin-bottom: 40px;

  & a {
    text-decoration: none;
  }
`;
const Categorytitle = styled.h2`
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;
const CategoryList = ({ data }) => (
  <>
    <Categorybox>
      <Categorytitle>
        <Link to={`/kategori/${data.category.toLowerCase()}`}>
          {data.category}
        </Link>
        <span> ({data?.articles?.length})</span>
      </Categorytitle>
      {data?.articles?.map((article) => (
        <p key={Math.random()}>
          <Link to={`/artikler/${article.replace(/ /g, '-').toLowerCase()}`}>
            {article}
          </Link>
        </p>
      ))}
    </Categorybox>
  </>
);

CategoryList.propTypes = {
  data: PropTypes.object,
};

export default CategoryList;
