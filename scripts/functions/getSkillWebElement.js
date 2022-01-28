import { getCustomWebElement } from "./getCustomWebElement.js";
import { getIconClassesArray } from "./getIconClassesArray.js";

export function getSkillWebElement(skillElement) {
    // const image = getCustomWebElement(
    //     "img", 
    //     {"src": skillElement.image}
    // );
    const icon = getCustomWebElement(
        "i", 
        {"class": getIconClassesArray(skillElement.name.toLowerCase(), 3)}
    );

    const title = getCustomWebElement(
        "span", 
        {},
        [], 
        skillElement.name
    );

    const mainDiv = getCustomWebElement(
        "div", 
        {"class": ["element", "skill", skillElement.name.toLowerCase()]},
        [icon, title]
    );

    return mainDiv;
}