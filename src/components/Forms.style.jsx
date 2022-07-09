import styled, { css } from "styled-components";

export const FormButton = styled.button`
color: rgb(11, 212, 162);
background: #f7fffe;
cursor: pointer;
transition: all 0.3s ease;
padding: 0.65rem;
font-size: 2rem;
border: none;
background: white;

&:hover{
    background: rgb(11, 212, 162);
    color: white; 
}
`

export const FormDiv = styled.div`
  margin: 1rem;
  position: relative;
  overflow: hidden;
  ::after{
  content: '▼';
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  background: rgb(11, 212, 162);
  cursor: pointer;
  pointer-events: none;
  }
  `