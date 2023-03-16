import styled from "styled-components"
import dakieo from "../src/image/dakieo.jpeg"
import { Link } from "react-router-dom"; 
import { FiMenu } from "react-icons/fi";

export default function Nav () {
    function toggleSwitch(){
        let mobileNav = document.querySelector(".mobile-nav");
        mobileNav.classList.toggle("show")
    }
    return(
        <Wrapper>
                <nav className="desktop-nav">
                    <Link to={'/'}>
                    <img src={dakieo} alt="dakieo" className="logo" />
                    </Link>
                    <ul>
                        <Link to={'/about'}><li>About Me</li></Link>
                        <Link to={'/coffee'}><li>Buy Me Coffee</li></Link>
                    </ul>
                    <button className="btn1" onClick={toggleSwitch}> <FiMenu/> </button>
                </nav>
                <ul className="mobile-nav">
                         <Link to={'/about'}><li>About Me</li></Link>
                        <Link to={'/coffee'}><li>Buy Me Coffee</li></Link>
                    </ul>
        </Wrapper>
    )
}


const Wrapper = styled.nav`
.logo{
    height: 50px;
    width: 50px;
    border-radius: 100px;
    cursor: pointer;
}
a{
    text-decoration: none;
}
.desktop-nav{
    background-color: rgb(11, 11, 73);
    display:flex;
    justify-content: space-around;
    align-items: center;
    height: 10vh;
    width:100%;
}
.desktop-nav ul{
    display:flex;
    gap:50px;
    font-size: 20px;
    list-style-type: none;
}
.desktop-nav ul li{
    color:white;
    font-weight: 400;
    margin: 0 25px;
    cursor: pointer;
}
.desktop-nav ul li:hover{
    color: red;
    transition:0.9s;
}
.btn1{
    padding:10px;
    cursor: pointer;
    display:none;
    background-color: red;
    border:5px solid blue;
    color:white;
}
.mobile-nav{
    display: none;
}
.mobile-nav li{
    color:white;
    cursor: pointer;
}
.mobile-nav li:hover{
    color:red;
    transition: 0.9s;
}

@media screen and (max-width: 900px){
    .logo{
        height: 50px;
        width:50px;
        margin-left: 10px;
        cursor: pointer;
        border-radius: 100px;
    }
    a{
    text-decoration: none;
}
    .desktop-nav{
        display:flex;
        justify-content:space-between;
        align-items: center;
        background-color: rgb(11, 11, 73);
        height: 10vh;
        width:100%;
    }
    .desktop-nav ul li{
        display:none;
    }
    .btn1{
        padding:5px 15px;
        margin-right: 10px;
        cursor: pointer;
        display:block;
        background-color: white;
        border:1px solid white;
        border-radius: 10px;
        color:black;
    }
    .mobile-nav{
        display:flex;
        flex-direction: column; 
        justify-content: center;
        align-items: center;
        list-style-type: none;
        background-color: rgb(11, 11, 73);
        gap: 0px;
        width: 100%;
        height: 0;
        transition:ease-in-out .9s;
        overflow: hidden;
        padding: 0;
        margin: 0;
    }
    .mobile-nav li{
        color:white;
        cursor: pointer;
        margin-top: 10px;
    }
    .show{
        height: 100px;
    }
}
`
