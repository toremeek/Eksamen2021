import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  margin: 0 auto;
  max-width: 900px;
  padding-top: 20px;
  color: ${({ theme }) => theme.shift.text};
  text-align: center;
  font-size: 2.5rem;
`;
const Title = ({ title }) => (
  <>
    <StyledTitle>{title}</StyledTitle>
  </>
);

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
