import styled from 'styled-components'

export const Container = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

h1 {
    height:10px
}

form {
    width:40%
}

form > div {
    display:flex
}

input {
    width: 100%;
min-height: 60px;
line-height: 34px;
border: 1px solid #ddd;
-webkit-appearance: none;
-moz-appearance: none;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
padding-left: 12px;
font-size: 17px;
margin: 0 0 10px 10%;
}

button {
    width: 100px;
    cursor: pointer;
    opacity: .8;
    background: #fff;
    background-color: rgb(255, 255, 255);
    border: 0;
    text-transform: uppercase;
    padding: 20px 10px !important;
    margin-top: 20px;
    color: #fff;
    background-color: #000;
    margin: 0 auto;
}

form button {
    margin-left:10%
}
.input_row {position:relative;}
.input_row div{position: absolute;
    top: 19px;
    right: 22px;
    color:#ff0000;
}
margin-top:40px;
width:100%;

.error_message{padding:20px; color:#ff0000;font-size:14px;}
`