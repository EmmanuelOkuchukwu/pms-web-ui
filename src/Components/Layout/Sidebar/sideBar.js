import React, {Component} from 'react';
import './sidebar.css';
import { NavLink  } from "react-router-dom";
import { PrivilegeService } from "../../../Service/PrivilegeService";

class sideBar extends Component {

    constructor(props) {
        super(props)
        // binding the onPaths function
        this.onPaths = this.onPaths.bind(this)
    }
    // https://reactrouter.com/web/guides/quick-start
    // setting the paths for each of the pages
    onPaths(paths) {
        return (match, location) => {
            return paths.find(x => x.match(location.pathname));
        };
    }

    render() {
        return (
            <div className="side-bar text-center">
                <NavLink  to="/profile" isActive={this.onPaths(["/^\/profile"])} id="sidebar-content"><i className="fas fa-id-badge" />&nbsp;User Profile</NavLink >
                {/* setting the hasViewMedicalRecordAccess privilege from PrivilegeService to medical record sidebar button */}
                {PrivilegeService.hasViewMedicalRecordAccess() && <NavLink  to="/medicalrecord" isActive={this.onPaths(["/^\/medicalrecord", "/^\/medicalreport"])} id="sidebar-content"><i className="fas fa-laptop-medical" />&nbsp;Medical Records</NavLink >}
                {/* setting the hasMessageInboxAccess privilege from PrivilegeService to message inbox dashboard sidebar button */}
                {PrivilegeService.hasMessageInboxAccess() && <NavLink  to="/emaildashboard"  isActive={this.onPaths(["/^\/emaildashboard", "/^\/viewemail"])} id="sidebar-content"><i className="fas fa-inbox" />&nbsp;Message inbox</NavLink > }
            </div>
        )
    }
}
export default sideBar;

