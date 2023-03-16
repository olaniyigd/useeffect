import styled from "styled-components";
import Nav from './Nav';
import Footer from "./Footer";

export default function Watch (){
    return(
        <Wrapper>
            <Nav />
            <div className="dem">
            <p className="dem-text">You are welcome to this great adventure.</p>
            <p className="dem-text-1">Having issue with CSS media query can be frustrating, Therefore, to know and understand how it works, kindly Click on the below link for Demo.</p>
            <p className="dem-link" to={"https://...."}>Click here to watch demo tutorial</p>
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

    .dem{
        text-align: center;
        padding: 100px;
    }
    .dem-text{
        font-size: 35px;
    }
    .dem-text-1{
        font-size: 20px;
        margin-bottom: 15px;

    }
    @media screen and (max-width:900px) {
        .dem{
        text-align: center;
        padding: 130px 10px;
    }
    .dem-text-1{
        font-size: 15px;
        margin-bottom: 10px;
    }
    }
`