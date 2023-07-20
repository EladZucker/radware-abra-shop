import styled from "styled-components";

const Button = ({ children, className, ...props }) => {
  return (
    <StyledButtonWrapper {...props} className={className}>
      {children}
    </StyledButtonWrapper>
  );
};

const StyledButtonWrapper = styled.button`
  width: 100%;
  padding: 12px 0px;
  border: 1px solid #000;
  background: #fff;
  color: #000;
  font-family: Assistant;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.72px;
  text-transform: uppercase;

  :hover {
    background-color: #000;
    color: #fff;
  }

  :disabled {
    color: #fff;
    background-color: #808080;
    border: solid 1px #808080;
  }
`;

export default Button;
