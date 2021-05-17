import styled from 'styled-components';
import { Container } from '../styles/Styles';

const Spinner = styled.section`
  width: 50px;
  height: 50px;
  margin: 0px auto;
  border-top: 4px solid ${({ theme }) => theme.colors.yellow};
  border-right: 4px solid transparent;
  border-radius: 50%;
  animation: 1s spin linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loading = styled.p`
  text-align: center;
  text-transform: uppercase;
`;

const Loader = () => (
  <>
    <Container>
      <Spinner />
      <Loading>henter data</Loading>
    </Container>
  </>
);

export default Loader;
