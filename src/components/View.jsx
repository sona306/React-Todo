import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const View = () => {
    const [todo,setData]=useState([])

const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            (response)=>{

                console.log(response.data)
                setData(response.data)

            }
        ).catch()
    }

    useEffect(()=>{fetchData()},[])

  return (

    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                <table class="table">
                    {todo.map(
                        (value,index)=>
                            {
                         return <tr>
                                <th scope="row">{value.id}</th>
                                <td>{value.title}</td>
                                <td>{value.userId}</td>
                                </tr>
                            }
                    )

                    }
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
    </tr>
  </thead>
  <tbody>

        <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        </tr>

  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}



export default View