const dateDisplayFormatter = {
    monthNames : ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ],
    convertToISO(stringDate, dateFormat, dateType){
        const date = this.getDate(stringDate, dateFormat, dateType);
        let month = date.getMonth() + 1;
        month = month <= 9 ? "0" + month : month;

        return `${date.getFullYear()}-${month}-${date.getDate()}`
    },

    formatToCustomLocale(stringDate, dateFormat, locale, options, dateType){
        const date = this.getDate(stringDate, dateFormat, dateType);
        return date.toLocaleString(locale, options);
    },

    convertToCustomFormat(stringDate, dateFormat, resultFormat, isNumericMonth = true, dateType){
        const date = this.getDate(stringDate, dateFormat, dateType);

        if(!(date instanceof Date) || isNaN(date)){
            throw new Error("invalid date");
        }

        if(!resultFormat){
            resultFormat = isNumericMonth ? "DD-MM-YYYY" : "DD MM YYYY";
        }

        let result;
        const yearCharsLength = dateFormatterHelper.getCharsLength(resultFormat, "Y", [4,2]),
            year = yearCharsLength === 4 ? date.getFullYear() : date.getFullYear().toString().slice(2,4);

        result = resultFormat.replace(new RegExp("Y".repeat(yearCharsLength)), year);

        const monthCharsLength = dateFormatterHelper.getCharsLength(resultFormat, "M", [2,1]),
            month = isNumericMonth ?
            date.getMonth() < 9 && monthCharsLength === 2 ? `0${date.getMonth()+1}` : (date.getMonth()+1).toString()
            : this.monthNames[date.getMonth()];

        result = result.replace(new RegExp("M".repeat(monthCharsLength)), month);

        const dayCharsLength = dateFormatterHelper.getCharsLength(resultFormat,"D", [2,1]),
            day = date.getDate() <= 9 && dayCharsLength === 2 ? `0${date.getDate()}` : date.getDate().toString();

        result = result.replace(new RegExp("D".repeat(dayCharsLength)), day);

        return result;
    },

    fromNow(stringDate, dateFormat, dateType){
        const date = this.getDate(stringDate, dateFormat, dateType);
        return this.timespanToHumanString(date, Date.now());
    },

    getDate(sourceDate, sourceDateFormat, dateType){
        // it is acceptable to write "new Date(2013, 3, 31)" and get 1 May 2013,
        // this does not suit me, here I brush aside these cases

        const date = sourceDate ? dateFormatterHelper.trimInputDate(sourceDate) : sourceDate,
            dateFormat = sourceDateFormat ? dateFormatterHelper.trimInputDate(sourceDateFormat) : sourceDateFormat;
        if(dateType === "number"){
            return new Date(parseInt(date));
        }
        else if(dateType === "string"){
            // If the user has not specified the form of the entered date,
            // we will try to recognize it using the built-in templates in the 'formats' dictionary
            if(!dateFormat){
                for(let reg of this.formats.values()){
                    const searchResults = date.match(reg);

                    if(searchResults){
                        const dateObj = dateFormatterHelper.getDateObject(searchResults, reg);
                        if(dateFormatterHelper.dateValidityCheck(dateObj, searchResults.groups.year, searchResults.groups.month, searchResults.groups.day)){
                            return dateObj;
                        }
                    }
                }

                // if user enter ticks to to the text input
                // There may be a situation when the user entered 30062020 and meant that this is a date string,
                // So I am handling it here after I made sure the input data cannot be processed as a string
                // const ticks = parseInt(date);
                // if(!isNaN(ticks) && date.split("").every(element => !isNaN(parseInt(element)))){
                //     return new Date(ticks);
                // }
            }
            else{
                const year = dateFormatterHelper.getDatePart(date, dateFormat, "Y"),
                    month = dateFormatterHelper.getDatePart(date, dateFormat, "M"),
                    day = dateFormatterHelper.getDatePart(date, dateFormat, "D");
                const dateObj = new Date(`${parseInt(year)}-${parseInt(month)}-${parseInt(day)}`);
                if(dateFormatterHelper.dateValidityCheck(dateObj, year, month, day)){
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
dateDisplayFormatter.formats.set("DDMMYYYY", /^(?<day>[0-9]{2})(?<month>[0-9]{2})(?<year>[0-9]{4})$/);
dateDisplayFormatter.formats.set("DD MM YYYY", /^(?<day>[0-9]{2}) (?<month>[0-9]{2}) (?<year>[0-9]{4})$/);
dateDisplayFormatter.formats.set("DD.MM.YYYY", /^(?<day>[0-9]{2}).(?<month>[0-9]{2}).(?<year>[0-9]{4})$/);
dateDisplayFormatter.formats.set("YYYY-MM-DD", /^(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})$/);
dateDisplayFormatter.formats.set("DD-MM-YYYY", /^(?<day>[0-9]{2})-(?<month>[0-9]{2})-(?<year>[0-9]{4})$/);
dateDisplayFormatter.formats.set("MM/DD/YYYY", /^(?<month>[0-9]{2})\/(?<day>[0-9]{2})\/(?<year>[0-9]{4})$/);