import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import urlFor from '../utils/imgUrl';

const Content = styled.section`
  padding: 5px;
`;
const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
`;
const Staffmember = ({ bio, first, img, last, role, slug, viewtype }) => (
  <>
    <section className={`article${viewtype}`}>
      <Link to={`om/${slug}`}>
        <StyledImg
          src={urlFor(img?.image?.asset?.url).width(400).format('webp').url()}
          alt={img?.alt}
        />
      </Link>
      <Content>
        <h2>
          {first} {last}
        </h2>
        <p>Rolle: {role}</p>
        <p>{bio}</p>
      </Content>
    </section>
  </>
);

Staffmember.propTypes = {
  bio: PropTypes.string,
  first: PropTypes.string,
  img: PropTypes.object,
  last: PropTypes.string,
  role: PropTypes.string,
  slug: PropTypes.string,
  viewtype: PropTypes.string,
};

export default Staffmember;
