import React from "react"
import AppBar from "@material-ui/core/AppBar"
import  Typography  from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card"
import { CardContent, makeStyles } from "@material-ui/core"
import FavoriteIcon from '@material-ui/icons/Favorite';
import { data } from "../data"
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
        cursor:"pointer"
    },
    image: {
        width: "200px",
        height: "200px"
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
        right:"1rem"
    }
})
export default function Home() {
    const classes = useStyles();
    const handleApply = (id) => {
        console.log(id);
    }
    return <>
        <Container maxWidth="xl" >
            <AppBar className={classes.cont}>
                <Typography variant="h4">My Booking.com</Typography>
            </AppBar>
        </Container>
        <Container className={classes.container}>
            {
                data.map((item) => {
                    return <Card key={item.id} onClick={()=>{handleApply(item.id)}} className={classes.cards}>
                <img className={classes.image}  src={item.url} alt="pic" />
                <CardContent className={classes.main}>
                    <Typography variant="p">
                        {item.subtitle}
                    </Typography>
                    <Typography variant="h6">
                        {item.title}
                    </Typography>
                    <Typography variant="p">
                        {item.feature}
                    </Typography>
                    <Typography calssName={classes.rating} variant="p">
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