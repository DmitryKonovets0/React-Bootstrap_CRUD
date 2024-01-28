import {Component} from "react";
import './app-info.css'

class AppInfo  extends Component{
   constructor(props) {
       super(props);
   }
   render() {
       const {employees, increased} = this.props
       return (
           <div className="app-info">
               <h1>Учет сотрудников в компании N</h1>
               <h2>Общее число сотрудников:{employees}</h2>
               <h2>Премию получат: {increased}</h2>
           </div>
       )
   }
}

export default AppInfo