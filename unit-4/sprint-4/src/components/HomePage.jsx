import React from "react"
import AppBar from "@material-ui/core/AppBar"
import  Typography  from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card"
import { CardContent, makeStyles } from "@material-ui/core"
import FavoriteIcon from '@material-ui/icons/Favorite';
import { data } from "../data"
import { Link } from "react-router-dom"
const useStyles = makeStyles({
    cont: {
        padding:"0.5rem"
    },
    container: {
        marginTop:"4rem"
    },
    cards: {
        marginTop: "1rem",
        width: "80%",
        height: "200px",
        display: "flex",
        justifyContent: "space-between",
       
    },
    image: {
        width: "200px",
        height: "200px",
        cursor:"pointer"
    },
    content: {
        display: "flex",
        flexDirection:"column",
        justifyContent: "space-between",
        position: "relative",
        height: "100%"
    },
    icons: {
        position: "absolute",
        right:"2rem"
    },
    main: {
        display: "flex",
        flexDirection:"column",
        position: "relative",
        right: "5rem",
        height: "100%"
    },
    bottom: {
        fontSize: "16px",
        color: "gray",
        position: "absolute",
        bottom: "10px",
        right:"1rem"
    },
    rating: {
        fontSize: "16px",
        color: "gray",
        position: "absolute",
        bottom: "10px",
        
    }
})
export default function Home() {
    const classes = useStyles();
    
    
    return <>
        
        <Container className={classes.container}>
            {
                data.map((item) => {
                    return <Card key={item.id}  className={classes.cards}>
                        <Link to={`/apply/${item.id}`}>
                        <img className={classes.image} src={item.url} alt="pic" />
                        </Link>
                <CardContent className={classes.main}>
                    <Typography >
                        {item.subtitle}
                    </Typography>
                    <Typography variant="h6">
                        {item.title}
                    </Typography>
                    <Typography >
                        {item.feature}
                    </Typography>
                    <Typography className={classes.rating} >
                         {item.rating} ({item.review}) 
                    </Typography>
                </CardContent>
                <CardContent className={classes.content}>
                    <FavoriteIcon className={classes.icons} />
                    <Typography className={classes.bottom} variant="h6">{item.price}</Typography>
                </CardContent>
             </Card>
                })
            }
        </Container>
    </>
}