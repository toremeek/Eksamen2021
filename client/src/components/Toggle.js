import { func } from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  width: 220px;
  align-items: center;
  margin: 30px 0 0 auto;
`;

const StyledP = styled.p`
  color: ${({ theme }) => theme.shift.text};
  text-align: center;
  font-size: 1rem;
  padding-right: 10px;
  text-decoration: none;
`;

const Toggle = ({ toggleTheme }) => (
  <StyledDiv>
    <StyledP>Toggle style modes!</StyledP>
    <label className="switch">
      <input className="checkbox" type="checkbox" onClick={toggleTheme} />
      <span className="slider" />
    </label>
  </StyledDiv>
);
Toggle.propTypes = {
  toggleTheme: func.isRequired,
};
export default Toggle;
