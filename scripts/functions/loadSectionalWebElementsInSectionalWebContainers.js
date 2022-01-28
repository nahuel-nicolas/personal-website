import { sectionalElements } from "../objects/sectionalElements.js";
import { getSectionalWebContainers } from "./getSectionalWebContainers.js";
import { loadSectionalWebElementsInSectionalWebContainer } from "./loadSectionalWebElementsInSectionalWebContainer.js";

export function loadSectionalWebElementsInSectionalWebContainers() {
    const sections = Object.keys(sectionalElements);
    const sectionalWebContainers = getSectionalWebContainers(sections);
    for (const currentSectionName in sectionalElements) {
        const currentSectionalWebContainer = sectionalWebContainers[currentSectionName];
        const currentSectionalElementsArray = sectionalElements[currentSectionName];
        loadSectionalWebElementsInSectionalWebContainer(
            currentSectionalWebContainer, currentSectionalElementsArray, 
            currentSectionName
        );
    }
}