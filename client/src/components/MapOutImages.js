import PropTypes from 'prop-types';
import styled from 'styled-components';
import urlFor from '../utils/imgUrl';

const StyledImgs = styled.img`
  width: 100%;
  cursor: pointer;
`;

const MapOutImages = ({ clickedImage, index, ...imageData }) => (
  <StyledImgs
    src={urlFor(imageData.img.image)
      .width(366)
      .height(220)
      .format('webp')
      .url()}
    onClick={clickedImage}
    data-index={index}
  />
);

MapOutImages.propTypes = {
  clickedImage: PropTypes.func,
  index: PropTypes.number,
  imageData: PropTypes.array,
};

export default MapOutImages;
