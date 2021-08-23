import { makeStyles } from "@material-ui/core";
import React from "react"
import { useParams } from "react-router-dom"
import  Typography  from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import { data } from "../data"
const useStyles = makeStyles({
    
    container: {
        marginTop:"4rem"
    }
})
export default function Form() {
    const params = useParams();
    const classes = useStyles();
    console.log(params.id)
    return <>
        <Container className={classes.container}>
            { params.id}
        </Container>
    </>
} 