import PropTypes from 'prop-types';
import { Main } from '../styles/Styles';

import Footer from '../components/Footer';

const DefaultLayout = ({ children }) => (
  <>
    <Main id="mymain">
      {children}
      <Footer />
    </Main>
  </>
);

DefaultLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default DefaultLayout;
