import styled from 'styled-components';


export const Container = styled.article`
    width:20%;
    height:30vh;
    overflow: hidden;
    text-align: center;
    padding:0.5em;
    background-color: rgba(17, 148, 98, 0.4);
    box-shadow: 2px 5px 10px #292929;
    border-radius:0.5em;
    transition: width 0.5s, height 0.5s;

    div {
        position:relative;
        height:25vh
    }

    div label {
        position:absolute;
        left:1%;
        top:4%;
        background-color: rgba(0,0,0,0.8);
        padding:0.4em 1em;
        border-radius: 1em;
        font-size:1.3em
    }
    img {
        width:100%;
        object-fit: cover;
        height:25vh;
        border-radius: 1em;
    }
    h1 {
        margin-top:8%;
        transition: color 0.5s, font-size 0.2s 
    }

    :hover {
        width:21%;
        height:32vh;
        cursor:pointer;
        background-color:rgba(255,255,255,0.8);
        
        h1 {
            font-size:1.5em;
            color:black;
        }
    }
`;