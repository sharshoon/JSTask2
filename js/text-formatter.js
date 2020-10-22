const textFormatter = {
    formatText(sourceText, maxTextLength = sourceText.length, maxLineLength = -1, lineBreakStyle = "none"){
        const text = maxTextLength < sourceText.length ? sourceText.slice(0, maxTextLength) : sourceText;
        if(lineBreakStyle === "character"){
            return text.split("").map(character => character + "\n").join("");
        }
        else if(lineBreakStyle === "word"){
            return text.split(" ").map(word => word + "\n").join(" ");
        }
        else if(lineBreakStyle === "sentence"){
            let lineLength = 0,
                resultText = "",
                i = 0;
            while(i < text.length){
                if(lineLength === maxLineLength){
                    resultText += text.slice(i - lineLength, i).trim() + "\n";
                    lineLength = 0;
                }
                else if(text[i] === "."){
                    resultText += text.slice(i - lineLength, i+1).trim() + "\n";
                    i++;
                    lineLength = 0;
                }
                else if(i === text.length - 1){
                    resultText += text.slice(i - lineLength, i+1).trim();
                }

                i++;
                lineLength++;
            }

            return resultText;
        }
        else if(lineBreakStyle === "none"){
            if(maxLineLength === -1){
                return text;
            }

            let lineLength = 0,
                resultText = "";
            for(let i = 0; i < text.length; i++){
                if(lineLength === maxLineLength){
                    resultText += text.slice(i - lineLength, i).trim() + "\n";
                    lineLength = 0;
                }
                else if(i === text.length - 1){
                    resultText += text.slice(i - lineLength, i+1).trim();
                }

                lineLength++;
            }

            return resultText;
        }
    }
}