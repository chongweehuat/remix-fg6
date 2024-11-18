import {useCurrentLanguage} from "./langs";

const dateFormatter = (dateString) => {
    const {currentLanguage} = useCurrentLanguage();
    const date = new Date(dateString);

    const formatter = new Intl.DateTimeFormat(currentLanguage, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    });

    return formatter.format(date);
}

export default dateFormatter;