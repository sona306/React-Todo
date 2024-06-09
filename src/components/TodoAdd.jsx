import React, { useState } from 'react'
import Nav from './Nav'

const TodoAdd = () => {
    const [todo,setData]=useState(
        {
            "task":'',
            "dob":'',
            "plan":'',
            "pending":''
        }
    )

const inputHandler=(event)=>{
setData({...todo,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(todo)
}

  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Task</label>
                            <input type="text" className="form-control" name='task' value={todo.task} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Date</label>
                            <input type="date" name="dob" id="" className="form-control" value={todo.dob} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Plan</label>
                            <input type="text" className="form-control" name='plan' value={todo.plan} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Pending</label>
                            <input type="text" className="form-control" name='pending' value={todo.pending} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                            <button className="btn btn-secondary" onClick={readValue}>Add Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TodoAdd