import styled from "styled-components"
import image from "../src/image/image-1.jpg"

export default function Front(){
    return(
        <Wrapper>
            <div className="front">
            <h1>Hey! Are you having problems with CSS responsiveness?</h1>
            <p className="text">Stress No More! Here is the solution to ease your stress on how to target the right screen size for your media query.</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.front{
    background-image: url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 300px;
    justify-content: center;
    text-align: center;
    align-items: center;
}
h1{
    color: white;
    padding: 50px 50px;
    font-size: 35px;
}
.text{
    color: white;
    font-size: 20px;
    padding: 20px 50px;
}
@media screen and (max-width:900px) {
    .text{
    color: white;
    font-size: 15px;
    padding: 10px 10px;
}
h1{
    color: white;
    padding: 20px 50px;
    font-size: 35px;
}
}
`