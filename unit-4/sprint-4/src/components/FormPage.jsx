import React from "react"
import  Typography  from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card"
import { Button, CardContent, makeStyles, Modal, TextField } from "@material-ui/core"
import FavoriteIcon from '@material-ui/icons/Favorite';
import { data } from "../data"
import { useParams } from "react-router-dom"
import axios from "axios"
const useStyles = makeStyles({
    cont: {
        padding:"0.5rem"
    },
    model: {
        width: "500px",
        height:"500px"
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
       marginLeft:"10%"
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
        
    },
    form:{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        marginTop: "3rem",
    },
    margin: {
        margin :"10px"
    },
    paper: {
    position: 'absolute',
    width: "50vw",
    height:"50vw",
    border: '2px solid white',
    color:"white"
    
  },
})
export default function Form() {
    const [name,setName]=React.useState("")
    const [phone,setPhone]=React.useState("")
    const [dob,setDob]=React.useState("")
    const [start,setStart]=React.useState("")
    const [end,setEnd]=React.useState("")
    const {id} = useParams();
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );
    const handleSubmit = () => {
        const payload = {
            name,
            phone,dob,start,end,apply:data[id-1]
        }
        axios.post("http://localhost:3004/bookings",  payload );
    }
    return <>
        <Container className={classes.container}>
            <Card  className={classes.cards}>       
                        <img className={classes.image} src={data[id-1].url} alt="pic" />
                        
                <CardContent className={classes.main}>
                    <Typography >
                        {data[id-1].subtitle}
                    </Typography>
                    <Typography variant="h6">
                        {data[id-1].title}
                    </Typography>
                    <Typography >
                        {data[id-1].feature}
                    </Typography>
                    <Typography className={classes.rating} >
                         {data[id-1].rating} ({data[id-1].review}) 
                    </Typography>
                </CardContent>
                <CardContent className={classes.content}>
                    <FavoriteIcon className={classes.icons} />
                    <Typography className={classes.bottom} variant="h6">{data[id-1].price}</Typography>
                </CardContent>
             </Card>
        </Container>
        <Container className={classes.form}>
            <TextField onChange={(e)=>{setName(e.target.value)}} required  className={classes.margin} id="outlined-basic" label="Name" variant="outlined" />
            <TextField onChange={(e)=>{setPhone(e.target.value)}}  required type="number" className={classes.margin} id="outlined-basic" label="Phone Number" variant="outlined" />
            <TextField onChange={(e)=>{setDob(e.target.value)}} required  type="date" defaultValue="1998-05-24" className={classes.margin} id="outlined-basic" label="DOB" variant="outlined" />
            <TextField onChange={(e)=>{setStart(e.target.value)}} required  type="date" defaultValue="2021-08-23" className={classes.margin} id="outlined-basic" label="Start Date" variant="outlined" />
            <TextField onChange={(e)=>{setEnd(e.target.value)}} required  type="date" defaultValue="2021-08-24" className={classes.margin} id="outlined-basic" label="End Date" variant="outlined" />
            <Button onClick={handleOpen} className={classes.margin} variant="contained" color="primary">
                BOOK NOW
            </Button>
        </Container>
        <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
  {body}
</Modal>
    </>
} 