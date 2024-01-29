import {Component} from "react";

import './employees-list.css'
import EmployeesListItem from "../employees-list-item/employees-list-item";

class EmployeesList extends Component{

    render() {
        const {data, onDelete, onToggleProp} = this.props
        this.elem = data.map(item => {
            const {id, ...itemProps} = item
            return (
                <EmployeesListItem
                    key={id}
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute("data-toggle") )}/>
            )

        })
        return (
            <ul className="app-list list-group">
                {this.elem}
            </ul>
        )
    }
}

export default EmployeesList
