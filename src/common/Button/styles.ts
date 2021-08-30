import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.color || "#E0FAF8"};
  color: ${(p) => (p.color ? "#2E186A" : "#006E72")};
  font-size: 1rem;
  font-weight: 800;
  width: 110%;
  border: 3aapx solid #000000;
  border-radius: 23px;
  padding: 8px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 280px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid rgb(255, 130, 92);
    background-color: rgb(255, 130, 92);
  }
`;
