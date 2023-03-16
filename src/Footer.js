import styled from "styled-components"
export default function Footer (){
    return(
        <Wrapper>
            <div className="footer">
            <h6>Copyright 2023 All Rights Reserved. Developed by DakieoDev. </h6>
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
.footer{
    background-color: rgb(11, 11, 73);
    width: 100%;
    height: 50px;
    text-align: center;
    position: absolute;
    bottom: 0;
}
h6{
    color: white;
    font-size: 15px;
    padding: 10px 10px;
}
@media screen and (max-width:900px){
    .footer{
    background-color: rgb(11, 11, 73);
    width: 100%;
    height: 55px;
    text-align: center;
    position: absolute;
    bottom: 0;
}
}
`