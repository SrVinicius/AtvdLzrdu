import styled, {css} from "styled-components";
import {LinkProps} from "../interfaces/Link.interfaces";

const SizeVariations ={
    default: css`
        height: 35px;
        width: 150px;
        font-size: 16px;
    `
}
const ColorVariations ={
    default: css`
        background: var(--main);
        color: var(--white);
        &.hover {
            background: var(--main-hover);
        }
    `
}
const Link = styled.a<LinkProps>`
    transition: background-color 0.15s ease;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-ou, box-shadow 0.15s ease-in-out;

    padding: 6px;
    font-weight: 700;

    text-decoration: none;
    display: flex;
    align-itens: center;
    margin: 0 10px;
    color: var(--black);

    border: 0;
    border-radius: 5px;
    cursor: pointer;

    ${(props) => SizeVariations[props.size || "default"]}
    ${(props) => ColorVariations[props.bgColor || "default"]}

    &:focus {
        outline: none;
    }
`

export default Link;