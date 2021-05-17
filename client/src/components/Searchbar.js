import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FiGrid, FiList } from 'react-icons/fi';
import { BiSortDown, BiSortUp } from 'react-icons/bi';

import Search from './Search';
import { Button } from '../styles/Styles';

const StyledSearchbar = styled.section`
  padding-top: 0;
  display: grid;
  grid-template-columns: 0.5fr 3fr 0.5fr;
  gap: 20px;
  margin-bottom: 20px;
`;

const ToggleButton = styled(Button)`
  line-height: 40px;
  width: 40px;
  height: 40px;
  font-size: 20px;
  align-self: center;
  justify-self: center;
  margin-right: 4px;
  border-radius: 5px;
  position: relative;

  &:hover::before {
    content: attr(data-text);
    position: absolute;
    top: -50px;
    left: 0px;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    display: block;
    width: 100px;
    text-align: center;
    font-size: 14px;
    padding: 0 5px;
    background: linear-gradient(
      220deg,
      ${({ theme }) => theme.colors.grey} 0%,
      ${({ theme }) => theme.colors.black} 100%
    );
  }
`;
const Searchbar = ({
  change,
  search,
  setSearch,
  sortorder,
  viewtype,
  toggleSort,
  toggleView,
}) => (
  <>
    <StyledSearchbar>
      <div />
      <Search search={search} setSearch={setSearch} />
      <section>
        <ToggleButton
          type="button"
          onClick={toggleView}
          data-text={`Bytt til ${change}`}
        >
          {viewtype === 'gridview' ? <FiList /> : <FiGrid />}
        </ToggleButton>
        <ToggleButton
          type="button"
          onClick={toggleSort}
          data-text={`Sorter ${sortorder}`}
        >
          {sortorder === 'desc' ? <BiSortUp /> : <BiSortDown />}
        </ToggleButton>
      </section>
    </StyledSearchbar>
  </>
);

Searchbar.propTypes = {
  change: PropTypes.string,
  search: PropTypes.string,
  setSearch: PropTypes.func,
  sortorder: PropTypes.string,
  toggleSort: PropTypes.func,
  toggleView: PropTypes.func,
  viewtype: PropTypes.string,
};

export default Searchbar;
