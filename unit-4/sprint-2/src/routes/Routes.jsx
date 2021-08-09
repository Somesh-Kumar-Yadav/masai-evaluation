import React from "react"
import { Route, Switch } from "react-router-dom"
import { ActorDetail } from "../components/ActorDetail"
import { HomePage } from "../components/HomePage"
import { MovieDetail } from "../components/MovieDetail"
export function Routes() {
    return <>
        <Switch>
            <Route exact path='/'><HomePage/></Route>
            <Route path='/movie/:id'><MovieDetail/></Route>
            <Route path='/actor/:name'><ActorDetail/></Route>
            <Route><h3>Page Not Found 404</h3></Route>
        </Switch>

    </>
}