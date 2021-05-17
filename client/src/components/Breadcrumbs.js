import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

const Breadbox = styled.ul`
  display: flex;
  list-style: none;
  list-style-type: none;
  margin: 0;
  padding: 0 0 0 20px;
`;

const Breadcrumb = styled.li`
  color: ${({ theme }) => theme.shift.text};

  & a {
    color: inherit;
  }
`;

const Spacer = styled.span`
  margin-left: 5px;
  margin-right: 5px;
`;

const Breadcrumbs = () => {
  // The code that helps us to get the breadcrumb was given to us by Marius.
  const { pathname } = useLocation();
  const breadCrumbs = pathname
    .split('/')
    .filter((path) => path !== '')
    .map((path) => path.charAt(0).toUpperCase() + path.slice(1));

  return (
    <>
      <Breadbox>
        <Breadcrumb>
          <Link to="/">
            <AiFillHome />
          </Link>
        </Breadcrumb>
        {breadCrumbs.map((crumb, index) => (
          <Breadcrumb key={index}>
            <Spacer>/</Spacer>
            <Link
              to={`/${breadCrumbs
                .slice(0, index + 1)
                .join('/')
                .toLowerCase()}`}
            >
              {crumb}
            </Link>
          </Breadcrumb>
        ))}
      </Breadbox>
    </>
  );
};

export default Breadcrumbs;
