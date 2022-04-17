import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  max-width: 576px;
  h2 {
    font-size: 1.5rem;
    color: var(--text-color-title);
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    margin-top: 1rem;
    color: #fff;
    border: 0;
    border-radius: 0.25rem;
    transition: filter 0.2s;
    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContaiber = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;
const colors = {
  deposit: "#33cc95",
  withdraw: "#e62e4d",
};

interface RadioBoxProps {
  isActive: boolean;
  typeColor: "deposit" | "withdraw";
}
export const RadioBox = styled.button<RadioBoxProps>`
  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.typeColor])
      : "trasparent"};
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color 0.2s;

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }
`;
