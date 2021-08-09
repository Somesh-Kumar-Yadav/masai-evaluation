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
}
`