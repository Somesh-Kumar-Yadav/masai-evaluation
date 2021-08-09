import React from "react"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { CompleteDetail } from "../styled-compoents/Styled-Components";
export function ActorDetail() {
    const param = useParams();
    const data = useSelector((state) => state.movies);
    console.log(param.id);
    const mov = data.filter((e) => {
        console.log(e.id, param.id);
        return String(e.id) === param.id;
    })
    console.log(mov[0])
    return <div style={{display:"flex",justifyContent:"center",flexDirection:'column',alignItems:"center"}}>
        {
            mov.map((e) => {
                return <CompleteDetail>
                   <div>
                        <img src={e.url} alt=""/>
                        </div>
                        <div>
                        <h4><strong>Name : </strong>{e.title}</h4>
                        <p><strong> Rating : </strong>{e.rating}</p>
                        <p><strong> Release Year : </strong>{e.date}</p>
                        <p><strong>Description : </strong>{e.description}</p>
                        <p><strong>Director : </strong>{e.director}</p>
                        <p><strong>Writer : </strong>{e.writer}</p>
                        <p><strong>Cast : </strong><br/>{e.cast.map((et) => {
                            return <span>{ et}<br/> </span>
                        })}</p>
                        </div>
                </CompleteDetail>
            })
        }
    </div>
}