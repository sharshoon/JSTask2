const textFormatter = {
    formatText(sourceText, maxTextLength = sourceText.length, maxLineLength = Infinity, lineBreakStyle = "none"){
        let text = sourceText.trim();
        text = maxTextLength < text.length ? text.slice(0, maxTextLength) : text;

        if(lineBreakStyle === "character"){
            let i = 0,
                resultText = "";
            while(i < text.length){
                const newLineLength = i + maxLineLength < text.length ? maxLineLength : text.length - i;
                resultText += text.slice(i, i+ newLineLength) + "\n";
                i += maxLineLength;
            }
            return resultText;
        }
        else if(lineBreakStyle === "word"){
            let resultText = "",
                line = "",
                separator;
            for(let word of text.split(/[\s.]+/)){
                separator = line ? " " : ""
                if(line.length + separator.length + word.length <= maxLineLength){
                    if(line){
                        line += " ";
                    }
                    line += word;
                }
                else if(word.length > maxLineLength){
                    resultText += word.slice(0, maxLineLength) + "\n";
                    line = "";
                }
                else{
                    line += " ".repeat(maxLineLength - line.length);
                    resultText += line + "\n";
                    line = word;
                }
            }

            if(line){
                line += " ".repeat(maxLineLength - line.length);
            }
            resultText += line;
            return resultText;
        }
        else if(lineBreakStyle === "sentence"){
            if(maxLineLength === 1){
                throw new InvalidArgumentError("max line length can't be equal to 1");
            }

            const resultText = text.split(".").map(sentence => {
                return sentence.trim().slice(0, maxLineLength - 1);
            }).join(".\n");

            return resultText[resultText.length - 2] === "." ? resultText : resultText + ".";
        }
        else if(lineBreakStyle === "none"){
            return text.slice(0, maxLineLength);
        }
    }
}