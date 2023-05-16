import { useEffect } from "react";
import styled from "styled-components";
import classNames from "classnames";


function Avtoriz_main() {
    return(
        <StyledAvtoriz_main>
            {/* <h1>avtorization</h1> */}
            
            <div>
            <StyledAvtoriz_main_button1>
                <a href="">Клиент</a>
            </StyledAvtoriz_main_button1>
            <StyledAvtoriz_main_button2>
                <a href="">Автомойка</a>
            </StyledAvtoriz_main_button2>
            <StyledAvtoriz_main_h1>
                Вход
            </StyledAvtoriz_main_h1>
{/* 
            <StyledAvtoriz_main_input>
                className=tel
            </StyledAvtoriz_main_input> */}
            <StyledAvtoriz_main_button3>
                <a href="">войти</a>
            </StyledAvtoriz_main_button3>
            <StyledAvtoriz_main_button4>
               <a href="#!">регистрация</a> 
            </StyledAvtoriz_main_button4>
            
            </div>
            
        </StyledAvtoriz_main>
    );
}

export default Avtoriz_main



const StyledAvtoriz_main = styled.div`
margin-top: -5%;
display: flex;

max-width: 944px;
z-index: 1;
height: 669px; // make it auto
border-radius: 50px;
box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
background-color:#fff;

`;

const StyledAvtoriz_main_button1 = styled.button`
background-color:#99E6EB;
color : #FFFFFF;

padding: 32px 187px 32px 192px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 29px;
text-align: center;
border: 0;


`;

const StyledAvtoriz_main_button2 = styled.button`
background-color:#99E6EB;
color : #FFFFFF;

padding: 32px 164px 32px 168px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 29px;
text-align: center;
border: 0;


`;

const StyledAvtoriz_main_h1 = styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 39px;
/* identical to box height */

text-align: center;

margin-top: 54;
margin-bottom: 48;
color: #4DD79E;
`;

const StyledAvtoriz_main_input = styled.input`

`;


const StyledAvtoriz_main_button3 = styled.button`
color: #fff;
background-color: #4DD79E;

display: flex;
justify-content: center;
align-items: center;

padding: 15px 56px 17px 58px;
border-radius: 25px;
border: none;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
text-align: center;



`;

const StyledAvtoriz_main_button4 = styled.a`
color: #4DD79E;

justify-content: center;
`;