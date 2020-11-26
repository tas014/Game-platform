import styled from 'styled-components'

const Container = styled.div`
   display:flex;
    flex-direction:column;
    min-height: 40vh;
    margin-bottom:20%;

    h1 {
        font-size:3em
    }

    span,h1 {
        align-self:center;
        justify-self:center;
        color:white
    }
`

export default Container;