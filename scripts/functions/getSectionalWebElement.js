import { getProjectWebElement } from "./getProjectWebElement.js";
import { getSkillWebElement } from "./getSkillWebElement.js";

export function getSectionalWebElement(section, element) {
    let currentWebElement;
    if (section == "projects") {
        currentWebElement = getProjectWebElement(element);
    } else if (section == "skills") {
        currentWebElement = getSkillWebElement(element);
    }
    return currentWebElement;
}