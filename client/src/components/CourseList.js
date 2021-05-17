import styled from 'styled-components';
import { Link } from 'react-router-dom';
import urlFor from '../utils/imgUrl';

const StyledCourseBlock = styled.div`
  width: 100%;
  margin: 20px auto;
  background: ${({ theme }) => theme.colors.black};
  padding: 20px 0 20px 20px;
`;

const StyledTitle = styled.h1`
  color: white;
  margin-left: 1rem;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
`;

const CourseWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImage = styled.div`
  height: 100%;
  max-height: fit-content;
  & img {
    max-width: 15rem;
    margin: 10px;
  }
`;

const StyledLink = styled(Link)`
  margin-left: 1rem;
  font-size: 16px;
  color: black;
  border: 1px solid black;
  width: fit-content;
  text-decoration: none;
  padding: 10px;
  display: inline;
  background-color: #fed049;
  margin-bottom: 10px;
`;
const CourseList = ({ ...courses }) => (
  <>
    <StyledCourseBlock>
      <CourseWrapper>
        <StyledImage>
          <img
            src={urlFor(courses?.image).width(400).format('webp').url()}
            alt={`Bilde av logo til ${courses.title}`}
          />
        </StyledImage>
        <StyledInfoContainer>
          <StyledTitle>{courses.title}</StyledTitle>
          <StyledLink to={`/kurs/${courses.slug}`}>Gå til kurs info</StyledLink>
        </StyledInfoContainer>
      </CourseWrapper>
    </StyledCourseBlock>
  </>
);

export default CourseList;
