import Themes from "./themes";

export function sortTheme(){
    const themes = Themes()
    const availableThemes = getAvailableTheme(themes)

    const randomIndex = Math.floor(Math.random() * availableThemes.length);
    const theme = availableThemes[randomIndex]

    setSortedThemes(theme)

    return theme
}

export function resetThemes(){
    localStorage.setItem("sortedThemes", JSON.stringify([]))
}

function getAvailableTheme(themes: string[]){
    const savedSortedThemes = localStorage.getItem("sortedThemes")
    if(!savedSortedThemes) 
        return themes

    const availableThemes = themes.filter(theme => ! JSON.parse(savedSortedThemes).includes(theme))
    if(!availableThemes.length) return ['NÃO HÁ MAIS TEMAS DISPONÍVEIS! MAS VOCÊ PODE RESETAR OS TEMAS OU PODE SUGERIR MAIS TEMAS AO DESENVOLVEDOR!']

    return availableThemes
}

function setSortedThemes(theme: string){
    let sortedThemes = []
    const savedSortedThemes = localStorage.getItem("sortedThemes")
    if(savedSortedThemes) {
        sortedThemes = JSON.parse(savedSortedThemes)
    }

    sortedThemes.push(theme)
    localStorage.setItem("sortedThemes", JSON.stringify(sortedThemes))
}