import React from "react"
import  Typography  from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card"
import { Button, CardContent, makeStyles, Modal, TextField } from "@material-ui/core"
import FavoriteIcon from '@material-ui/icons/Favorite';
import { data } from "../data"
import { useParams } from "react-router-dom"
import axios from "axios"
import useNotification from "../hooks/useNotification"
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
    height: "30vh",
    marginTop: "35vh",
    marginLeft: "25vw",
    border: '2px solid white',
    color: "white",
        borderRadius: "20px",
        display: "flex",
    flexDirection: "column",
        justifyContent: "center",
    alignItems:"Center"
  },
})
export default function Form() {
    const [name,setName]=React.useState("User")
    const [phone,setPhone]=React.useState("9087654321")
    const [dob,setDob]=React.useState("1998-05-24")
    const [start,setStart]=React.useState("2021-08-23")
    const [end,setEnd]=React.useState("2021-08-24")
    const {id} = useParams();
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);
    const [success,setNotification] = useNotification();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
const handleSubmit = () => {
        const payload = {
            name,
            phone,dob,start,end,apply:data[id-1]
        }
    axios.post("http://localhost:3004/bookings", payload);
    setNotification()
    handleClose();
    }
  const body = (
    <div className={classes.paper}>
          <Typography variant="h2">Are You Sure ? </Typography>
          <div>
              <Button onClick={handleSubmit} className={classes.margin} variant="contained" color="primary">
                YES
              </Button>
              <Button onClick={handleClose} className={classes.margin} variant="contained" color="secondary">
                NO
            </Button>
          </div>
    </div>
  );
  const notBody = (
    <div className={classes.paper}>
       <Typography variant="h4">Success</Typography>        
          <Typography variant="h6">You have successfully applied for {data[id - 1].title} from {start} to {end }</Typography>
    </div>
  );
    
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
            <TextField value={name} onChange={(e)=>{setName(e.target.value)}} required  className={classes.margin} id="outlined-basic" label="Name" variant="outlined" />
            <TextField value={phone} onChange={(e)=>{setPhone(e.target.value)}}  required type="number" className={classes.margin} id="outlined-basic" label="Phone Number" variant="outlined" />
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
        <Modal
  open={success}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
  {notBody}
</Modal>
    </>
} 