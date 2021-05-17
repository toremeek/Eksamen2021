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
const Author = ({ authors }) => (
  <>
    <Content>
      <ContentDescriptionBox>Forfatter:</ContentDescriptionBox>
      <ContentList>
        {authors?.length > 0 &&
          authors.map((author) => (
            <ContentItem key={author?._id}>
              <Linky to={`/om/${author.slug}`}>
                {`${author.first} ${author.last}`}
              </Linky>
            </ContentItem>
          ))}
      </ContentList>
    </Content>
  </>
);

Author.propTypes = {
  authors: PropTypes.array,
};

export default Author;
