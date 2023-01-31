

export const findUniqueSymbol = (value) => {
    const arrayOfWords = value.replaceAll(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\n]/g, ' ').split(' ').filter(item => item !== '');
    
    const uniqueSymbolsInWords = [];

    arrayOfWords.forEach(item => {
        const uniqueSymbolsArr = createUniqueSymbolsArray(item.split(''))

        if(uniqueSymbolsArr.length > 0) {
            uniqueSymbolsInWords.push(uniqueSymbolsArr[0])
        }
    })

    const uniqueSymbols = createUniqueSymbolsArray(uniqueSymbolsInWords);

    return uniqueSymbols[0]
}

const createUniqueSymbolsArray = (array) => {
    const set = new Set() 
    
    const uniqueElementsInArray = array.reduce((prevValue, item) => {
        if (!prevValue.includes(item)) {
            return [...prevValue, item]
        } else {
            set.add(item)
           return prevValue 
        } 
    }, []).filter(item => !set.has(item))

   return uniqueElementsInArray

}