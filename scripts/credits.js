// This script appends credits to the bottom of the Modrinth page, linking to the ME repository.

var modrinthInformation = document.getElementsByClassName("logo-info");
let creditsText = document.createElement("p");
let creditsCopyrightText = document.createElement("p");

creditsText.innerHTML = ' Modrinth Extra is <a target="_blank" href="https://github.com/intergrav/Modrinth-Extra" class="text-link"> open source</a>. ';

creditsCopyrightText.innerHTML = '© intergrav'

modrinthInformation[0].appendChild(creditsText);

modrinthInformation[0].appendChild(creditsCopyrightText);