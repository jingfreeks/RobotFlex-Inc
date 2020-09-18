import React,{Component} from 'react';
import './App.css';
import {CardList} from './component/card-list/card-list.component';
import {SearchBox} from './component/search-box/search-box.component';
class App extends Component{
  constructor(){
    super();
    this.state={
      robots:[],
      searchField:'',
    }
  }
  componentDidMount=()=>{
    this.fethData();
  }
  fethData=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({robots:users}))
  }
  handleChange=(e)=>{
    this.setState({searchField:e.target.value})
  }
  render(){
    const {robots,searchField}=this.state
    const filteredRobots = robots.filter(robots=>
      robots.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )

    return (
      <div className="App">
        <h1>Robotex Inc</h1>
        <SearchBox 
          placeholder={'search robbots'}
          handleChange={
            this.handleChange
          }
          value={this.state.searchField} 
        />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}
export default App;
