import styled, { css } from "styled-components";

export const Button = styled.button`
        background: #f1d713;
        color: white;
        border: none;
        padding: 0.5rem;
        cursor: pointer;
        font-size: 1rem;

        &:hover{
                background: white;
                color: #f1d713;
                transition: all 1s ease;
        }

        ${props => props.complete && css`
        background: rgb(11, 212, 162);
        &:hover{
                color:rgb(11, 212, 162);
        }
        `}

        ${props => props.edit && css`
        background: rgba(173, 173, 173, 0.867);
        &:hover{
                color:rgba(173, 173, 173, 0.867);
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
            all:unset;
            display: flex;
            justify-content: space-between;
            max-width: 95%;
            min-width: 95%;
    `;

export const TodoLi = styled.li`
            background: white;
            flex:1 1;
            padding: 0.2rem 0.5rem;
            color:${props => props.background};
            ${props => props.completed && css`
            text-decoration: line-through;
            color:${props => props.background};
            `}
    `;

export const TodoInput = styled.input`
            font-size: 1rem;
            padding: 0.2rem 0.5rem;
            font-family: "Poppins", sans-serif;
            border: none;
            box-sizing: border-box;
            min-width: calc(100% - 6rem + 2px);
            color: ${props => props.background};

            ${props => props.completed && css`
            color: ${props => props.background};
            `}
    `;