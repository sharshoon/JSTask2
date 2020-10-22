const dateDisplayFormatter = {
    convertToISO(stringDate, dateFormat){
        const date = this.getDate(stringDate, dateFormat);
        return date.toISOString().slice(0,10);
    },

    formatToCustomLocale(stringDate, dateFormat, locale, options){
        const date = this.getDate(stringDate, dateFormat);
        return date.toLocaleString(locale, options);
    },

    convertToCustomFormat(stringDate, dateFormat, resultFormat, isNumericMonth = true){
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const date = this.getDate(stringDate, dateFormat);


        if(!(date instanceof Date) || isNaN(date)){
            throw Error("invalid date");
        }

        let result = resultFormat.replace(/[Y]{4}/, date.getFullYear());
        const month = isNumericMonth ? date.getMonth() < 9 ? `0${date.getMonth()+1}` : (date.getMonth()+1).toString() : monthNames[date.getMonth()];
        const day = date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate().toString();
        result = result.replace(/[M]{2}/, month);
        result = result.replace(/[D]{2}/, day);
        return result;
    },

    fromNow(stringDate, dateFormat){
        const date = this.getDate(stringDate, dateFormat);
        return this.timespanToHumanString(date, Date.now());
    },

    getDate(date, dateFormat){

        // it is acceptable to write "new Date(2013, 3, 31)" and get 1 May 2013,
        // this does not suit me, here I brush aside these cases
        const dateCheck = (dateObj, year, month, day) => {
            if(dateObj && parseInt(month) === dateObj.getMonth() + 1 && parseInt(day) === dateObj.getDate()){
                return true;
            }

            return false;
        }

        if(typeof date === "number"){
            return new Date(date);
        }
        else if(typeof date === "string"){
            if(!dateFormat){
                for(let reg of this.formats.values()){
                    const searchResults = date.match(reg);

                    if(searchResults){
                        const dateObj = new Date(searchResults[0].replace(reg, "$<year>-$<month>-$<day>"));
                        if(dateCheck(dateObj, searchResults.groups.year, searchResults.groups.month, searchResults.groups.day)){
                            return dateObj;
                        }
                    }
                }
            }
            else{
                const year = date.slice(dateFormat.indexOf("Y"), dateFormat.length - dateFormat.split("").reverse().join("").indexOf("Y")),
                    month = date.slice(dateFormat.indexOf("M"), dateFormat.length - dateFormat.split("").reverse().join("").indexOf("M")),
                    day = date.slice(dateFormat.indexOf("D"), dateFormat.length - dateFormat.split("").reverse().join("").indexOf("D"));

                    const dateObj = new Date(parseInt(year), parseInt(month)-1, parseInt(day));

                    if(dateCheck(dateObj, year, month, day)){
                        return dateObj;
                    }
            }
        }

        throw Error("invalid date");
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
dateDisplayFormatter.formats.set("DDMMYYYY", /(?<day>[0-9]{2})(?<month>[0-9]{2})(?<year>[0-9]{4})/);
dateDisplayFormatter.formats.set("DD MM YYYY", /(?<day>[0-9]{2}) (?<month>[0-9]{2}) (?<year>[0-9]{4})/);
dateDisplayFormatter.formats.set("YYYY-MM-DD", /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/);
dateDisplayFormatter.formats.set("MM-DD-YYYY", /(?<month>[0-9]{2})-(?<day>[0-9]{2})-(?<year>[0-9]{4})/);
dateDisplayFormatter.formats.set("MM/DD/YYYY", /(?<month>[0-9]{2})\/(?<day>[0-9]{2})\/(?<year>[0-9]{4})/);