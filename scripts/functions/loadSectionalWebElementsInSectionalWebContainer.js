import { getSectionalWebElement } from "./getSectionalWebElement.js";

export function loadSectionalWebElementsInSectionalWebContainer(
    sectionalWebContainer, sectionalElementsArray, currentSection
)
{
    for (const sectionalElement of sectionalElementsArray) {
        if (isSectionalElementVisible(currentSection, sectionalElement)) {
            const currentSectionalWebElement = getSectionalWebElement(
                currentSection, sectionalElement
            );
            sectionalWebContainer.appendChild(currentSectionalWebElement);
        }
    }
}

function isSectionalElementVisible(currentSection, sectionalElement) {
    if (currentSection == "projects") {
        return sectionalElement.isVisible;
    }
    return true;
}