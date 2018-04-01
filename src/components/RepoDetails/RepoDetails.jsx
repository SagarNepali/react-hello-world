import React ,{Component} from 'react';

export default class RepoDetails extends Component{
	

	constructor(){
		super();
		this.state = {
			repository:{}
		};
	}

	fetchData(repo_name){
		fetch('https://api.github.com/repos/pro-react/'+repo_name)
		.then((response) => response.json())
		.then((responseData) => {
		this.setState({repository:responseData});
		});
		console.log(this.state)
	}
	 
	componentDidMount(){
		// The Router injects the key "repo_name" inside the params prop
		
		let repo_name = this.props.match.params.repo_name;
		this.fetchData(repo_name)
	}
	 
	componentWillReceiveProps(nextProps){
		// The Router injects the key "repo_name" inside the params prop
		
		let repo_name = nextProps.match.params.repo_name;
		this.fetchData(repo_name)
	}

	render(){
		let stars = [];
		for (var i = 0; i < this.state.repository.stargazers_count; i++) {
			stars.push('');
		}
		return(
			<div>
				<h2>{this.state.repository.name}</h2>
				<p>{this.state.repository.description}</p>
				<span>{stars}</span>
			</div>
		);
	}
}

