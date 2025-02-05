import { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { storyData, storyContent, storyStyle } from "../utils/storyData";
import XTag from "../components/XTag";
import { Link, NavLink } from "@remix-run/react";
import { useCurrentLanguage, getTransLink, getSlug } from "../utils/langs";

const Header = ({ blok }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const { currentLanguage } = useCurrentLanguage();

    const contentLogo = storyContent(blok.header, "logo");
    const contentMenus = storyContent(blok.header, "menus");
    const contentGlobal = storyContent(blok.settings, "global");
    const stylePage = storyStyle(blok.header, "page");
    const styleLogo = storyStyle(blok.header, "logo");
    const styleMenu = storyStyle(blok.header, "menu");
    const styleMobileMenu = storyStyle(blok.header, "mobileMenu");
    const styleMobileButton = storyStyle(blok.header, "mobileButton");

    const renderMenu = (menuElement) => {
        //console.log("menuElement:",menuElement)
        return (
            <div key={menuElement._uid} >
                {menuElement.submenu.length == 0 && (
                    <NavLink
                    prefetch="intent"
                    to={getTransLink(getSlug(menuElement.link.cached_url), currentLanguage)}
                    className={({ isActive }) =>
                        isActive
                            ? "text-yellow-600 font-semibold border-b-2 border-yellow-600"
                            : "text-gray-700 hover:text-yellow-600"
                    }
                >
                    <XTag
                        styleClass="cursor-pointer flex items-center"
                        useCss
                        cmsData={styleMenu.label}
                        cmsDataRef="styleMenu.label"
                    >
                        {menuElement.label}
                    </XTag>
                </NavLink>
                )}

                {/* Render submenu if it exists */}
                {menuElement.submenu && menuElement.submenu.length > 0 && (
                    <XTag
                        styleClass="relative group"
                        cmsData={styleMenu.subMenu}
                        cmsDataRef="styleMenu.subMenu"
                    >
                        <XTag
                            tag="span"
                            styleClass="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer flex items-center"
                            cmsData={styleMenu.label}
                            cmsDataRef="styleMenu.label">
                            {menuElement.label}
                            <XTag
                                tag={FiChevronDown}
                                styleClass="ml-1"
                                cmsData={styleMenu.element}
                                cmsDataRef="styleMenu.element" />
                        </XTag>
                        <XTag
                            tag="ul"
                            styleClass="absolute left-0 top-[calc(100%+0.5rem)] bg-white w-48 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 border border-gray-200"
                            useCss
                            cmsData={styleMenu.subGroup}
                            cmsDataRef="styleMenu.subGroup"
                        >
                            {menuElement.submenu.map((submenuItem, index) => {
                                // console.log('submenuItem', submenuItem);
                                return (
                                    <li 
                                    key={submenuItem._uid}
                                    className={`py-3 pl-4 pr-1 text-gray-700 hover:text-yellow-600 hover:bg-gray-100 ${
                                        index !== 0 ? 'border-t border-gray-200' : ''
                                    }`}
                                    >
                                        {renderMenu(submenuItem)}
                                    </li>
                                )
                            }
                            )
                            }
                        </XTag>

                    </XTag>

                )}
            </div>
        );
    };

    return (
        <XTag
            styleClass="relative bg-white border-b-2 border-gray-100 overflow-visible"
            useCss
            cmsData={stylePage.wrapper}
            cmsDataRef="stylePage.wrapper"
        >
            <XTag
                styleClass="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                cmsData={stylePage.container}
                cmsDataRef="stylePage.container"
            >
                <XTag
                    styleClass="flex justify-between items-center py-6 gap-8"
                    useCss
                    cmsData={stylePage.main}
                    cmsDataRef="stylePage.main"
                >

                    <XTag
                        styleClass="flex justify-start lg:w-0 lg:flex-1"
                        useCss
                        cmsData={styleLogo.wrapper}
                        cmsDataRef="styleLogo.wrapper"
                    >
                        <Link to={getTransLink(getSlug(contentLogo.logoMobile.link.cached_url), currentLanguage)}>
                            <XTag tag="img"
                                styleClass="h-7 w-auto sm:h-10 sm:hidden"
                                useCss
                                cmsData={styleLogo.desktopWrapper}
                                cmsDataRef="styleLogo.desktopWrapper"
                                src={contentLogo.logoMobile.asset.filename}
                                alt={contentGlobal.siteTitle.content}
                            />
                        </Link>
                        <Link to={getTransLink(getSlug(contentLogo.logoDesktop.link.cached_url), currentLanguage)}>
                            <XTag tag="img"
                                styleClass="h-7 w-auto sm:h-10 hidden sm:block"
                                useCss
                                cmsData={styleLogo.mobileWrapper}
                                cmsDataRef="styleLogo.mobileWrapper"
                                src={contentLogo.logoDesktop.asset.filename}
                                alt={contentGlobal.siteTitle.content}
                            />
                        </Link>
                    </XTag>

                    <XTag
                        styleClass="-mr-2 -my-2 md:hidden"
                        cmsData={styleMobileButton.wrapper}
                        cmsDataRef="styleMobileButton.wrapper"
                    >
                        <button
                            type="button"
                            onClick={() => setOpenMenu(true)}
                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open menu</span>
                            <XTag
                                tag={FiMenu}
                                styleClass="h-6 w-6"
                                cmsData={styleMobileButton.element}
                                cmsDataRef="styleMobileButton.element" />
                        </button>
                    </XTag>

                    <XTag
                        tag="nav"
                        useCss            
                        styleClass="hidden md:flex items-center justify-end space-x-8"
                        cmsData={styleMenu.container}
                        cmsDataRef="styleMenu.container"
                    >
                        {contentMenus.map((element, j) => {
                            return renderMenu(element);
                        })}
                    </XTag>
                    {openMenu && (
                        <XTag
                            styleClass="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                            cmsData={styleMobileMenu.wrapper}
                            cmsDataRef="styleMobileMenu.wrapper"
                        >
                            <XTag
                                styleClass="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
                                cmsData={styleMobileMenu.container}
                                cmsDataRef="styleMobileMenu.container"
                            >
                                <XTag
                                    styleClass="pt-5 pb-6 px-5"
                                    cmsData={styleMobileMenu.element}
                                    cmsDataRef="styleMobileMenu.element"
                                >
                                    <XTag
                                        styleClass="flex items-center justify-between"
                                        cmsData={styleMenu.item}
                                        cmsDataRef="styleMenu.item"
                                    >

                                        <XTag tag="img"
                                            styleClass="h-8 w-auto"
                                            cmsData={styleMobileMenu.asset}
                                            cmsDataRef="styleMobileMenu.asset"
                                            src={contentLogo.logoDesktop.asset.filename}
                                            alt={contentGlobal.siteTitle.content}
                                        />

                                        <div className="-mr-2">
                                            <button
                                                type="button"
                                                onClick={() => setOpenMenu(false)}
                                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                            >
                                                <span className="sr-only">Close menu</span>
                                                <XTag tag={FiX} styleClass="h-6 w-6" />
                                            </button>
                                        </div>
                                    </XTag>
                                    <div className="mt-6">
                                        <nav className="grid gap-y-8">
                                            {contentMenus.map((element, j) => {
                                                return renderMenu(element);  // Call the recursive function
                                            })}
                                        </nav>
                                    </div>
                                </XTag>
                            </XTag>
                        </XTag>
                    )}
                </XTag>
            </XTag>
        </XTag>
    )
}

export default Header;