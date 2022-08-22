import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home-page/Home';
import Navigation from './components/navigation/Navigation';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Book from './components/home-page/Book';
import BookView from './components/course-page/BookView';
import { AuthProvider } from './AuthContext';
import Donate from './components/contact/Donate';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/donate" component={Donate} exact />
          <Route path={'/books'} component={Book} exact />
          <Route path={'/books/:id'} component={BookView} exact />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
