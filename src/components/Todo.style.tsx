import {MouseEvent} from "react";
import styled, { css } from "styled-components";
import reactTextareaAutosize from "react-textarea-autosize";

interface buttonProps {
  completed?: boolean,
  edit?: boolean,
  editActive?: boolean,
  background?: string,
  complete?: boolean,
  onClick:React.MouseEventHandler<HTMLButtonElement> | MouseEvent,
}

export const Button = styled.button<buttonProps>`
  background: #f1d713;
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: white;
    color: #f1d713;
    transition: all 1s ease;
  }

  ${(props) =>
    props.complete &&
    css<buttonProps>`
      background: rgb(11, 212, 162);
      &:hover {
        color: rgb(11, 212, 162);
      }
    `}

  ${(props) =>
    props.edit &&
    css<buttonProps>`
      background: rgba(173, 173, 173, 0.867);
      &:hover {
        color: rgba(173, 173, 173, 0.867);
      }
    `}

    ${(props) =>
    props.editActive &&
    css<buttonProps>`
      background: red;
      &:hover {
        color: red;
      }
    `}
`;

export const TodoContainer = styled.div`
  margin: 0 0 1rem 0;
  font-size: 1rem;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & ul {
    min-width: 10%;
    list-style: none;
  }
`;

export const TodoForm = styled.form`
  all: unset;
  display: flex;
  justify-content: space-between;
  max-width: 95%;
  min-width: 95%;
`;

interface todoLiProps {
  completed?: boolean;
  background: string;
}

export const TodoLi = styled.li<todoLiProps>`
  min-width: 17em;
  max-width: 95%;
  background: white;
  flex: 1 1;
  padding: 0.2rem 0.5rem;
  color: ${(props) => props.background};
  ${(props) =>
    props.completed &&
    css<todoLiProps>`
      text-decoration: line-through;
      color: ${(props) => props.background};
    `}
`;

interface todoInputProps {
  completed?: boolean;
  background: string;
  autoFocus: boolean;
  value: string;
  onKeyDown:
    | React.KeyboardEventHandler<HTMLInputElement>
    | React.KeyboardEvent<HTMLInputElement>;
}

export const TodoInput = styled.input<todoInputProps>`
  min-width: 17rem;
  width: 100%;
  display: block;
  font-size: 1rem;
  padding: 0.2rem 0.5rem;
  font-family: "Poppins", sans-serif;
  border: none;
  box-sizing: border-box;
  color: ${(props) => props.background};

  ${(props) =>
    props.completed &&
    css<todoInputProps>`
      text-decoration: line-through;
      color: ${(props) => props.background};
    `}
`;
