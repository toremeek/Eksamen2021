import PropTypes from 'prop-types';
import { useState } from 'react';
import Article from './Article';
import Articlescontainer from './Articlescontainer';
import Categorybar from './Categorbar';
import Searchbar from './Searchbar';

const Articles = ({ data, sortorder, setSortorder }) => {
  const [search, setSearch] = useState('');
  const [viewtype, setViewtype] = useState('gridview');
  const [change, setChange] = useState('listview');

  const toggleView = () => {
    if (viewtype === 'gridview') {
      setChange(viewtype);
      setViewtype('listview');
    }
    if (viewtype === 'listview') {
      setChange(viewtype);
      setViewtype('gridview');
    }
  };

  const toggleSort = () => {
    if (sortorder === 'desc') {
      setSortorder('asc');
    }
    if (sortorder === 'asc') {
      setSortorder('desc');
    }
  };

  return (
    <>
      <Searchbar
        change={change}
        search={search}
        setSearch={setSearch}
        setSortorder={setSortorder}
        sortorder={sortorder}
        toggleSort={toggleSort}
        toggleView={toggleView}
        viewtype={viewtype}
      />

      <Categorybar />

      <Articlescontainer viewtype={viewtype}>
        {data &&
          data

            // TODO: Fix this "error"
            // eslint-disable-next-line array-callback-return
            .filter((article) => {
              if (article?.title.toLowerCase().includes(search.toLowerCase())) {
                return article;
              }
            })
            .map((article) => (
              <Article
                key={article._id}
                article={article}
                {...article}
                viewtype={viewtype}
              />
            ))}
      </Articlescontainer>
    </>
  );
};

Articles.propTypes = {
  data: PropTypes.array,
  sortorder: PropTypes.string,
  setSortorder: PropTypes.func.isRequired,
};

export default Articles;
