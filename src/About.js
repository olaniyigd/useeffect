import styled from "styled-components";
import niyi from "../src/image/niyi.jpg";
import Nav from "./Nav";
import Footer from "./Footer"
export default function MyAbout (){
    return(
        <Wrapper>
            <Nav />
            <div className="about-content">
            <div className="about-body">
                <div className="left">
                    <img src = {niyi} alt="niyi" className="about-image" />
                </div>
                <div className="right">
                <p className="about-text"> My name is Faruq Olaniyi Gbadegesin, commonly known as Dakieo, i am a Nigerian and i am the founder of DakieoDev. I am an experienced web developer who adapt in all stages of advanced web development, knowledgeable in user interface, testing, and debugging processes.   </p>
                </div>
            </div>
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
.about-image{
    width: 350px;
    height: 350px;
    border-radius: 20px;
}
.about-body{
    width: 100%;
    display: flex;
    padding: 88px;
}
.about-content{
    width: 100%;
}
.about-text{
    text-align: justify;
    font-size: 25px;
    padding: 100px 30px;
}
@media screen and (max-width:900px) {
    .about-body{
        display: flex;
        flex-direction: column;
        padding: 0;
    }
    .about-image{
        width: 100%;
        padding: 15px;
    }
    .about-text{
    text-align: justify;
    font-size: 15px;
    padding: 0px 30px;
}
.about-content{
    width: 100%;
}
}
`