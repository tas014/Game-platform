import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* ------------------------------------------------------------ FOOTER ----------------------------------------------------------------- */


body{
  overflow-x:hidden;
  background-image: url('https://cdn.wallpapersafari.com/29/34/8Ak1Sf.png');
  background-size: contain;
}

/* --------------------------------------------------------- index ------------------------------------------------------------ */

main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height:80vh;
    padding:5em 0em;
    font-family: Inter;
    width:90%;
}

main div {
    width:100%;
    display: flex;
    justify-content: space-between;
}

section {
    display: flex;
    padding: 2%;
    box-shadow: 1em;
    border-radius: 1em;

}

section:nth-of-type(1):not(.gameSection) {
    flex-wrap: wrap;
    width:70%;
    justify-content: space-between;
    align-items: flex-start;
    background-color:rgba(0,0,0,0.8);
    color:white;
    box-shadow: 5px 10px 20px #292929;
    min-height: 80vh;
}

section:nth-of-type(2) {
    flex-direction: column;
    width:20%;
    overflow: hidden;
    justify-content: center;
    background-color:rgba(0,0,0,0.8);
    box-shadow: 5px 10px 20px #292929;
    color:white;
    text-align:center;
    align-content:flex-start;

}

section:nth-of-type(2) h1 {
    font-size:2em
}

section ul {
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    margin-top:10%;
    padding-bottom:50vh
}

section ul img {
    width: 3em;
}

section li {
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding:1em 1.5em;
    border-bottom-style:solid;
    border-bottom-color: white ;
    border-bottom-width: 0.01em ;
    align-items: center;
}

section:nth-of-type(2) img {
    border-radius: 50%;
    height:3em;
    width:3em
}

/* --------------------------------------------------- GAME SCREEN --------------------------------------------------------- */

.gameSection {
    width:70%;
    margin:0 auto;
    min-height: 80vh;
    background-color: rgba(0,0,0,0.8);
    flex-direction: column;
    align-items: center;
    color:white;
    font-size:2em
}

iframe {
    width:90%;
    min-height: 70vh;
    margin-top: 3%;
}

input {
    background-color:transparent;
    border-radius:0.5em;
    border-style:solid;
    border-color:rgba(255,255,255,0.7);
    border-width:0.4em;
    color:white;
}
`;




export default GlobalStyle;