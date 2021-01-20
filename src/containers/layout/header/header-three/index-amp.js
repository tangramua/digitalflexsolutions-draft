import React, { Fragment, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { MdPhone, MdPlace, MdSearch } from "react-icons/md";
import { Container, Row, Col } from "../../../../components/ui/wrapper";
// import Text from '../../../../components/ui/text'
// import Anchor from '../../../../components/ui/anchor'
import Logo from "../../../../components/logo";
import Clickable from "../../../../components/ui/clickable";
import { MainMenu, MobileMenu } from "../../../../components/menu";
import Flyout, {
  FlyoutHeader,
  FlyoutBody,
} from "../../../../components/ui/flyout";
import OffCanvas, {
  OffCanvasHeader,
  OffCanvasBody,
} from "../../../../components/ui/off-canvas";
import SearchForm from "../../../../components/forms/search-form/layout-three";
import CloseButton from "../../../../components/ui/close-button";
import BurgerButton from "../../../../components/ui/burger-button";
import {
  HeaderAmp,
  HeaderInnerAmp,
  BtnWrapper,
  HeaderElement,
} from "./header.style";

const Header = ({ props, ...styles }) => {
  const menuData = useStaticQuery(graphql`
    query MenuContentfulQueryAmp {
      allContentfulNavigation(filter: { codeId: { eq: "top-navigation" } }) {
        edges {
          node {
            id
            internalName
            navigationItems {
              externalName
              mainLink {
                externalName
                page {
                  externalName
                  slug
                }
              }
              navigationLinks {
                ... on ContentfulLink {
                  id
                  externalName
                  page {
                    externalName
                    slug
                  }
                }
                ... on ContentfulNavigationItem {
                  id
                  externalName
                  mainLink {
                    externalName
                    page {
                      externalName
                      slug
                    }
                  }
                  navigationLinks {
                    ... on ContentfulLink {
                      id
                      externalName
                      page {
                        externalName
                        slug
                      }
                    }
                  }
                }
              }
              id
              isMegaMenu
            }
          }
        }
      }
    }
  `);

  const {
    noticeStyle,
    phoneElStyle,
    searchElStyle,
    logoStyle,
    burgerBtnElStyle,
    transparent,
  } = styles;
  const menuArr =
    menuData.allContentfulNavigation.edges[0].node.navigationItems;

  return (
    <Fragment>
      <HeaderAmp>
        <HeaderInnerAmp>
          <Logo {...logoStyle} darkLogo={true} />
        </HeaderInnerAmp>
        <BtnWrapper>
          <Clickable className="search-btn">
            <MdSearch />
          </Clickable>

          <BurgerButton className="burger-btn" />
        </BtnWrapper>
      </HeaderAmp>
    </Fragment>
  );
};

Header.propTypes = {
  phoneElStyle: PropTypes.object,
};

Header.defaultProps = {
  noticeStyle: {
    fontSize: "14px",
    lineHeight: 1.78,
  },
  logoStyle: {
    pt: "14px",
    pb: "14px",
  },
  phoneElStyle: {
    mr: "20px",
  },
  searchElStyle: {
    pl: "50px",
  },
  burgerBtnElStyle: {
    pl: "25px",
  },
};

export default Header;
