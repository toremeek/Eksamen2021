// remember: normalize.css is imported in ./src/index.js
import styled from 'styled-components';

export const Main = styled.main`
  padding-bottom: 200px; /* footer height + 40px for extra space */
  background: ${({ theme }) => theme.shift.background};
  background-image: ${({ theme }) => theme.shift.bilde};
  box-shadow: ${({ theme }) => theme.shift.skygge};
  transition: 1.5s;
`;

export const Container = styled.section`
  width: 95%;
  margin: 10px auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 1600px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    max-width: 1160px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 960px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 740px;
  }
`;

export const Clickbait = styled.p`
  font-weight: 700;
`;

export const Content = styled.section`
  display: grid;
  color: ${({ theme }) => theme.shift.text};
  grid-template-columns: 65px auto;
`;

export const ContentDescription = styled.p`
  display: inline;
  color: ${({ theme }) => theme.shift.text};
  margin-top: 0px;
`;

export const ContentList = styled.ul`
  margin-top: 0px;
  padding: 0;
  color: ${({ theme }) => theme.shift.text};
  list-style: none;
`;

export const ContentItem = styled.li`
  margin-left: 4px;
  color: ${({ theme }) => theme.shift.text};

  &::after {
    content: ', ';
  }

  &:last-child {
    &::after {
      content: normal;
    }
  }
`;

export const Button = styled.button`
  display: inline-block;
  border-radius: 5px;
  height: 40px;
  width: auto;
  margin-bottom: 10px;
  line-height: 30px;
  text-align: center;
  margin-right: 4px;
  color: ${({ theme }) => theme.colors.white};
  background: linear-gradient(
    220deg,
    ${({ theme }) => theme.colors.grey} 0%,
    ${({ theme }) => theme.colors.black} 100%
  );
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.teal};
  }
  &:focus {
    outline: none;
  }
`;
