const textFormatter = {
    formatText(sourceText, maxTextLength = sourceText.length, maxLineLength = Infinity, lineBreakStyle = "none"){
        const text = maxTextLength < sourceText.length ? sourceText.slice(0, maxTextLength) : sourceText;
        if(lineBreakStyle === "character"){
            return text.split("").map(character => character + "\n").join("");
        }
        else if(lineBreakStyle === "word"){
            return text.split(" ").map(word => word + "\n").join("");
        }
        else if(lineBreakStyle === "sentence"){
            const sentences = text.split(".");

            let resultText = "";
            for(let sentence of sentences){
                let newLine = "";
                for(let word of sentence.split(" ")){
                    if(newLine.length + word.length < maxLineLength){
                        newLine += word + " ";
                    }
                    else{
                        resultText += newLine.trim() + "\n";
                        newLine = word + " ";
                    }
                }
                resultText += newLine.trim() + "." + "\n";
            }

            return resultText.trim();
        }
        else if(lineBreakStyle === "none"){
            if(maxLineLength === Infinity){
                return text;
            }

            const words = text.split(" ");

            let resultText = "",
                newLine = "";
            for(let word of words){
                if(newLine.length + word.length < maxLineLength){
                    newLine += word + " ";
                }
                else{
                    resultText += newLine.trim() + "\n";
                    newLine = word + " ";
                }
            }

            if(newLine.trim()){
                resultText += newLine;
            }

            return resultText.trim();
        }
    }
}