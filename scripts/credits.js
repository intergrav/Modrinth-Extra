// This script appends credits to the bottom of the Modrinth page, linking to the ME repository.

var isDarkMode = false
var modrinthInformation = document.getElementsByClassName("logo-info")
let creditsImage = document.createElement("img")
let creditsText = document.createElement("p")
let creditsCopyrightText = document.createElement("p")

if (document.getElementsByTagName("html")[0].className.includes("dark-mode")) {
    creditsImage.src = chrome.runtime.getURL("branding/dark/darker/icontextbig_svg.svg")
} else {
    creditsImage.src = chrome.runtime.getURL("branding/light/darker/icontextbig_svg.svg")
}
creditsImage.height = "30"

creditsText.innerHTML = ' Modrinth Extra is <a target="_blank" href="https://github.com/intergrav/Modrinth-Extra" class="text-link"> open source</a>. '

creditsCopyrightText.innerHTML = '© intergrav'

modrinthInformation[0].appendChild(creditsImage)

modrinthInformation[0].appendChild(creditsText)

modrinthInformation[0].appendChild(creditsCopyrightText)