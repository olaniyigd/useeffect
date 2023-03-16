import styled from "styled-components"
import { Link } from "react-router-dom"
export default function Demo () {
    return(
        <Wrapper>
            <div className="demo">
            <div className="check-2">
                <p className="text-2">Kindly Click the button below to check where your CSS is having issues.</p>
                <Link to={'/check'}><button>Check Now!</button></Link>
            </div>
            <div className="dem">
                <h5>OR</h5>
                <p className="text-2">Watch demo on how to use this Software.</p>
                <Link to={'/watch'}><button>Watch Demo</button></Link>
            </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.demo{
    text-align: center;
    width: 100%;
    padding: 0px;
}
.text-2{
    font-size: 25px;
    padding: 0px;
}
h5{
    padding: 10px;
}
button{
    padding:5px 15px;
    background-color: red;
    cursor:pointer;
    border: 2px solid red;
    color:white;
    border-radius: 10px;
}
@media screen and (max-width:900px) {
    .demo{
    text-align: center;
    width: 100%;
}
.text-2{
    font-size: 20px;
    padding: 5px;
}
}
`