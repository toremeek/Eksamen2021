import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { usePage } from '../hooks/fetchPage';
import { Button } from '../styles/Styles';

const CategoryBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  margin: 0 auto 20px auto;
  flex-wrap: wrap;
`;

const Categorybar = () => {
  const { data } = usePage('category', 'categoriesfields');

  return (
    <>
      <CategoryBox>
        {data?.map((category) => (
          <Link
            to={`/kategori/${category.category.toLowerCase()}`}
            key={category._id}
          >
            <Button>{category.category}</Button>
          </Link>
        ))}
      </CategoryBox>
    </>
  );
};

export default Categorybar;
