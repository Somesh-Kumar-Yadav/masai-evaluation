import React from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getActorsData, getMoviesData } from "../redux/actions";
import { Card, Container, Detail, Movies, Nav, Show } from "../styled-compoents/Styled-Components"
export function HomePage() {
    const [search, setSearch] = React.useState("");
    const [movie, setMovie] = React.useState([]);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getMoviesData());
        dispatch(getActorsData());
    },[dispatch])
    let data = useSelector((state) => state.movies);
    console.log(data);
    const handleSearch = () => {
        const searchData = data.filter((e) => {
            return e.title.toLowerCase().includes(search.toLowerCase());
        })
        setMovie([searchData[0]]);
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
                    return <Card key={e.id}>
                        <div>
                        <img src={e.url} alt=""/>
                        </div>
                        <div>
                        <h4><Link to={`/movie/${e.id}`}><strong>Name : </strong>{e.title}</Link></h4>
                        <p><strong> Rating : </strong>{e.rating}</p>
                        <p><strong>Description : </strong>{e.description}</p>

                        <p><strong>Cast : </strong><br/>{e.cast.map((et) => {
                            return <span><Link to={"/actor/" + et}>{ et}</Link><br/> </span>
                        })}</p>
                        </div>
                    </Card>         
                })}
            </div>
            <div>
                <Show>
                    {movie[0]? movie.map((e) => {
                            return <Detail>
                               <div>
                        <img src={e.url} alt=""/>
                        </div>
                        <div>
                        <h4><Link to={`/movie/${e.id}`}><strong>Name : </strong>{e.title}</Link></h4>
                        <p><strong> Rating : </strong>{e.rating}</p>
                        <p><strong>Description : </strong>{e.description}</p>

                        <p><strong>Cast : </strong><br/>{e.cast.map((et) => {
                            return <span><Link to={"/actor/" + et}>{ et}</Link><br/> </span>
                        })}</p>
                        </div>     
                            </Detail>
                        }):<h5>Searched Movies is shown here</h5>
                    }
                </Show>
            </div>
        </Movies>
    </>
}