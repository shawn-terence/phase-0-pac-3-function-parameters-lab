function introduction(name){
    return `Hi, my name is ${name}.`
}
const intro1 =introduction('terence')
console.log(intro1)

function introductionWithLanguage(name, languange){
    return `Hi, my name is ${name} and I am learning to program in ${languange}.`
}
const intro2=introductionWithLanguage('Terence','Ember.js')
console.log(intro2)

function introductionWithLanguageOptional(name, languange='JavaScript'){
    return `Hi, my name is ${name} and I am learning to program in ${languange}.`
}
const intro3=introductionWithLanguageOptional('Terence',)
console.log(intro3)