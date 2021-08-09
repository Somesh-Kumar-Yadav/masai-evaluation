import React from "react"
import { Route, Switch } from "react-router-dom"
import { HomePage } from "../components/HomePage"
import { MovieDetail } from "../components/MovieDetail"
export function Routes() {
    return <>
        <Switch>
            <Route exact path='/'><HomePage/></Route>
            <Route path='/movie/:id'><MovieDetail/></Route>
        </Switch>

    </>
}