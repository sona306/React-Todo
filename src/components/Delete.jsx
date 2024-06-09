import React from 'react'
import Nav from './Nav'

const Delete = () => {
  return (
    <div>
      <Nav/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Task</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                <button className="btn btn-danger">Delete it</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Delete