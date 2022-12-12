import React from 'react';
import {Route,Switch} from 'react-router-dom';
import List from './Components/List';

import Company from './Components/Pages/Company';
import Footer from './Components/Pages/Footer';
import Home from './Components/Pages/Home';
import Register from './Components/Pages/Register';
import Services from './Components/Pages/Services';
import Work from './Components/Pages/Work';
import AppDev from './Random Pages/AppDev';
import Commerce from './Random Pages/Commerce';
import Digital from './Random Pages/Digital';
import Graphic from './Random Pages/Graphic';
import Logo from './Random Pages/Logo';
import Seo from './Random Pages/Seo';
import Social from './Random Pages/Social';
import Software from './Random Pages/Software';
import Web from './Random Pages/Web';

function App() {
  return (
    <>
     <List/>

    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/services' component={Services}/>
      <Route path='/work' component={Work}/>
      <Route path='/company' component={Company}/>
      <Route path='/register' component={Register}/>
      <Route path='/web' component={Web}/>
      <Route path='/seo' component={Seo}/>
      <Route path='/graphic' component={Graphic}/>
      <Route path='/digital' component={Digital}/>
      <Route path='/software' component={Software}/>
      <Route path='/appdev' component={AppDev}/>
      <Route path='/logo' component={Logo}/>
      <Route path='/social' component={Social}/>
      <Route path='/commerce' component={Commerce}/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
