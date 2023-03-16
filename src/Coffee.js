import styled from "styled-components"
import { Link } from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer"
export default function Coffee(){
    return(
        <Wrapper>
            <Nav />
            <div className="cof">
                <p className="coftext-1">Hey! You wish to buy me a coffee?</p>
                <p className="coftext">Kindly slide into my DM to ask for my bank account through the link below <Link to={"https://wa.me/+2348107265575"}>Buy Me Coffee Now!</Link></p>
            </div>
            <Footer/>
        </Wrapper>
    )
}
const Wrapper = styled.div`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.coftext-1{
    font-size: 30px;
}
a{
    text-decoration: none;
}
.cof{
    text-align: center;
    padding: 20px 50px;
}
@media screen and (max-width:900px) {
    a{
    text-decoration: none;
}
.cof{
    text-align: center;
    padding: 50px 50px;
}
}
`