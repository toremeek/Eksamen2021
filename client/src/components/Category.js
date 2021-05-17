import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Content,
  ContentDescription,
  ContentItem,
  ContentList,
} from '../styles/Styles';

const ContentDescriptionBox = styled(ContentDescription)`
  color: #222831;
`;

const Linky = styled(Link)`
  color: #222831;
`;

const Category = ({ categories }) => (
  <>
    <Content>
      <ContentDescriptionBox>Kategori:</ContentDescriptionBox>
      <ContentList>
        {categories?.length > 0 &&
          categories.map((category) => (
            <ContentItem key={category?._id}>
              <Linky to={`/kategori/${category?.category.toLowerCase()}`}>
                {category?.category}
              </Linky>
            </ContentItem>
          ))}
      </ContentList>
    </Content>
  </>
);

Category.propTypes = {
  categories: PropTypes.array,
};

export default Category;
