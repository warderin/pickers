import './App.css';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Landing from './components/Landing';

function App({ signOut, user }) {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Footer />
    </div>
  );
}

export default withAuthenticator(App);
