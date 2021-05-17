import PropTypes from 'prop-types';
import { useState } from 'react';
import { usePage } from '../hooks/fetchPage';
import { Container } from '../styles/Styles';
import Articles from './Articles';
import Lead from './Lead';
import Loader from './Loader';
import Error from './Error';
import Title from './Title';
import About from './About';
import Galleri from './Galleri';
import Categories from './Categories';
import CourseList from './CourseList';

const Page = ({ source, fields, url, maxreturn, customtitle, customlead }) => {
  const [sortorder, setSortorder] = useState('desc');

  const { status, data } = usePage(source, fields, url, maxreturn, sortorder);

  if (status === 'loading') return <Loader />;
  if (status === 'error') return <Error />;

  return (
    <>
      <Container>
        <Title title={customtitle || data?.title} />
        <Lead lead={customlead || data?.lead} />
        {source === 'articlepage' && data?.length > 0 && (
          <Articles
            data={data}
            sortorder={sortorder}
            setSortorder={setSortorder}
          />
        )}
        {source === 'person' && data?.length > 0 && <About data={data} />}
        {source === 'gallery' && data?.length > 0 && <Galleri data={data} />}
        {source === 'category' && data?.length > 0 && (
          <Categories data={data} />
        )}
        {source === 'course' &&
          data?.length > 0 &&
          data?.map((courses) => <CourseList key={courses._id} {...courses} />)}
      </Container>
    </>
  );
};

Page.propTypes = {
  source: PropTypes.string,
  fields: PropTypes.string,
  url: PropTypes.string,
  maxreturn: PropTypes.string,
  customtitle: PropTypes.string,
  customlead: PropTypes.string,
};

export default Page;
