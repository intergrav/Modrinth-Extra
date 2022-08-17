// This script appends credits to the bottom of the Modrinth page, linking to the ME repository.

var modrinthInformation = document.getElementsByClassName("logo-info")
let creditsImage = document.createElement("img")
let creditsText = document.createElement("p")
let creditsCopyrightText = document.createElement("p")

creditsImage.src = chrome.runtime.getURL("branding/greyicontextbig_32h.png")
creditsImage.height = "30"

creditsText.innerHTML = ' Modrinth Extra is <a target="_blank" href="https://github.com/intergrav/Modrinth-Extra" class="text-link"> open source</a>. '

creditsCopyrightText.innerHTML = '© intergrav'

modrinthInformation[0].appendChild(creditsImage)

modrinthInformation[0].appendChild(creditsText)

modrinthInformation[0].appendChild(creditsCopyrightText)