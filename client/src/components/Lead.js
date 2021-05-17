import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLead = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.shift.text};
  padding-bottom: 30px;
`;

const Lead = ({ lead }) => (
  <>
    <StyledLead>{lead}</StyledLead>
  </>
);

Lead.propTypes = {
  lead: PropTypes.string,
};

export default Lead;
