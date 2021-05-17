import { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from '../styles/Styles';
import Lead from './Lead';
import Loader from './Loader';
import Error from './Error';
import Title from './Title';

import FeedbackForm from './FeedbackForm';
import { createMessage } from '../utils/formService';

const Form = ({ source, customtitle, customlead }) => {
  const [status, setStatus] = useState('initial');

  const onSubmit = async (data) => {
    setStatus('loading');
    try {
      await createMessage(data);
      setStatus('initial');
    } catch (error) {
      setStatus('error');
    } finally {
      setStatus('success');
    }
  };

  if (status === 'loading')
    return (
      <Container>
        <Loader />
      </Container>
    );
  if (status === 'error')
    return (
      <Container>
        <Error />
      </Container>
    );
  if (status === 'success')
    return (
      <Container>
        <Title title="Takk! Din beskjed er sendt." />
      </Container>
    );

  return (
    <>
      <Container>
        <Title title={customtitle} />
        <Lead lead={customlead} />
        {source === 'contact' && <FeedbackForm onSubmit={onSubmit} />}
      </Container>
    </>
  );
};

Form.propTypes = {
  source: PropTypes.string,
  customtitle: PropTypes.string,
  customlead: PropTypes.string,
};

export default Form;
