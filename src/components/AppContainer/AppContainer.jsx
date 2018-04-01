/* 

*/
import React, { Component } from 'react';
import { BrowserRouter , Route, Link} from 'react-router-dom';

import About from '../About/About.jsx';
import Home from '../Home/Home.jsx';
import Repos from '../Repos/Repos.jsx';
import RepoDetails from '../RepoDetails/RepoDetails.jsx';

class AppContainer extends Component{
	render(){
		
		return(
				<div>
					<header>App Container</header>
					<menu>
						<BrowserRouter>
						    <div>
						      <ul>
						        <li>
						          <Link to="/">Home</Link>
						        </li>
						        <li>
						          <Link to="/about">About</Link>
						        </li>
						        <li>
						          <Link to="/repos">Repos</Link>
						        </li>
						        <li>
						          <Link to="/topics">Topics</Link>
						        </li>
						      </ul>

						      <hr />

						      <Route exact path="/" component={Home} />
						      <Route path="/about" component={About} />
						      <Route path="/repos" component={Repos} />
						      <Route path="/topics" component={Topics} />
						    </div>
						  </BrowserRouter>


					</menu>
				
				</div>
				

			);

	}
}


const Topics = ({ match }) => (
  <div>
    <h1>Topics</h1>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default AppContainer;