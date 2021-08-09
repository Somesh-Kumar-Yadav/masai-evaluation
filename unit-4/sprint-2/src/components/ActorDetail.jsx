import React from "react"
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { CompleteDetail } from "../styled-compoents/Styled-Components";
export function ActorDetail() {
    const param = useParams();
    const data = useSelector((state) => state.actors);
    const mov = data.filter((e) => {
        console.log(e.name, param.name);
        return String(e.name) === param.name;
    })
    console.log(mov);
    
    return <div style={{display:"flex",justifyContent:"center",flexDirection:'column',alignItems:"center"}}>
       
        <Link to="/">
        Back to Home
        </Link>
        {
            mov.map((e) => {
                return <CompleteDetail>
                   <div>
                        <img src={e.url} alt=""/>
                        </div>
                        <div>
                        <h4><strong>Name : </strong>{e.name}</h4>
                        <p><strong>Age : </strong>{e.age} years</p>
                        <p><strong> Information : </strong>{e.description}</p>
                        </div>
                </CompleteDetail>
            })
        }
    </div>
}