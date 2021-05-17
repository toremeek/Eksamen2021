/* eslint-disable no-nested-ternary */
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createRegistration } from '../utils/formService';

const Background = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.753);
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 0;
`;

const ModalWrapper = styled.div`
  text-align: left;
  background-color: rgb(255, 255, 255);
  color: black;
  max-width: 700px;
  max-height: calc(100vh - 210px);
  overflow-y: auto;
  padding: 40px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 0 auto;
  label {
    font-size: 1rem;
    display: block;
  }
  input {
    margin: 10px 0;
    width: 50%;
    display: block;
  }
  button {
    margin: 20px 0;
    padding: 5px 2rem;
    color: white;
    background-color: rgb(84, 231, 175);
    border: none;
    border-radius: 5%;
  }
  h1 {
    margin: 20px auto;
  }
  p {
    margin: 20px auto;
  }
`;
const Modal = ({ modal, setModal, freeCourse, courseTitle, price }) => {
  const modalRef = useRef();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (sanityData) => {
    setLoading(false);
    setError(false);
    setSuccess(false);
    try {
      await createRegistration(sanityData);

      setSuccess(true);
    } catch (error) {
      setError(error);
      console.log(error.message);
    } finally {
      setLoading(false);
      setSuccess(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, name, phone, courseTitle });
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setModal(false);
    }
  };
  return (
    <>
      {modal && freeCourse ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper setModal={setModal}>
            <StyledForm onSubmit={handleSubmit}>
              <h1>Meld deg på {courseTitle} her</h1>
              <p>Dette kurset er gratis</p>
              <label>E-post</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                type="text"
                required
              />
              <button type="submit">{loading ? 'Send' : 'Sender...'}</button>
            </StyledForm>
          </ModalWrapper>
        </Background>
      ) : modal && !freeCourse ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper>
            <StyledForm onSubmit={handleSubmit}>
              <h1>Meld deg på {courseTitle} her</h1>
              <p>Dette kurset koster {price},-</p>
              <label>E-post: </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                type="text"
                required
              />
              <label>Navn: </label>
              <input
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                type="text"
                required
              />
              <label>Telefon: </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.currentTarget.value)}
                type="text"
                required
              />
              <button type="submit">{loading ? 'Send' : 'Sender...'}</button>
              {error ? <p>Noe gikk galt</p> : null}
              {success ? <p>Du er nå meldt på kurset</p> : null}
            </StyledForm>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

Modal.propTypes = {
  // modal, setModal, freeCourse, courseTitle, price
  modal: PropTypes.bool,
  setModal: PropTypes.func,
  freeCourse: PropTypes.bool,
  courseTitle: PropTypes.string,
  price: PropTypes.number,
};

export default Modal;
