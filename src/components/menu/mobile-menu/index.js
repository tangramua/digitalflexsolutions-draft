import React from 'react'
import NavBar, { NavItem, NavLink, Submenu, Megamenu, ExpandButton } from '../../ui/navbar'
import Heading from '../../ui/heading'
import { getClosest, getSiblings } from '../../../utils/utilFunctions'
import { MobileMenuWrap } from './mobilemenu.style'

export const MobileMenu = ({ menuData, headingStyle }) => {

    const removeClassFromChildren = (parent) => {
        for (let i = 0; i < parent.children.length; i++) {
            if (parent.children[i].tagName === 'UL') {
                let child = parent.children[i].children;
                for (let j = 0; j < child.length; j++) {
                    child[j].classList.remove('submenu-open')
                }
            }
        }
    }

    const onClickHandler = (e, selector) => {
        const target = e.target;
        const parentEl = target.parentElement;
        if (parentEl.classList.contains('menu-expand') || target.classList.contains('menu-expand')) {
            let element = target.classList.contains('icon') ? parentEl : target;
            const parent = getClosest(element, selector);
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach(sibling => {
                sibling.classList.remove('submenu-open');
                removeClassFromChildren(sibling);
            });
            removeClassFromChildren(parent)
            parent.classList.toggle('submenu-open');
        }
    }

    const menuarr = menuData;
    return (
        <MobileMenuWrap>
            <NavBar>
                {menuarr.map((menu, i) => {
                    const submenu = menu.navigationLinks ? menu.navigationLinks : null
                    const megamenu =  null;

                    const menuIndex = i;
                    return (
                        <NavItem
                            key={`mainmenu-${menu.id}`}
                            hasSubmenu={submenu}
                            hasMegamenu={megamenu}
                            className="menu-item"
                            id={`menu-item-${menuIndex}`}>

                            <NavLink path={menu.mainLink.page.slug}>{menu.mainLink.externalName}</NavLink>
                            {(submenu || megamenu) && (
                                <ExpandButton onClick={(e) => onClickHandler(e, `#menu-item-${menuIndex}`)} />
                            )}

                            {submenu && (
                                <Submenu>
                                    {submenu.map((subitem, j) => {
                                        const submenuLevelTwo = subitem.navigationLinks ? subitem.navigationLinks : null;

                                        const submenuLink = subitem.navigationLinks ? subitem.mainLink.page.slug : subitem.page.slug
                                        const submenuText = subitem.navigationLinks ? subitem.mainLink.externalName : subitem.externalName

                                        const submenuIndex = j;
                                        return (
                                            <NavItem
                                                key={`submenu-${menu.id}-${submenuIndex}`}
                                                className="menu-item"
                                                id={`submenu-item-${menuIndex}${submenuIndex}`}>

                                                <NavLink path={submenuLink}>{submenuText}</NavLink>
                                                {submenuLevelTwo && <ExpandButton onClick={(e) => onClickHandler(e, `#submenu-item-${menuIndex}${submenuIndex}`)} />}
                                                {submenuLevelTwo && (
                                                    <Submenu>
                                                        {submenuLevelTwo.map((subitemLevelTwo, k) => {
                                                            const subsubmenuIndex = k;
                                                            return (
                                                                <NavItem
                                                                    key={`submenu-${menu.id}-${submenuIndex}-${subsubmenuIndex}`}
                                                                    className="menu-item"
                                                                    id={`submenu-item-${menuIndex}${submenuIndex}${subsubmenuIndex}`}>
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
                                            <NavItem key={`megamenu-${menu.node.id}-${megaIndex}`} id={`megamenu-${menu.node.id}-${megaIndex}`}>
                                                <Heading {...headingStyle}>
                                                    <span>{megaitem.title}</span>
                                                    <ExpandButton onClick={(e) => onClickHandler(e, `#megamenu-${menu.node.id}-${megaIndex}`)} />
                                                </Heading>
                                                {megaSubmenu && (
                                                    <Submenu>
                                                        {megaSubmenu.map((megaSubitem, i) => {
                                                            return (
                                                                <NavItem key={`megasubmenu-${megaIndex}-${i}`}>
                                                                    <NavLink path={megaSubitem.link}>
                                                                        <span>{megaSubitem.text}</span>
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
        </MobileMenuWrap>
    )
}

MobileMenu.defaultProps = {
    headingStyle: {
        fontSize: '14px',
        mb: '0',
        texttransform: 'uppercase',
        color: '#fff'
    }
}