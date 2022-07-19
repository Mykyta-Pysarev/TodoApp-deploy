import styled, { css, StyledComponent } from "styled-components";

interface Props {
  importButton:boolean,
  deleteAll:any,
}


export const FormButton = styled.button<Props>`
  color: rgb(11, 212, 162);
  background: #f7fffe;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem;
  font-size: 1.5rem;
  border: none;
  background: white;

  &:hover {
    background: rgb(11, 212, 162);
    color: white;
  }

  ${(props) =>
    props.importButton &&
    css`
      background: none;
      &:hover {
        background: none;
      }
    `}

  ${(props) =>
    props.deleteAll &&
    css`
      background: none;
      color: #f1d713;
      &:hover {
        background: none;
      }
    `}
`;

export const FormDiv = styled.div`
  margin: 1rem;
  position: relative;
  overflow: hidden;
  ::after {
    content: "▼";
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.6rem;
    background: rgb(11, 212, 162);
    cursor: pointer;
    pointer-events: none;
  }
`;
