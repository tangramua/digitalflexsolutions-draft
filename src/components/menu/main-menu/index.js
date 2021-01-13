import React from 'react'
import PropTypes from 'prop-types'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import NavBar, { NavItem, NavLink, Submenu, Megamenu } from '../../ui/navbar'
import { MainMenuWrap } from './mainmenu.style'
import Heading from '../../ui/heading'

export const MainMenu = ({ headingStyle, menuData, ...props }) => {
    const menuarr = menuData;
    // console.log('menuData', menuarr)

    return (
        <MainMenuWrap {...props}>
            <NavBar>
                {menuarr.map(menu => {
                    const submenu = menu.navigationLinks ? menu.navigationLinks : null
                    const megamenu = null

                    // const megamenu =  menu.navigationLinks && menu.isMegaMenu ? menu.navigationLinks : null

                    return (
                        <NavItem key={`mainmenu-${menu.id}`} hasSubmenu={submenu} hasMegamenu={megamenu}>
                            <NavLink path={menu.mainLink.page.slug} hassubmenu={(submenu || megamenu) ? "true" : "false"}>
                                <span>{menu.mainLink.externalName}</span>
                                {(submenu || megamenu) && <MdKeyboardArrowDown className="icon" />}
                            </NavLink>
                            {submenu && (
                                <Submenu>
                                    {submenu.map((subitem, i) => {
                                        const hasSubmenuLevelTwo = !!subitem.navigationLinks;
                                        const submenuLevelTwo = subitem.navigationLinks  ? subitem.navigationLinks : null;

                                        const submenuLink = hasSubmenuLevelTwo ? subitem.mainLink.page.slug : subitem.page.slug
                                        const submenuText = hasSubmenuLevelTwo ? subitem.mainLink.externalName : subitem.externalName

                                        const submenuIndex = i;
                                        return (
                                            <NavItem key={`submenu-${menu.id}-${submenuIndex}`}>
                                                <NavLink path={submenuLink}>
                                                    <span>{submenuText}</span>
                                                    {hasSubmenuLevelTwo && <MdKeyboardArrowRight className="icon" />}
                                                </NavLink>
                                                {submenuLevelTwo && (
                                                    <Submenu>
                                                        {submenuLevelTwo.map((subitemLevelTwo, j) => {
                                                            const subsubmenuIndex = j;
                                                            return (
                                                                <NavItem key={`submenu-${menu.id}-${submenuIndex}-${subsubmenuIndex}`}>
                                                                    <NavLink path={subitemLevelTwo.page.slug}>{subitemLevelTwo.externalName}</NavLink>
                                                                </NavItem>
                                                            )
                                                        })}
                                                    </Submenu>
                                                )}
                                            </NavItem>
                                        )
                                    })}
                                </Submenu>
                            )}
                            {megamenu && (
                                <Megamenu>
                                    {megamenu.map((megaitem, i) => {
                                        const megaSubmenu = megaitem.submenu;
                                        const megaIndex = i;
                                        return (
                                            <NavItem key={`megamenu-${menu.id}-${megaIndex}`}>
                                                <Heading {...headingStyle}>{megaitem.externalName}</Heading>
                                                {megaSubmenu && (
                                                    <Submenu>
                                                        {megaSubmenu.map((megaSubitem, i) => {
                                                            return (
                                                                <NavItem key={`megasubmenu-${megaIndex}-${i}`}>
                                                                    <NavLink path={megaSubitem.page.slug}>
                                                                        <span>{megaSubitem.externalName}</span>
                                                                    </NavLink>
                                                                </NavItem>
                                                            )
                                                        })}
                                                    </Submenu>
                                                )}
                                            </NavItem>
                                        )
                                    })}
                                </Megamenu>
                            )}
                        </NavItem>
                    )
                })}
            </NavBar>
        </MainMenuWrap>
    )
}

MainMenu.propTypes = {
    alignment: PropTypes.string,
    headingStyle: PropTypes.object
}

MainMenu.defaultProps = {
    alignment: 'center',
    headingStyle: {
        fontSize: '14px',
        mb: '20px',
        texttransform: 'uppercase'
    }
} 