import styled from "styled-components";

export const Nav = styled.div`
width:100vw;
height :80px;
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
&>input{
    outline: none;
    width: 400px;
    border-radius: 20px;
    height: 40px;
    padding: 10px;
    margin: 10px;
}
&>button{
    background-color: green;
    width: 100px;
    height: 40px;
    border: none;
    color:#fff;
  padding: 10px;
    margin: 10px;
    cursor: pointer;
    border-radius: 5px;
}
&>button:hover{
    background-color: orange;
}
`
export const Container = styled.div`
display: flex;
flex-direction: column;
&>div:nth-child(1){
    width: 100vw;
    display: flex;
    justify-content: space-around;
}
&>div:nth-child(1)>button{
     background-color: green;
    width: 200px;
    height: 40px;
    border: none;
    color:#fff;
  padding: 10px;
    margin: 10px;
    cursor: pointer;
    border-radius: 5px;
}
&>div:nth-child(1)>button:hover{
     background-color: orange;

}
`
export const Movies = styled.div`
display: flex;
`
export const Show = styled.div`

`
export const Card = styled.div`
display: flex;
width: 90%;
margin: 20px;
border: 1px solid black;
justify-content: center;
align-items: center;
padding: 5px;
border-radius: 20px;
height: 200px;
&>div>img{
width: 100px;
height: 130px;
margin: 0 20px;
}
`
export const Detail = styled.div`
display: flex;
width: 30vw;
flex-direction: column;
margin: 20px;
border: 1px solid black;
justify-content: center;
align-items: center;
padding: 5px;
border-radius: 20px;
&>div>img{
width: 100px;
height: 130px;
margin: 0 20px;
}
`