import React from "react"
import AppBar from "@material-ui/core/AppBar"
import  Typography  from "@material-ui/core/Typography"
import  Box  from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core"
const useStyles = makeStyles({
    cont: {
        padding:"0.5rem"
    },
    container: {
        marginTop:"4rem"
    },
})
export default function Home() {
    const classes = useStyles();
    return <>
        <Container maxWidth="xl" >
            <AppBar className={classes.cont}>
                <Typography variant="h4">My Booking.com</Typography>
            </AppBar>
        </Container>
        <Container className={classes.container}>
            
        </Container>
    </>
}