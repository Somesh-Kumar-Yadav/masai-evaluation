import React from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getMoviesData } from "../redux/actions";
import { Card, Container, Movies, Nav, Show } from "../styled-compoents/Styled-Components"
export function HomePage() {
    const [search, setSearch] = React.useState("");
    const [movie, setMovie] = React.useState("");
    const dispatch = useDispatch();
    React.useEffect(() => {
     dispatch(getMoviesData());   
    },[dispatch])
    const data = useSelector((state) => state.movies);
    console.log(data);
    if (movie === "") {
        setMovie(data[0]);
    }
    console.log(movie)
    const handleSearch = () => {
        const searchData = data.filter((e) => {
            return e.includes(search);
        })
        console.log(searchData);
            setSearch("");
    }
    return <>
        <Nav>
            <input type="text" value={search} placeholder="Search Movies" onChange={(e) => {
                setSearch(e.target.value);
            }} />
            <button onClick={handleSearch}>Search</button>
        </Nav>
        <Container>
            <div>
                <button>Sort by latest</button>
                <button>Sort by oldest</button>
            </div>
        </Container>
        <Movies>
            <div>
                {data.map((e) => {
                    return <Card>
                        <div>
                        <img src={e.url} alt=""/>
                        </div>
                        <div>
                        <h4><strong>Name : </strong>{e.title}</h4>
                        <p><strong> Rating : </strong>{e.rating}</p>
                        <p><strong>Description : </strong>{e.description}</p>

                        <p><strong>Cast : </strong><br/>{e.cast.map((et) => {
                            return <span>{ et}<br/> </span>
                        })}</p>
                        </div>
                    </Card>
                })}
            </div>
            <div>
                <Show>

                </Show>
            </div>
        </Movies>
    </>
}