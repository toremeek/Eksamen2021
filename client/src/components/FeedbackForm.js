import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../styles/Styles';

const Fieldset = styled.fieldset`
  width: 600px;
  display: grid;
  grid-template-rows: auto;
  gap: 20px;
  border: none;
  margin: 0px auto;
  padding: 0;
`;

const Input = styled.input`
  margin-top: 5px;
  width: 100%;
  height: 40px;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

const Textarea = styled.textarea`
  margin-top: 5px;
  width: 100%;
  height: 135px;
  text-indent: 2px;
  padding-top: 15px;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.shift.text};
`;

const Submit = styled(Button)`
  margin: 0 auto;
  width: 100px;
  height: 40px;
  border-radius: 5px;
`;

const FeedbackForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [mail, setMail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({ name, message, mail });
  };

  return (
    <>
      <form onSubmit={handleSubmit} method="POST">
        <Fieldset>
          <Label id="name">
            Navn:
            <Input
              type="text"
              id="name"
              placeholder="Skriv inn ditt navn"
              onChange={(event) => setName(event.target.value)}
              value={name}
              required
            />
          </Label>
          <Label id="mail">
            E-post:
            <Input
              type="text"
              id="mail"
              placeholder="Mail address"
              onChange={(event) => setMail(event.target.value)}
              value={mail}
              required
            />
          </Label>
          <Label id="message">
            Beskjed:
            <Textarea
              cols="50"
              rows="5"
              id="message"
              placeholder="Hva har du på hjertet??"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
              required
            />
          </Label>
          <Submit type="submit">Send</Submit>
        </Fieldset>
      </form>
    </>
  );
};

FeedbackForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default FeedbackForm;
