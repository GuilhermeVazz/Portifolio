const body = document.querySelector("body")
//Declaração de variaveis para que possam ser atribuida as classes
const switchColorWelcome = document.querySelector(".welcome")
const switchColorStyleBorder = document.querySelector(".styleBorder")
const switchColorAboutWelcome = document.querySelector(".aboutWelcome")
const switchBackgroundAboutMe = document.querySelector(".aboutMeContent")
const switchBackgroundPortifolio = document.querySelector(".portifolioContent")
const switchcolorContatoh2 = document.querySelector(".h2Contato")
const switchcolorContatop = document.querySelector(".pContato")
const switchBackgroundRodape = document.querySelector(".rodapeContent")
const addLighMode = document.querySelector(".navLeft")
//

function switchToLightMode() {
    const addLighModeHeader = document.querySelector(".navLeft")

    addLighModeHeader.classList.add("lightMode")

    switchColorStyleBorder.classList.add("styleBorderLight")

    body.style.background = "#fff";

    switchColorMain()
    switchColorAboutMeAndPortifolio()
    switchColorContato()
    switchColorRodape()
    alterarImageMenu()

}

function switchColorMain() {
    switchColorWelcome.classList.add("welcomeLight")
    switchColorAboutWelcome.classList.add("aboutWelcomeLight")
}

function switchColorAboutMeAndPortifolio() {
    switchBackgroundAboutMe.classList.add("aboutMeContentLight")
    switchBackgroundPortifolio.classList.add("portifolioContentLight")
}

function switchColorContato() {
    switchcolorContatoh2.classList.add("h2Light")
    switchcolorContatop.classList.add("pLight")
}

function switchColorRodape() {
    switchBackgroundRodape.classList.add("rodapeContentLight")
}

function alterarImageMenu(){
    document.getElementById("iconGitHub").src = "./src/images/icons/iconGitHubBlack.png"
    document.getElementById("iconLinkedIn").src = "./src/images/icons/iconLinkedinBlack.png"
    document.getElementById("iconInstagram").src = "./src/images/icons/iconInstagramBlack.png"
}

function removeLightMode() {

    addLighMode.classList.remove("lightMode")
    switchColorWelcome.classList.remove("welcomeLight")
    switchColorAboutWelcome.classList.remove("aboutWelcomeLight")
    switchBackgroundAboutMe.classList.remove("aboutMeContentLight")
    switchBackgroundPortifolio.classList.remove("portifolioContentLight")
    switchcolorContatoh2.classList.remove("h2Light")
    switchcolorContatop.classList.remove("pLight")
    switchBackgroundRodape.classList.remove("rodapeContentLight")



    body.style.background = "#181818";
}
