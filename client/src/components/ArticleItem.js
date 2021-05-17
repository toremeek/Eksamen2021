import PropTypes from 'prop-types';
import styled from 'styled-components';
import SanityContent from './SanityContent';
import Authors from './Author';
import Published from './Published';
import Category from './Category';
import Title from './Title';
import urlFor from '../utils/imgUrl';

const ImageBox = styled.section`
  position: relative;
  z-index: 0;
`;

const Img = styled.img`
  display: block;
  margin: 5px auto;
  width: 100%;
`;

const StyledClickbait = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.shift.text};
  margin: 1rem 0;
  padding-bottom: 1em;
`;

const Blockcontent = styled.section`
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.shift.text};
    margin: 1rem 0;
  }
  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.shift.text};
    margin: 1rem 0;
  }
  h3,
  h4 {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.shift.text};
    margin: 1rem 0;
  }
  p {
    margin: 2rem 0;
    line-height: 1.2;
    color: ${({ theme }) => theme.shift.text};
    font-size: 1rem;
  }
`;

const Container = styled.article`
  max-width: 900px;
  background: ${({ theme }) => theme.shift.background};
  margin: auto;
  padding: 65px 10px 65px 10px;
  position: relative;
`;

const Meta = styled.section`
  display: flex;
  & > section {
    margin-right: 10px;
  }
`;

const ArticleItem = ({ data }) => (
  <>
    <Container>
      <Title title={data?.title} />
      <ImageBox className={`${!data?.featured ? '' : 'featuredarticleimage'}`}>
        <Img
          src={urlFor(data?.raw.image)
            .width(1000)
            .height(500)
            .format('webp')
            .url()}
          alt={data?.img?.alt}
        />
      </ImageBox>
      <Meta>
        <Published _createdAt={data?._createdAt} />
        <Category categories={data?.categories} />
        <Authors authors={data?.authors} />
      </Meta>
      <StyledClickbait>{data?.clickbait}</StyledClickbait>
      <Blockcontent>
        <SanityContent data={data?.content} />
      </Blockcontent>
    </Container>
  </>
);

ArticleItem.propTypes = {
  data: PropTypes.object,
};

export default ArticleItem;
