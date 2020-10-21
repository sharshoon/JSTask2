const dateDisplayFormatter = {
    convertToISO(stringDate, dateFormat){
        const date = this.getDate(stringDate, dateFormat);
        return date.toISOString().slice(0,10);
    },

    formatToCustomLocale(stringDate, dateFormat, locale, options){
        const date = this.getDate(stringDate, dateFormat);
        return date.toLocaleString(locale, options);
    },

    convertToCustomFormat(stringDate, dateFormat, resultFormat){
        const date = this.getDate(stringDate, dateFormat);

        let result = resultFormat.replace(/[Y]{4}/, date.getFullYear());
        result = result.replace(/[M]{2}/, date.getMonth().toString());
        result = result.replace(/[D]{2}/, date.getDay().toString());
        return result;
    },

    fromNow(stringDate, dateFormat){
        const date = this.getDate(stringDate, dateFormat);
        return this.timespanToHumanString(date, Date.now());
    },

    getDate(date, dateFormat){
        const tryGetFormat = date => {
            for(let reg of this.formats.values()){
                const searchResults = date.match(reg);

                if(searchResults){
                    return reg;
                }
            }
        }

        if(typeof date === "number"){
            return new Date(date);
        }
        else if(typeof date === "string"){
            let format;
            if(!dateFormat){
                format = tryGetFormat(date);
                if(!format){
                    return null;
                }
            }
            else{
                let format = this.formats.get(dateFormat);
                if(!format){
                    return null;
                }
            }

            const searchResults = date.match(format);
            if(searchResults){
                return new Date(searchResults[0].replace(format, "$<year>-$<month>-$<day>"));
            }
        }
        return null;
    },

    timespanToHumanString(startDate, endDate) {
        function roundDate(num) {
            return num % 1 > 0.5 ? Math.round(num) : Math.floor(num);
        }

        let seconds = (endDate - startDate) / 1000;

        switch (true)
        {
            case seconds <= 45:
                return "a few seconds ago";
            case seconds <= 90:
                return "a minute ago";
            case seconds / 60 <= 45:
                return `${roundDate(seconds / 60)} minutes ago`;
            case seconds / 60 <= 90:
                return "an hour ago";
            case seconds / 60 / 60 <= 22:
                return `${roundDate(seconds / 60 / 60)} hours ago`;
            case seconds / 60 / 60 <= 36:
                return "a day ago";
            case seconds / 60 / 60 / 24 <= 25:
                return `${roundDate(seconds / 60 / 60 / 24)} days ago`;
            case seconds / 60 / 60 / 24 <= 45:
                return "a month ago";
            case seconds / 60 / 60 / 24 <= 345:
                return `${roundDate(seconds / 60 / 60 / 24 / 30)} months ago`;
            case seconds / 60 / 60 / 24 <= 545:
                return "a year ago";
            default:
                return `${roundDate(seconds / 60 / 60 / 24 / 30 / 12)} years ago`;
        }
    }
}

dateDisplayFormatter.formats = new Map();
dateDisplayFormatter.formats.set("YYYYMMDD", /(?<year>[0-9]{4})(?<month>[0-9]{2})(?<day>[0-9]{2})/);
dateDisplayFormatter.formats.set("YYYY-MM-DD", /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/);
dateDisplayFormatter.formats.set("MM-DD-YYYY", /(?<month>[0-9]{2})-(?<day>[0-9]{2})-(?<year>[0-9]{4})/);
dateDisplayFormatter.formats.set("MM/DD/YYYY", /(?<month>[0-9]{2})\/(?<day>[0-9]{2})\/(?<year>[0-9]{4})/);