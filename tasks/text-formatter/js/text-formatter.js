const textFormatter = {
    formatText(sourceText, maxTextLength = sourceText.length, maxLineLength = Infinity, lineBreakStyle = "none"){
        const text = maxTextLength < sourceText.length ? sourceText.slice(0, maxTextLength) : sourceText;
        if(lineBreakStyle === "character" || maxLineLength === 1){
            return text.split("").map(character => character + "\n").join("");
        }
        else if(lineBreakStyle === "word"){

            return text
                .split(/[\s.]+/)
                .map(word => {
                    let longWord = word.split("\n");
                    while(longWord.some(word => word.length > maxLineLength)){
                        longWord = longWord.map(word => {
                            if(word.length > maxLineLength){
                                return word.slice(0, maxLineLength) + "\n" + word.slice(maxLineLength);
                            }
                        }).join("").split("\n");
                    }

                    return longWord.join("\n")+"\n";
                })
                .join("")
        }
        else if(lineBreakStyle === "sentence"){
            const sentences = text.split(".");

            let resultText = "";
            for(let sentence of sentences){
                let newLine = "";
                let longSentence = sentence.trim().split("\n");

                while(longSentence.some(part => part.length > maxLineLength)){
                    longSentence = longSentence.map(part => {
                        if(part.length > maxLineLength){
                            return part.slice(0, maxLineLength) + "\n" + part.slice(maxLineLength);
                        }
                        return part+"\n";
                    }).join("").split("\n");
                }

                resultText += longSentence.join("\n");
                if(sentence[sentence.length - 1] !== "."){
                    resultText += ".";
                }
                resultText += "\n";
            }

            return resultText.trim();
        }
        else if(lineBreakStyle === "none"){
            if(maxLineLength === Infinity){
                return text;
            }

            const words = text.split(/[\s.]+/);

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