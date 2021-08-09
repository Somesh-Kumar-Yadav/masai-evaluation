import React from "react"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { CompleteDetail } from "../styled-compoents/Styled-Components";
export function ActorDetail() {
    const actor = useParams();
    const data = useSelector((state) => state.actors);
    console.log(actor, data);
   return <></>
}