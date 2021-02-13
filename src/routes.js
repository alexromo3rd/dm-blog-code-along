import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import TopicList from './Components/TopicList/TopicList';
import Post from './Components/Post/Post';

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route exact path='/topics' component={ TopicList } />
    <Route path='/topics/:id' component={ Post } />
    
    {/* <Route path='/topics' render={(props) => {
      return <TopicList {...props} isAuthorized={true} />
    }} /> */}
    {/* This is what the above is doing. Do this to keep location, match, and
     history from Switch 
    <Route path='/topics' render={({location: {}, history: {}, match: {}}) => {
      return <TopicList {...props} isAuthorized={true} />
    }} /> */}
  </Switch>
)