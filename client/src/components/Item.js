import PropTypes from 'prop-types';
import { useItem } from '../hooks/fetchItem';
import { Container } from '../styles/Styles';

import Loader from './Loader';
import Error from './Error';

import ArticleItem from './ArticleItem';
import CategoryItem from './CategoryItem';
import StaffmemberItem from './StaffmemberItem';
import CourseItem from './CourseItem';

const Item = ({ source, fields, url }) => {
  const { status, data } = useItem(source, fields, url);

  if (status === 'loading') return <Loader />;
  if (status === 'error') return <Error />;

  return (
    <>
      <Container>
        {source === 'articlepage' && <ArticleItem data={data} />}
        {source === 'person' && <StaffmemberItem data={data} />}
        {source === 'category' && <CategoryItem data={data} />}
        {source === 'course' && <CourseItem data={data} />}
      </Container>
    </>
  );
};

Item.propTypes = {
  source: PropTypes.string,
  fields: PropTypes.string,
  url: PropTypes.string,
};

export default Item;
