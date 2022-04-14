import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from './component/Home';
import ApplicationForm from './component/ApplicationForm';
import PageNotFound from './component/PageNotFound';
import List from './component/List';
import 'react-toastify/dist/ReactToastify.css';
import Test from './component/Test';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        {/* <Route exact path="/form">
          <ApplicationForm/>
        </Route> */}
        <Route exact path="/form"
        component={ApplicationForm} />
        <Route exact path="/form/:id"
        component={ApplicationForm} />   
        <Route path="/list">
          <List/>
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="*" exact={true}>
        <PageNotFound/>
          </Route>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
