/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import urlFor from '../utils/imgUrl';

const StyledModal = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 0;
`;

const StyledInnerModal = styled(motion.section)`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.black};
  height: auto;
  width: 1100px;

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
  & img {
    width: 100%;
  }
`;

const StyledAltText = styled.p`
  color: white;
  font-size: 1.2rem;
`;

const StyledButton = styled.button`
  display: inline-block;
  padding: 0.4em 2em;
  margin: 0 auto 5px auto;
  border: 0.14em solid #000000;
  box-sizing: border-box;
  text-decoration: none;
  font-size: 1rem;
  color: #000000;
  text-align: center;
  transition: all 0.15s;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.white};
  }
`;
const StyledNeste = styled.div`
  position: absolute;
  font-size: 30px;
  bottom: 0.22rem;
  right: 0;
  padding: 0.6rem 3rem;
  background: ${({ theme }) => theme.colors.teal};
  &:hover {
    background: ${({ theme }) => theme.colors.yellow};
  }
`;

const NextContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const StyledForrige = styled.div`
  position: absolute;
  font-size: 30px;
  bottom: 0.22rem;
  left: 0;
  padding: 0.6rem 3rem;
  background: ${({ theme }) => theme.colors.teal};
  &:hover {
    background: ${({ theme }) => theme.colors.yellow};
  }
`;

const ImgModal = ({
  closeModal,
  modal,
  activeIndex,
  setActiveIndex,
  galleryData,
}) => {
  const nextImage = (activeIndex) => {
    if (activeIndex >= 8) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }
    setActiveIndex(activeIndex);
  };

  const lastImage = (activeIndex) => {
    if (activeIndex === 0) {
      activeIndex = 8;
    } else {
      activeIndex--;
    }
    setActiveIndex(activeIndex);
  };

  return (
    <>
      {modal ? (
        <StyledModal>
          <AnimatePresence>
            <StyledInnerModal
              initial={{ scale: 0, rotate: 0, opacity: 0 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                stiffness: 200,
                damping: 20,
              }}
            >
              <NextContainer>
                <img
                  src={urlFor(galleryData[activeIndex]?.img.image.asset.url)
                    .width(1100)
                    .height(597)
                    .format('webp')
                    .url()}
                  alt={galleryData[activeIndex]?.img.alt}
                  onKeyDown={() => nextImage(activeIndex)}
                />
                <StyledNeste onClick={() => nextImage(activeIndex)}>
                  Neste
                </StyledNeste>
                <StyledForrige onClick={() => lastImage(activeIndex)}>
                  Forrige
                </StyledForrige>
              </NextContainer>

              <StyledAltText>{galleryData[activeIndex]?.img.alt}</StyledAltText>
              <StyledButton type="button" onClick={closeModal}>
                Lukk
              </StyledButton>
            </StyledInnerModal>
          </AnimatePresence>
        </StyledModal>
      ) : null}
    </>
  );
};

ImgModal.propTypes = {
  closeModal: PropTypes.func,
  modal: PropTypes.bool,
  setActiveIndex: PropTypes.func,
  galleryData: PropTypes.array,
};

export default ImgModal;
