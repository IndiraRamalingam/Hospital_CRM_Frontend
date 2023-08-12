import React from 'react'
import SideBar from '../Pages/SideBar'
import { Link } from 'react-router-dom'

function AdminDashboard() {
  const blue={
    color:'skyblue'
  }
  return (
    <div id="page-top">
        <div id="wrapper">
        <SideBar/>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">

              <div className='row'>

                {/* Doctor List */}
                <div className="col-lg-4 mb-5 mt-5">
                    <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 ms-5">
                      <div className="p-3 badge-primary rounded">
                        {/* <i className="fas fa-cloud-upload-alt fa-lg text-primary fa-fw"></i> */}
                      <img src='data:image/jpeg;base64,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' height={100} width={100} />
                      </div>
                    </div>
                    <div className="mt-5 ms-5">        
                    <Link to='/viewDoctor'>
                    <h4 className="fw-bold mb-2">VIEW DOCTORS</h4>
                    </Link>
                    </div>
                  </div>
                </div>

              {/* Doctor List */}
              <div className="col-lg-4 mb-5 mt-5">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 ms-5">
                      <div className="p-3 badge-primary rounded">
                        {/* <i className="fas fa-cloud-upload-alt fa-lg text-primary fa-fw"></i> */}
                      <img src='data:image/jpeg;base64,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' height={100} width={100} />
                      </div>
                    </div>
                    <div className="mt-5 ms-5">        
                    <Link to='/viewAllPatients'>
                    <h4 className="fw-bold mb-2">VIEW PATIENTS</h4>
                    </Link>
                    </div>
                  </div>
                </div>


              </div>
           
              <div className='row'>

                {/* Doctor List */}
                <div className="col-lg-4 mb-5 mt-5">
                    <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 ms-5">
                      <div className="p-3 badge-primary rounded">
                        {/* <i className="fas fa-cloud-upload-alt fa-lg text-primary fa-fw"></i> */}
                      <img src='data:image/jpeg;base64,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' height={100} width={100} />
                      </div>
                    </div>
                    <div className="mt-5 ms-5">        
                    <Link to='/viewQueries'>
                    <h4 className="fw-bold mb-2">VIEW QUERIES</h4>
                    </Link>
                    </div>
                  </div>
                </div>

              {/* Doctor List */}
              <div className="col-lg-4 mb-5 mt-5">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 ms-5">
                      <div className="p-3 badge-primary rounded">
                        {/* <i className="fas fa-cloud-upload-alt fa-lg text-primary fa-fw"></i> */}
                      <img src='data:image/jpeg;base64,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' height={100} width={100} />
                      </div>
                    </div>
                    <div className="mt-5 ms-5">        
                    <Link to='/charts'>
                    <h4 className="fw-bold mb-2">VIEW CHART</h4>
                    </Link>
                    </div>
                  </div>
                </div>

              </div>

            </div>
            <a className="backtotop" href="#page-top">
              <i className="fas fa-angle-up"></i>
            </a>        
          </div>
        </div>
      </div>
  )
}

export default AdminDashboard