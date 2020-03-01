import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import queryString from 'query-string';

import './App.css';

const FourOhFour = ({ location }) => {
  return (
    <div className='error'>
      <h1>404</h1>
      <p>The requested document <code>{location.pathname}</code> was not found.</p>
      <p>Please proceed to <Link to='/'>home page</Link>.</p>
    </div>
  )
}

const HomePage = props => {
  const _qs = queryString.parse(props.location.search)
  console.log(props);
  console.log(_qs);
  return (
    <div>
      <button onClick={() => props.history.push('/topics')}>Topics </button>
      <h1>HOME PAGE</h1>
      <Link to='/topics'>TO TOPICS</Link>
    </div>
  );
};

const TopicsList = props => {
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <ul>
        <li><Link to={`${props.match.url}/13`}>TO TOPIC 13</Link></li>
        <li><Link to={`${props.match.url}/27`}>TO TOPIC 27</Link></li>
        <li><Link to={`${props.match.url}/21`}>TO TOPIC 21</Link></li>
      </ul>
    </div>
  );
};

const TopicDetail = props => {
  console.log(props);
  return (
    <div>
      <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/topics' component={TopicsList} />
        <Route path='/topics/:topicId' component={TopicDetail} />
        <Route exact path='/blog/topics' component={TopicsList} />
        <Route path='/blog/topics/:topicId' component={TopicDetail} />
        <Route component={FourOhFour} status={404}/>
      </Switch>
    </div>
  );
}

export default App;
