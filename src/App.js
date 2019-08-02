import React , {Component} from 'react';
import Student from "./component/Student";

class App extends Component{

  state = {
    students: []
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({students: data})
    })
    .catch(console.log)
  }
  render(){
    
    return (
      <Student students={this.state.students} />
    );
  }
}

export default App;
