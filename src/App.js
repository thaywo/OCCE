import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
import Tables from 'pages/Tables';
import Maps from 'pages/Maps';
import Footer from 'components/Footer';
import Signin from 'pages/Signin';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import { Navbar } from '@material-tailwind/react';

function App() {

  const token = localStorage.getItem('accessToken');

  if(!token) {
    return <Signin />
  }


    return (
      <>
      <Sidebar />
      <div className="md:ml-64">
          <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/tables" component={Tables} />
              <Route exact path="/maps" component={Maps} />
              <Redirect from="*" to="/" />
          </Switch>
          <Footer />
      </div>
  </>
    );
}

export default App;
