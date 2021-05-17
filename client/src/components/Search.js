import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const Searchbar = styled.section``;
const Form = styled.form``;
const Fieldset = styled.fieldset`
  border: none;
  padding: 0px;
`;
const Label = styled.label`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
`;
const Input = styled.input`
  border: none;
  color: #fefefecc;
  width: 100%;
  border-radius: 0px 25px 25px 0px;
  background: linear-gradient(
    220deg,
    ${({ theme }) => theme.colors.grey} 0%,
    ${({ theme }) => theme.colors.black} 100%
  );
  &:focus {
    outline: none;
    background: linear-gradient(
      220deg,
      ${({ theme }) => theme.colors.grey} 0%,
      ${({ theme }) => theme.colors.black} 100%
    );
  }
  &:-webkit-autofill {
    box-shadow: 0 0 0 1000px ${({ theme }) => theme.colors.black} inset !important;
    -webkit-box-shadow: 0 0 0 1000px ${({ theme }) => theme.colors.black} inset !important;
    -webkit-text-fill-color: #fefefecc !important;
  }
`;
const Button = styled.span`
  display: block;
  border: none;
  height: 58px;
  width: 58px;
  line-height: 58px;
  text-indent: 20px;
  border-radius: 25px 0px 0px 25px;
  color: #fefefecc;
  background: ${({ theme }) => theme.colors.black};
`;

const Search = ({ search, setSearch }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    await setSearch(event.target.value);
  };
  const handleSubmitbutton = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Searchbar>
        <Form onSubmit={handleSubmitbutton}>
          <Fieldset>
            <Label htmlFor="search">
              <Button className="button">
                <FaSearch aria-label="search" />
              </Button>
              <Input
                type="text"
                id="search"
                value={search}
                placeholder="Søk etter navn på artikkel.."
                onChange={handleSubmit}
              />
            </Label>
          </Fieldset>
        </Form>
      </Searchbar>
    </>
  );
};

Search.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};

export default Search;
