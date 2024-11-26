import {useCurrentLanguage} from "./langs";

const dateFormatter = (dateString:any) => {
    const {currentLanguage} = useCurrentLanguage();
    const date = dateString ? new Date(dateString) : new Date();

    const formatter = new Intl.DateTimeFormat(currentLanguage, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    });

    return formatter.format(date);
}

export default dateFormatter;