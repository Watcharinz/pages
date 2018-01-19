import React, { Component } from 'react';
  import _ from 'lodash'
 import {
   BrowserRouter as Router,
   Route,
   Link
 } from 'react-router-dom'
  
  const students =[
    {id:'3', name: 'Tew', score: 100},
    {id:'9', name: 'Karn', score: 70},
    {id:'27', name: 'Non', score: 60}
  ]
  
 const Home = () => (<div>Home</div>)
 
 const Students = () => (
   <div>
     {
       _.map(students, s => <StudentLink {...s} key={s.id}/>)
    }
  </div>
 )

 const StudentLink = ({id, name}) => (
   <div><Link to={`/students/${id}`}>{name}</Link></div>
  )
 const StudentLine = ({id, name, score}) => (
    <div>{id} {name} = {score}</div>
   )
  
  class App extends Component {
    render() {
      return (
       <Router>
        <div >
 
         
           <Route exact path="/" component={Home}/>
           <Route path="/students" component={Students}/> 
         
        </div>
 
       </Router>
     );      
    }
  }
  
export default App;