
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './Header';
import CreateData from './CreateData';
import ShowData from './ShowData';
import EditData from './EditData';
import { route} from './Router';
import{ React,Component } from 'react';
export default class App extends Component{
  constructor(props)
  {
    super(props)
  this.view={
    createData:<CreateData/>,
    showData:<ShowData/>,
    editData:<EditData/>
    
  }

  }
  render(){
  return (
   <>
   <Header/>
         {this.gold()}
   </>
  );
}
gold=()=>{
  return this.view[route]
}
}
