import styled from 'styled-components';

export const Container = styled.header`
    width: 90%;
    box-sizing:content-box;
    padding: 0 10%;
    height: 100px;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:#010001;
    color:white;

    .logo {
        height: 1.2em;
    }

    img {
        margin-left: 0.5rem;
        width:3em;
        height:3em;
    }
    a {
        color: inherit;
        text-decoration: none;
        font-size:1.4em;
        font-family:Roboto
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;