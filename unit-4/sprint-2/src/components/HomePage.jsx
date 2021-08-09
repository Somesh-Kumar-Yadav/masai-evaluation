import React from "react"
import { useDispatch } from "react-redux";
import { getMoviesData } from "../redux/actions";
import { Nav } from "../styled-compoents/Nav"
export function HomePage() {
    const [search, setSearch] = React.useState("");
    const dispatch = useDispatch();
    const handleSearch = () => {
        dispatch(getMoviesData);
    }
    return <>
        <Nav>
            <input type="text" value={search} placeholder="Search Movies" onChange={(e) => {
                setSearch(e.target.value);
            }} />
            <button onClick={handleSearch}>Search</button>
    </Nav>
    </>
}