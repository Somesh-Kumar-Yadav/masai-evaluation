import React from "react"
import AppBar from "@material-ui/core/AppBar"
import  Typography  from "@material-ui/core/Typography"
import  Box  from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card"
import { CardContent, CardMedia, makeStyles } from "@material-ui/core"
import FavoriteIcon from '@material-ui/icons/Favorite';
import {StarIcon} from "@material-ui/icons"
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
    return <>
        <Container maxWidth="xl" >
            <AppBar className={classes.cont}>
                <Typography variant="h4">My Booking.com</Typography>
            </AppBar>
        </Container>
        <Container className={classes.container}>
            <Card className={classes.cards}>
                <img className={classes.image} src="https://picsum.photos/200" alt="pic" />
                <CardContent className={classes.main}>
                    <Typography variant="p">
                        Farm Stay in Srirangapatna
                    </Typography>
                    <Typography variant="h6">
                        Rusting Nest - Farm Stay for Cycling weekend.
                    </Typography>
                    <Typography variant="p">
                        4 guests , 2 bedroom , 3 beds , 3 bathrooms
                    </Typography>
                    <Typography calssName={classes.rating} variant="p">
                        <StarIcon></StarIcon> 4.8 (43 reviews) 
                    </Typography>
                </CardContent>
                <CardContent className={classes.content}>
                    <FavoriteIcon className={classes.icons} />
                    <Typography className={classes.bottom} variant="h6">2900INR/night</Typography>
                </CardContent>
             </Card>
            <Card className={classes.cards}>
                <img className={classes.image} src="https://picsum.photos/201" alt="pic"/>
             </Card>
            <Card className={classes.cards}>
                <img className={classes.image} src="https://picsum.photos/202" alt="pic"/>
             </Card>
            <Card className={classes.cards}>
                <img className={classes.image} src="https://picsum.photos/203" alt="pic"/>
             </Card>
            <Card className={classes.cards}>
                <img className={classes.image} src="https://picsum.photos/204" alt="pic"/>
             </Card>
            <Card className={classes.cards}>
                <img src="https://picsum.photos/205" alt="pic"/>
             </Card>
        </Container>
    </>
}