import styled, { css } from "styled-components";
import { fadeInDown } from "../../../../assets/css/animations";
import { device } from "../../../../theme";

export const HeaderTop = styled.div`
  background: #f8f8f8;
  @media ${device.medium} {
    display: none;
  }
`;

export const HeaderBottom = styled.div`
  position: relative;
`;

export const FixedHeader = styled.div`
  height: 110px;
  display: flex;
  align-items: center;
  position: absolute;
  background-color: #000;
  left: 0;
  top: 0;
  width: 100%;
  transition: ${(props) => props.theme.transition};
  z-index: 1;
  ${(props) =>
    props.isSticky &&
    css`
      background-color: #000;
      position: fixed;
      z-index: 999;
      box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
      animation: 0.95s ease-in-out 0s normal none 1 running ${fadeInDown};
      transition: ${(props) => props.theme.transition};
      .search-btn {
        svg {
          color: ${(props) => props.theme.colors.headingColor};
        }
      }
      .burger-btn {
        span {
          background-color: ${(props) => props.theme.colors.headingColor};
          &:before,
          &:after {
            background-color: ${(props) => props.theme.colors.headingColor};
          }
        }
      }
    `}
`;

export const FixedHeaderHeight = styled.div`
  height: ${(props) => props.height}px;
`;

export const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  align-content: space-between;
  ${(props) =>
    props.top &&
    css`
      height: 50px;
    `}
`;

export const HeaderCol = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  ${(props) =>
    props.left &&
    css`
      justify-content: flex-start;
      @media ${device.medium} {
        flex-basis: 20%;
      }
      @media ${device.small} {
        flex-basis: 50%;
      }
    `}
  ${(props) =>
    props.right &&
    css`
      justify-content: flex-end;
    `}
`;

export const HeaderNavigation = styled.div`
  @media ${device.large} {
    display: none;
  }
`;

export const HeaderElement = styled.div`
  margin-right: ${(props) => props.mr};
  padding-left: ${(props) => props.pl};
  ${(props) =>
    props.visibility &&
    css`
      display: ${(props) =>
        props.visibility.default === "true" ? "flex" : "none"};
      @media ${device.large} {
        display: ${(props) =>
          props.visibility.lg === "true" ? "flex" : "none"};
      }
      @media ${device.medium} {
        ${(props) =>
          props.visibility.md !== undefined &&
          css`
            display: ${(props) =>
              props.visibility.md === "true" ? "flex" : "none"};
          `}
      }
      @media ${device.small} {
        ${(props) =>
          props.visibility.sm !== undefined &&
          css`
            display: ${(props) =>
              props.visibility.sm === "true" ? "flex" : "none"};
          `}
      }
    `}
`;

export const HeaderInfoItem = styled.div`
  font-size: 14px;
  svg {
    font-size: 16px;
    margin-right: 6px;
    height: 17px;
    color: ${(props) => props.theme.colors.textColor};
  }
`;

export const HeaderWrap = styled.header`
  .search-btn {
    line-height: 0;
    font-size: 26px;
    &:hover {
      transition: ${(props) => props.theme.transition};
      transform: scale(1.15, 1.15);
    }
  }
  ${(props) =>
    props.transparent &&
    css`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      z-index: 3;
      ${HeaderTop} {
        background: transparent;
        border-bottom: 1px solid #fff;
      }
      ${FixedHeader} {
        background: transparent;
      }
      ${HeaderInfoItem} {
        strong,
        svg,
        span {
          color: #fff;
        }
      }
      .search-btn {
        svg {
          color: #fff;
        }
      }
      .burger-btn {
        span {
          background-color: #fff;
          &:before,
          &:after {
            background-color: #fff;
          }
        }
      }
    `}
`;
// ******* AMP STYLES ********

export const HeaderAmp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  min-height: 110px;
  width: 100%;
`;

export const HeaderInnerAmp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 100%;
`;

export const BtnWrapper = styled.div`
  display: flex;
  .search-btn {
    margin-right: 25px;
    line-height: 0;
    font-size: 26px;
    &:hover {
      transition: ${(props) => props.theme.transition};
      transform: scale(1.15, 1.15);
    }
    svg {
      color: ${(props) => props.theme.colors.headingColor};
    }
  }
`;
