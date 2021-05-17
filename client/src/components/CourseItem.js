import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import urlFor from '../utils/imgUrl';
import Modal from './Modal';

const StyledWrapper = styled.section`
  color: white;
  background: ${({ theme }) => theme.colors.black};
  width: 100%;
  margin: 0 auto;
  padding-bottom: 40px;
`;

const StyledImage = styled.div`
  display: flex;
  justify-content: center;
`;

const TextContainer = styled.section`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 2rem auto;
  }
  h2 {
    margin: 2rem auto;
  }
  p {
    color: white;
    margin: 30px auto;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #fed049;
    color: black;
  }
`;
const CourseItem = ({ data }) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <StyledWrapper>
        <Modal
          modal={modal}
          setModal={setModal}
          freeCourse={data?.free}
          courseTitle={data?.title}
          price={data?.price}
        />
        <TextContainer>
          <h1>Velkommen til kurs i {data?.title}</h1>
          <h2>
            Kurset har oppstart {data?.startDate.split('-').reverse().join('-')}
          </h2>
          <p>{data?.description}</p>
          <StyledImage>
            <img
              src={urlFor(data?.image).width(400).format('webp').url()}
              alt={`Bilde av logo til ${data?.title}`}
            />
          </StyledImage>
          <p>
            Adresse: {data?.adress}, {data?.zipcode}{' '}
            {data?.location.toUpperCase()}
          </p>
          <button type="button" onClick={openModal}>
            Meld deg på
          </button>
        </TextContainer>
      </StyledWrapper>
    </>
  );
};

CourseItem.propTypes = {
  data: PropTypes.object,
};

export default CourseItem;
