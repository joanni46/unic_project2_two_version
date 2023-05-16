import styled from "styled-components";

export default function Header({}) {
    return (
      <StyledHeader>
        <StyledNav>
          <StyledNavBit>
            <div></div>
           <a href="#!"> <StyledMqueen src="src\imgs\mqueen.svg" alt="Mqueen" /></a>
          </StyledNavBit>
        </StyledNav>
      </StyledHeader>
    );
  }

  const StyledHeader = styled.header`
  padding-top: 100px;
  padding-bottom: 150px;
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25); // make to var
  width: 100%;
  background-color: #99e6eb;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMqueen = styled.img`
  width: 125px;
`;
// фон шапки
const StyledNavBit = styled.div`
  margin: 50px;
  display: flex;
  align-items: center;
  gap: 30px;
`;















