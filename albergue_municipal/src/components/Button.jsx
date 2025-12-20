import { styled } from "styled-components";

import { useNavigate } from "react-router";

const StyledButton = styled.button`
  padding: 14px 28px;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.4px;

  color: #fdfdfd;
  background: linear-gradient(
    135deg,
    #2b2b2b 0%,
    #1a1a1a 100%
  );

  border: none;
  border-radius: 12px;
  cursor: pointer;

  box-shadow:
    0 10px 25px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 14px 32px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow:
      0 6px 16px rgba(0, 0, 0, 0.25);
  }

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 3px rgba(251, 206, 177, 0.7),
      0 10px 25px rgba(0, 0, 0, 0.25);
  }
`;

const Button = () => {
  const navigate = useNavigate();

  return (
    <StyledButton onClick={() => navigate("/access")}>Solicitar acceso</StyledButton>
  );
};

export default Button;
