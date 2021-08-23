import { makeStyles } from "@material-ui/core";
import React from "react"
import { Route, Switch } from "react-router"
import Home from "../components/HomePage"
import AppBar from "@material-ui/core/AppBar"
import  Typography  from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Form from "../components/FormPage";

const useStyles = makeStyles({
    cont: {
        padding: "0.5rem"
    },
})
export default function Routes() {
    const classes = useStyles();
    return <>
        <Container maxWidth="xl" >
            <AppBar className={classes.cont}>
                <Typography variant="h4">My Booking.com</Typography>
            </AppBar>
        </Container>
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/apply/:id"><Form/></Route>
    </Switch>
    </>
}