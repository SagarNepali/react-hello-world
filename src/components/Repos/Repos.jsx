import React, {Component} from 'react';
import 'whatwg-fetch';
import {Link, Route, Switch} from 'react-router-dom';
import RepoDetails from '../RepoDetails/RepoDetails.jsx';

class Repos extends Component{
	

	constructor(){
		super();
		this.state = { repositories:[]};
	}

	componentDidMount(){
		fetch('https://api.github.com/users/pro-react/repos')
		.then((response) => response.json())
		.then((responseData) => {
			this.setState({repositories:responseData});
		});
	}

	render(){

		let repos = this.state.repositories.map((repo) => (
						<li key={repo.id}>
							<Link to={"/repos/details/"+repo.name} activeClassName="active">{repo.name}</Link>
						</li>
					));

		return(
			<div>
			<h1>Github Repos</h1>
				<ul>
					{repos}
				</ul>
				
				<Route path ={"/repos/details/:repo_name"} component={RepoDetails} />
			</div>
		);
	}
}

export default Repos;

