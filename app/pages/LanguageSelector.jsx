import React, { useState, useRef, useEffect } from 'react';
import { useCurrentLanguage, getTransLink, languages, languagesName } from "../utils/langs";
import { useLocation } from "@remix-run/react";

const LanguageSelector = ({slug}) => {
    const [dropdownWidth, setDropdownWidth] = useState(145);
    const currentLangRef = useRef(null);
    const { currentLanguage } = useCurrentLanguage();

    const availableLanguages = languages.filter(
        (language) => language !== currentLanguage
    );

    useEffect(() => {
        if (currentLangRef.current) {
            setDropdownWidth(currentLangRef.current.offsetWidth);
        }
    }, []);

    return (
        <div id="trp-floater-ls" className="fixed bottom-4 right-8">
            <div className="relative inline-block text-left group">
                {/* Current Language Display */}
                <div
                    id="trp-floater-ls-current-language"
                    ref={currentLangRef}
                    className="bg-gray-800 text-white px-4 py-2 shadow-lg w-max text-left"
                    style={{ width: dropdownWidth }}
                >
                    <a className="text-gray-400">
                        {languagesName[currentLanguage]}
                    </a>
                </div>

                {/* Language Options Dropdown */}
                <div
                    id="trp-floater-ls-language-list"
                    className="bg-gray-800 text-white shadow-lg absolute bottom-full left-0 text-left transition-all duration-300 ease-in-out transform opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
                    style={{ width: dropdownWidth }}
                >
                    <div className="flex flex-col">
                        {availableLanguages.map((language) => (
                            <a
                                key={language}
                                href={getTransLink(slug, language)}
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                                title={languagesName[language]}
                                className="hover:text-gray-400 px-4 py-2"
                            >
                                {languagesName[language]}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguageSelector;
