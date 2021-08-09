import React from "react"
import { Nav } from "../styled-compoents/Nav"
export function HomePage() {
    const [search, setSearch] = React.useState("");
    return <>
        <Nav>
            <input type="text" value={search} placeholder="Search Movies" onChange={(e) => {
                setSearch(e.target.value);
            }} />
            <button>Search</button>
    </Nav>
    </>
}