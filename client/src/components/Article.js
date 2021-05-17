import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Author from './Author';
import Category from './Category';
import { Clickbait } from '../styles/Styles';

const ImageBox = styled.section`
  position: relative;
`;

const StyledImage = styled.img`
  object-fit: cover;
`;

const Arrow = styled.span`
  max-height: 22px;
  max-width: 22px;
  position: absolute;
  right: 20px;
  bottom: 20px;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.black};
  &:hover {
    color: ${({ theme }) => theme.colors.teal};
  }
`;

const Content = styled.section`
  display: grid;
  grid-template-rows: repeat(6 auto);
  padding: 5px 5px 20px 5px;
  color: #222831;
`;

const Title = styled.h2`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 0px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Article = ({
  _key,
  img,
  title,
  categories,
  authors,
  clickbait,
  viewtype,
  slug,
  featured,
}) => (
  <>
    <section
      className={`${!featured ? '' : 'featured'} article${viewtype}`}
      key={_key}
    >
      <Link to={`artikler/${slug}`}>
        <ImageBox className={`${!featured ? '' : 'featuredimage'}`}>
          <StyledImage
            src={`${img?.image?.asset?.url}?h=746&w=600&fm=webp`}
            alt={img?.alt}
          />
        </ImageBox>
      </Link>
      <Content>
        <StyledDiv>
          <Category categories={categories} />
        </StyledDiv>
        <Title>{title}</Title>
        <Clickbait>{clickbait}</Clickbait>
        <Author authors={authors} />
        <Link to={`artikler/${slug}`}>
          <Arrow>
            <AiOutlineArrowRight />
          </Arrow>
        </Link>
      </Content>
    </section>
  </>
);

Article.propTypes = {
  _key: PropTypes.string,
  img: PropTypes.object,
  title: PropTypes.string,
  clickbait: PropTypes.string,
  categories: PropTypes.array,
  authors: PropTypes.array,
  viewtype: PropTypes.string,
  slug: PropTypes.string,
  featured: PropTypes.bool,
};

export default Article;
