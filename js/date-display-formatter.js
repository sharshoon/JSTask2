const dateDisplayFormatter = {
    convertToISO(string){
        string.replace()
    }
}

dateDisplayFormatter.formats = new Map();
dateDisplayFormatter.formats.set("YYYYMMDD", /(?<year>[0-9]{4})(?<month>[0-9]{2})(?<day>[0-9]{2})/);
dateDisplayFormatter.formats.set("YYYY-MM-DD", /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/);
dateDisplayFormatter.formats.set("MM-DD-YYYY", /(?<month>[0-9]{2})-(?<day>[0-9]{2})-(?<year>[0-9]{4})/);
dateDisplayFormatter.formats.set("MM/DD/YYYY", /(?<month>[0-9]{2})\/(?<day>[0-9]{2})\/(?<year>[0-9]{4})/);