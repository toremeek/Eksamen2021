import Page from '../components/Page';

const Galleri = () => (
  <Page
    source="gallery"
    fields="gallerifields"
    maxreturn="9"
    customtitle="Bildegalleri"
    customlead="Her er de siste bildene fra redaksjonen"
  />
);

export default Galleri;
