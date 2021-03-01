import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PortfolioSideBar from './components/PortfolioSideBar'
import About from './pages/AboutMe';
import Work from './pages/WorkPage';
import ContactPage from './pages/ContactPage'
import PortfolioHead from './components/PortfolioHeader'

class App extends Component {


  render() {

    return (
    <Router>
         <div style={{paddingTop:100, display: 'flex',flexFlow:'wrap', alignContent:'space-between',height:1000, width: 75, position:'fixed'}}>
                <PortfolioSideBar />
          </div>
          <div style={{ marginLeft: 60, display: 'flex', flexDirection: 'row', width: '100%', height:200, justifyContent: 'center', zIndex:0}}>
                    <PortfolioHead />
            </div>
      <Switch>
              <Route exact path='/about' component={About} />
              <Route exact path='/Work' component={Work} />
              <Route exact path='/Contact' component={ContactPage} />
          </Switch>

      </Router>
    );
  }
}

export default App;