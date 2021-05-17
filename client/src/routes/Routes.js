import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';
import Navigation from '../components/Navigation';

import About from '../pages/About';
import Article from '../pages/Article';
import Articles from '../pages/Articles';
import Contact from '../pages/Contact';
import Galleri from '../pages/Galleri';
import Home from '../pages/Home';
import Staffmember from '../pages/Staffmember';
import Breadcrumbs from '../components/Breadcrumbs';
import NoMatch from '../pages/NoMatch';
import Categories from '../pages/Categories';
import Category from '../pages/Category';
import Courses from '../pages/Courses';
import Course from '../pages/Course';

const Routes = () => (
  <Router>
    <Navigation />
    <Breadcrumbs />
    <DefaultLayout>
      <Switch>
        <Redirect exact from="/home" to="/" />
        <Redirect exact from="/hjem" to="/" />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/artikler">
          <Articles />
        </Route>
        <Route exact path="/artikler/:slug">
          <Article />
        </Route>
        <Route exact path="/galleri">
          <Galleri />
        </Route>
        <Route exact path="/kategori">
          <Categories />
        </Route>
        <Route exact path="/kategori/:slug">
          <Category />
        </Route>
        <Route exact path="/om">
          <About />
        </Route>
        <Route exact path="/om/:slug">
          <Staffmember />
        </Route>
        <Route exact path="/kontakt">
          <Contact />
        </Route>
        <Route exact path="/kurs">
          <Courses />
        </Route>
        <Route exact path="/kurs/:slug">
          <Course />
        </Route>
        <Route exact path="/*">
          <NoMatch />
        </Route>
      </Switch>
    </DefaultLayout>
  </Router>
);

export default Routes;
