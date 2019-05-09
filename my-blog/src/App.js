import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';


import Home from './components/home'
import Posts from './components/posts'
import ListAuthor from './components/listAuthors'
import PostShow from './components/postshow'
import AuthorShow from './components/authorShow'
import RandomPost from './components/randomPost'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>React blog</h2>
              <span><Link to='/' className="link">Home&nbsp;&nbsp;&nbsp;</Link></span>
              <span><Link to='/posts' className="link"> Posts&nbsp;&nbsp;&nbsp;</Link></span>
              <span><Link to='/author' className="link"> Authors&nbsp;&nbsp;&nbsp;&nbsp;</Link></span>
              <span><Link to='/random' className="link"> Random post&nbsp;&nbsp;&nbsp;</Link></span>

            <Switch>
              <Route path="/" component = {Home} exact={true}/>
              <Route path='/posts' component= {Posts} exact={true}></Route>
              <Route path='/author' component= {ListAuthor} exact={true}></Route>
              <Route path='/posts/:id' component ={PostShow}></Route>
              <Route path='/author/:id' component= {AuthorShow} exact={true}></Route>
              <Route path='/random' component= {RandomPost} exact={true}></Route>
            </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
