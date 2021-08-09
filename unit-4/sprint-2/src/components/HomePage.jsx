import React from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getActorsData, getMoviesData } from "../redux/actions";
import { Card, Container, Detail, Movies, Nav, Show } from "../styled-compoents/Styled-Components"
export function HomePage() {
    const [search, setSearch] = React.useState("");
    const [movie, setMovie] = React.useState([]);
    const [value, setValue] = React.useState(true);
    const [list, setList] = React.useState([]);
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
    const handleSortUp = () => {
        const up = data.sort((a, b) => {
            return Number(b.date) - Number(a.date);
        })
        setList([...up])
        setValue(false);
    }
    const handleSortDown = () => {
        const down = data.sort((a, b) => {
            return Number(a.date) - Number(b.date);
        })
        setList([...down])
        setValue(false);
    }
    const handlePage = (num) => {
        console.log(num);
        const shortList = data.filter((e) => {
            return (e.id >= 10*num-9 && e.id <= num * 10);
        })
        console.log(shortList)
        setList([...shortList])
        setValue(false);
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
                <button onClick={handleSortUp}>Sort by latest</button>
                <button onClick={handleSortDown}>Sort by oldest</button>
            </div>
        </Container>
        <Container>
            <div>
                <button onClick={()=>{handlePage(1)}}>Previous</button>
                <button onClick={()=>{handlePage(2)}}>Next</button>
            </div>
        </Container>
        <Movies>
            <div>
                {value?data.map((e) => {
                    return <Card key={e.id}>
                        <div>
                        <img src={e.url} alt=""/>
                        </div>
                        <div>
                        <h4><Link to={`/movie/${e.id}`}><strong>Name : </strong>{e.title}</Link></h4>
                        <p><strong> Rating : </strong>{e.rating}</p>
                        <p><strong> Release : </strong>{e.date}</p>
                        <p><strong>Description : </strong>{e.description}</p>

                        <p><strong>Cast : </strong><br/>{e.cast.map((et) => {
                            return <span><Link to={"/actor/" + et}>{ et}</Link><br/> </span>
                        })}</p>
                        </div>
                    </Card>         
                }):list.map((e) => {
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
                    }) :<div style={{padding:"5px",border:"1px solid black",borderRadius:"10px",marginRight:"10px"}}><h5>Searched Movies is shown here</h5>
                            </div>
                    }
                </Show>
            </div>
        </Movies>
        
    </>
}