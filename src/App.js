import React, { Component } from 'react';
import _ from 'lodash'
 
 const students =[
   {id:'3', name: 'Tew', score: 10},
   {id:'9', name: 'Karn', score: 30},
   {id:'27', name: 'Non', score: 90}
 ]
 
 const StudentsLine = (props)=>(
   <div> {props.id} {props.name} = {props.score} </div>
 )
  
  class App extends Component {
    render() {
      return (
       <div >
         {
           _.map(students, s => <StudentsLine {...s} key={s.id}/>)
         }
        </div>
      );
    }
  }
 
  export default App;
