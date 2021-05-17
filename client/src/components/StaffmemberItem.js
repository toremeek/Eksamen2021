import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import urlFor from '../utils/imgUrl';

const Content = styled.section`
  color: ${({ theme }) => theme.shift.text};
`;

const H2 = styled.h2`
  margin-top: 40px;
`;

const StyledImg = styled.img`
  object-fit: cover;
  width: 30%;
  margin-top: 30px;
`;
const StaffmemberItem = ({ data }) => (
  <>
    <StyledImg
      src={urlFor(data?.img.image).width(400).format('webp').url()}
      alt={data?.img?.alt}
    />
    <Content>
      <h2>
        {data?.first} {data?.last}
      </h2>
      <p>{data?.role}</p>
      <p>{data?.bio}</p>
      <H2>Alle artikler skrevet av {data?.first}</H2>
      {data?.articles.map((article) => (
        <p key={Math.random()}>
          <Link to={`/artikler/${article.replace(/ /g, '-').toLowerCase()}`}>
            {article}
          </Link>
        </p>
      ))}
    </Content>
  </>
);

StaffmemberItem.propTypes = {
  data: PropTypes.object,
};

export default StaffmemberItem;
