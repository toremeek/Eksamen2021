import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getLogo } from '../utils/logoService';
import { getNav } from '../utils/navService';
import { detectOutsideClick } from './DetectOutsideClick';
import urlFor from '../utils/imgUrl';

const StyledContainer = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  transition: solid 0.5s ease;
  span {
    vertical-align: middle;
    font-size: 1.1rem;
    margin: 0.6rem;
    :hover {
      color: ${({ theme }) => theme.colors.teal};
    }
  }
`;

const StyledMenu = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  position: absolute;
  top: 100px;
  right: 0;
  width: 15rem;
  text-align: center;
  box-shadow: 20px 20px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-30px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 99;
  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    border-bottom: 1px solid #dddddd;
  }
  li a {
    text-decoration: none;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 1rem 1.2rem;
    display: block;
    :hover {
      color: ${({ theme }) => theme.colors.teal};
    }
  }
`;

const StyledNavSection = styled.section`
  display: flex;
  padding: 0;
  flex-direction: row;
  justify-content: left;
`;

const StyledNav = styled.nav`
  background: linear-gradient(
    220deg,
    ${({ theme }) => theme.colors.grey} 0%,
    ${({ theme }) => theme.colors.black} 100%
  );
  display: grid;
  grid-template-columns: 0.1fr auto;
  padding: 0;
  height: 100px;
  margin-bottom: 10px;
`;

const StyledUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledLi = styled.li`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.1rem;
  padding: 0.6rem;
  margin: auto;
  text-decoration: none;
  & a {
    color: inherit;
    text-decoration: none;
    padding: 0 1rem;
    &:hover {
      color: ${({ theme }) => theme.colors.teal};
    }
    &.active {
      text-decoration: underline;
    }
  }
`;

const StyledP = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.1rem;
  text-align: center;
`;

const StyledLogoSection = styled(motion.section)`
  display: flex;
  align-items: center;
  padding: 0 0 0 20px;
  margin-top: 10px;
  max-width: 200px;
  min-width: 180px;
  height: 80px;
  img {
    width: 100%;
    align-items: center;
  }
`;

const Navigation = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  /* dropdown-meny */
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = detectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  /* logo fra sanity */
  const [logoLoading, setLogoLoading] = useState(false);
  const [logoData, setLogoData] = useState([]);
  const [logoError, setLogoError] = useState(false);

  /* henter nav-data fra sanity */
  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      try {
        const navigation = await getNav('Header');
        setData(navigation);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataAsync();
  }, []);

  /* henter logo fra Sanity */
  useEffect(() => {
    const getLogoData = async () => {
      setLogoLoading(true);
      try {
        const iconData = await getLogo();
        setLogoData(iconData);
        setLogoLoading(false);
      } catch (error) {
        setLogoError(error);
      }
    };
    setLogoError(null);
    getLogoData();
  }, []);

  return (
    <StyledNav>
      <StyledLogoSection
        initial={{ scale: 1, rotation: 0, opacity: 0 }}
        animate={{ scale: 1, rotation: 0, opacity: 1 }}
        transition={{
          duration: 4,
        }}
      >
        <NavLink to="/">
          {logoLoading ? <p>Loading..</p> : null}
          {logoError ? <p>{error}</p> : null}
          <img
            src={urlFor(logoData[0]?.image.url).format('webp').url()}
            alt={logoData[0]?.alt}
          />
        </NavLink>
      </StyledLogoSection>

      <StyledNavSection>
        {error ? <StyledP>{error}- theres a bug in the system</StyledP> : null}
        {loading ? <StyledP>Loading - please wait</StyledP> : null}
        <StyledUl>
          {data?.link?.length > 0 &&
            data?.link?.slice(0, 2).map((link) => (
              <StyledLi key={link._key}>
                <NavLink exact to={`/${link.href}`} activeClassName="active">
                  {link.name}
                </NavLink>
              </StyledLi>
            ))}
          <StyledContainer>
            <StyledButton onClick={onClick}>
              <span>Mer +</span>
            </StyledButton>
            <StyledMenu
              ref={dropdownRef}
              className={`menu ${isActive ? 'active' : 'inactive'}`}
            >
              <ul>
                {loading ? <p>Loading</p> : null}
                {data?.link?.length > 0 &&
                  data?.link?.slice(2).map((link) => (
                    <li key={link._key}>
                      <NavLink
                        exact
                        to={`/${link.href}`}
                        activeClassName="active"
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            </StyledMenu>
          </StyledContainer>
        </StyledUl>
      </StyledNavSection>
    </StyledNav>
  );
};

export default Navigation;
