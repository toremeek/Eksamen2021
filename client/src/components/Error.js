import styled from 'styled-components';
import { Container } from '../styles/Styles';

const Message = styled.p`
  text-align: center;
  text-transform: uppercase;
`;

const Error = () => (
  <>
    <Container>
      <Message>Whooops!! Noe gikk dritt..</Message>
    </Container>
  </>
);

export default Error;
