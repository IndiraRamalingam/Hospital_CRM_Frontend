import React, { useState } from "react";
import { Link } from "react-router-dom";

function SideBar() {
  const [compoIsDrop, setCompoIsDrop] = useState(false);
  const [utiliIsDrop, setUtiliIsDrop] = useState(false);
  const [pageIsDrop, setPageIsDrop] = useState(false);

  return (
      <>
      <ul
        className="navbar-nav sidebar sidebar-dark accordion navigation"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/adminDashboard">
          <div className="sidebar-brand-text">
            Admin
          </div>
        </Link>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link className="nav-link" to="/adminDashboard">
            <span className="dashboard">Dashboard</span>
          </Link>
        </li>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a
            href="#"
            onClick={() => setCompoIsDrop(!compoIsDrop)}
            className={compoIsDrop ? "nav-link" : "nav-link collapsed"}
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded={compoIsDrop}
            aria-controls="collapseTwo"
          >
            <i className="fa-solid fa-user-doctor"> </i>
            <span className="texts"> Doctor</span>
          </a>
          <div
            id="collapseTwo"
            className={compoIsDrop ? "collapse show" : "collapse"}
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded innertext">
              {/* <h6 className="collapse-header">Custom Components:</h6> */}
              <Link className="collapse-item" to="/viewDoctor">
                Doctors List
              </Link>
              <Link className="collapse-item" to="/createDoctor">
                Add Doctor
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item">
          <a
            onClick={() => setUtiliIsDrop(!utiliIsDrop)}
            className={utiliIsDrop ? "nav-link" : "nav-link collapsed"}
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded={utiliIsDrop}
            aria-controls="collapseUtilities"
          >
            <i className="fa-solid fa-bed"></i>
            <span className="texts"> Patient</span>
          </a>
          <div
            id="collapseUtilities"
            className={utiliIsDrop ? "collapse show" : "collapse"}
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded innertext">
              {/* <h6 className="collapse-header">Custom Utilities:</h6> */}
              <Link className="collapse-item" to="/viewAllPatients">
                Patients List
              </Link>
              <Link className="collapse-item" to="/createPatientByAdmin">
                Add Patient
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Divider --> */}
        {/* <hr className="sidebar-divider" /> */}

     {/* <!-- Nav Item - Feedbacks --> */}
     <li className="nav-item">
          <Link className="nav-link" to="/viewContact">
          <i className="fa-solid fa-circle-question"></i>
            <span className="texts"> View Queries</span>
          </Link>
        </li>
        
        {/* <!-- Nav Item - Charts --> */}
        <li className="nav-item">
          <Link className="nav-link" to="/Charts">
          <i className="fa-solid fa-chart-area"></i>
            <span className="texts"> Charts</span>
          </Link>
        </li>

      </ul>
    </>
  )
}

export default SideBar