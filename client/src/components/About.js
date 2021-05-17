import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState } from 'react';
import { FiGrid, FiList } from 'react-icons/fi';
import { Button } from '../styles/Styles';
import Staffmember from './Staffmember';

const Viewtype = styled.section`
  padding-top: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 40px;
  height: 58px;
`;

const ToggleButton = styled(Button)`
  line-height: 40px;
  width: 40px;
  height: 40px;
  font-size: 20px;
  align-self: center;
  justify-self: end;
  margin-right: 4px;
  border-radius: 5px;
  position: relative;

  &:hover::before {
    content: attr(data-text);
    position: absolute;
    top: -50px;
    left: 0px;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    display: block;
    width: 100px;
    text-align: center;
    font-size: 14px;
    padding: 0 5px;
    background: linear-gradient(
      220deg,
      ${({ theme }) => theme.colors.grey} 0%,
      ${({ theme }) => theme.colors.black} 100%
    );
  }
`;
const About = ({ data }) => {
  const [viewtype, setViewtype] = useState('gridview');
  const [change, setChange] = useState('listview');

  const toggleView = () => {
    if (viewtype === 'gridview') {
      setChange(viewtype);
      setViewtype('listview');
    }
    if (viewtype === 'listview') {
      setChange(viewtype);
      setViewtype('gridview');
    }
  };

  return (
    <>
      <Viewtype>
        <ToggleButton
          type="button"
          onClick={toggleView}
          data-text={`Bytt til ${change}`}
        >
          {viewtype === 'gridview' ? <FiList /> : <FiGrid />}
        </ToggleButton>
      </Viewtype>
      <section className={viewtype}>
        {data &&
          data.map((employee) => (
            <Staffmember key={employee._id} viewtype={viewtype} {...employee} />
          ))}
      </section>
    </>
  );
};

About.propTypes = {
  data: PropTypes.array,
};

export default About;
