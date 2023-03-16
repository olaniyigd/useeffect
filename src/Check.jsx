import { useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import styled from "styled-components"

export default function Check(){

    let [ds, setDs] = useState(window.innerWidth);
    window.addEventListener("resize", ()=>{
        let width = window.innerWidth;
        let height = window.innerHeight;
        setDs(`${width}px Width and ${height}px Height!`)
    })
    return(
            <Wrapper>
            <Nav/>
                <div className="div">
                    <h2 className="context">Your Css is having issue at {ds} px</h2>
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
    .div{
        width: 100%;
    }
    .context{
        text-align: center;
        padding: 254px 50px;
    }
    @media screen and (max-width:900px) {
        .context{
        text-align: center;
    }
    Footer{
        position: absolute;
        bottom: 0;
    }
    }
`