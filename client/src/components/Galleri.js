import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MapOutImages from './MapOutImages';
import ImgModal from './ImgModal';

const StyledSection = styled.section`
  display: grid;
  grid-template-rows: auto;
  background-color: ${({ theme }) => theme.colors.grey};
  margin: auto;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
  @media (max-width: 1300px) {
    width: 700px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 340px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  }
`;

const Box = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: auto;
  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 740px;
  }
`;

const Galleri = ({ data }) => {
  const [loading] = useState(false);
  const [galleryData] = useState(data);
  const [error] = useState(null);
  const [activeIndex, setActiveIndex] = useState([0]);
  const [modal, setModal] = useState(false);

  const clickedImage = (e) => {
    const newActiveIndex = e.target.getAttribute('data-index');
    setActiveIndex(newActiveIndex);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <ImgModal
        closeModal={closeModal}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        galleryData={galleryData}
        modal={modal}
      />
      <StyledSection>
        {loading ? <p>laster inn..</p> : null}
        {error ? <p>Noe skjedde: {error}</p> : null}
        <Box>
          {galleryData?.length > 0 || !error
            ? galleryData.map((imageData, index) => (
                <MapOutImages
                  clickedImage={clickedImage}
                  key={index}
                  activeIndex={activeIndex}
                  index={index}
                  loading={loading}
                  {...imageData}
                />
              ))
            : null}
        </Box>
      </StyledSection>
    </>
  );
};

Galleri.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Galleri;
