import Page from '../components/Page';

const Home = () => (
  <Page
    source="articlepage"
    fields="articlefields"
    maxreturn="10"
    customtitle="De 10 fresheste artiklene"
    customlead="Hot chicks, big robots & lots of ammo!! Get all the juicy news here!!"
  />
);

export default Home;
