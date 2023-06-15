import { ReactComponent as LogoIcon } from "../img/mobileLogo.svg";
import styled from "styled-components";

/* Footer 전체 영역 컴포넌트 */
export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #24262a;
  width: 100%;
`;
/* Footer 블록 */
export const FooterBlock = styled.div`
  width: 100%;
  max-width: 1264px;
  padding: 32px 12px 12px 12px;
`;
/* Flex 박스 */
export const FlexBox = styled.div`
  display: flex;
`;
/* Title */
export const Title = styled.h5`
  margin-bottom: 12px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  color: #babfc4;
`;

/* ColumnGap */
export const ColumnGap = styled(FlexBox)`
  column-gap: 12px;
  flex-wrap: wrap;
`;
/* JustifyEvenly */
export const JustifyEvenly = styled(FlexBox)`
  justify-content: space-evenly;
  flex-grow: 1;
`;
/* Logo */
export const Logo = styled.div`
  margin-bottom: 32px;
  svg {
    cursor: pointer;
  }
`;
/* AlignBetween */
export const AlignBetween = styled(FlexBox)`
  flex-direction: column;
  justify-content: space-between;
`;
/* Content */
export const Content = styled.div`
  padding-right: 12px;
  padding-bottom: 24px;
`;
/* Item */
export const Item = styled.li`
  padding: 4px 0;
  font-size: 13px;
  font-weight: 400;
  color: #9199a1;
  cursor: pointer;
`;
/* sns */
export const Sns = styled(Item)`
  font-size: 11px;
  &:not(:first-child) {
    margin-left: 12px;
  }
`;

export const TabletSnsBox = styled(FlexBox)`
  margin-bottom: 8px;
`;
/* License */
export const License = styled.p`
  margin-bottom: 24px;
  font-size: 11px;
  font-weight: 400;
  color: #9199a1;
`;

export const TabletLicense = styled(License)`
  margin-bottom: 0;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Logo>
        <LogoIcon />
      </Logo>
      <JustifyEvenly>
        <Content>
          <Title>Stack Overflow</Title>
          <ul>
            <Item>Questions</Item>
            <Item>Help</Item>
          </ul>
        </Content>
        <Content>
          <Title>Products</Title>
          <ul>
            <Item>Teams</Item>
            <Item>Advertising</Item>
            <Item>Collectives</Item>
            <Item>Talent</Item>
          </ul>
        </Content>
        <Content>
          <Title>Company</Title>
          <ul>
            <Item>About</Item>
            <Item>Press</Item>
            <Item>Work Here</Item>
            <Item>Legal</Item>
            <Item>Privacy PoItemcy</Item>
            <Item>Terms of Service</Item>
            <Item>Contact Us</Item>
            <Item>Cookie Settings</Item>
            <Item>Cookie PoItemcy</Item>
          </ul>
        </Content>
        <Content>
          <Title> Stack Exchange Network</Title>
          <ul>
            <Item>Technology</Item>
            <Item>Culture & recreation</Item>
            <Item>Itemfe & arts</Item>
            <Item>Science</Item>
            <Item>Professional</Item>
            <Item>Business</Item>
            <Item>API</Item>
            <Item>Data</Item>
          </ul>
        </Content>
      </JustifyEvenly>
      <AlignBetween>
        <FlexBox as={"ul"}>
          <Sns>Blog</Sns>
          <Sns>Facebook</Sns>
          <Sns>Twitter</Sns>
          <Sns>LinkedIn</Sns>
          <Sns>Instagram</Sns>
        </FlexBox>
        <License>
          Site design / logo © 2022 Stack Exchange Inc; user
          <br />
          contributions licensed under CC BY-SA.
          <br /> rev 2022.12.21.43127
        </License>
      </AlignBetween>
    </FooterWrapper>
  );
};

export default Footer;
