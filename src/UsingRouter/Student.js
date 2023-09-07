import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Style.css'
function Student()
{
    const [data] =useState([
        {name:'Jai',age:'22',course:'Mern',Batch:'EA24',Change:'Edit', id:1},
        {name:'Era',age:'23',course:'Mern',Batch:'EA24',Change:'Edit', id:2},
        {name:'Rishi',age:'25',course:'Mern',Batch:'EA24',Change:'Edit', id:3},
        {name:'Veer',age:'23',course:'Mern',Batch:'EA24',Change:'Edit', id:4},
        {name:'Siya',age:'20',course:'Mern',Batch:'EA24',Change:'Edit', id:5},
        {name:'Ridhaansh',age:'18',course:'Mern',Batch:'EA24',Change:'Edit', id:6},
        {name:'Sam',age:'23',course:'Mern',Batch:'EA24',Change:'Edit', id:7},
        {name:'Arya',age:'22',course:'Mern',Batch:'EA24',Change:'Edit', id:8}
    ])
    
    const student={
        fontFamily:'Sofia, sans-serif'
    };
    const newstudent={
        fontFamily:'Sofia, sans-serif',
        
    };
    

    return(
        <>
            
            <p style={student} className='studentclass'>Student Details</p>
            <button style={newstudent} className='addnewstudent'>Add New Student</button>

            <table  >
                <thead>
                    <tr style={{fontFamily:"'Sofia, sans-serif'" ,fontSize:"30px"}} >
                        <th >Name</th>
                        <th>Age</th>
                        <th>course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((item,index)=>{
                    return(
                        <tr key={index} >
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.course}</td>
                            <td>{item.Batch}</td>
                            <td>
                            <Link to={'/user/:'+item.id} state={data}>{item.Change}</Link>    
                            </td>
                        </tr>
                        )
                })}
                        </tbody>
             
            </table>

        </>
    )
}
export default  Student