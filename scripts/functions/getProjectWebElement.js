import { getCustomWebElement } from "./getCustomWebElement.js";
import { getIconClassesArray } from "./getIconClassesArray.js";
import { capitalizeFirstLetter } from "./capitalizeFirstLetter.js"

export function getProjectWebElement(projectElement) {
    const image = getCustomWebElement(
        "img", 
        {"src": projectElement.image, "alt": projectElement.name}
    );
    const image_url = getCustomWebElement(
        "a", 
        {"class": ["image-url"], "href": projectElement["project-url"], "target": "_blank"},
        [image]
    );

    const title = getCustomWebElement(
        "span", 
        {},
        [], 
        projectElement.name
    );
    const title_external_link_icon = getCustomWebElement(
        "i", 
        {"class": getIconClassesArray("external-link")}
    );
    const title_url = getCustomWebElement(
        "a", 
        {"class": ["title-url"], "href": projectElement["project-url"], "target": "_blank"},
        [title, title_external_link_icon]
    );
    
    const github_icon = getCustomWebElement(
        "i", 
        {"class": getIconClassesArray("github")}
    );
    const github_span = getCustomWebElement(
        "span", 
        {},
        [], 
        "App code"
    );
    const github_external_link_icon = getCustomWebElement(
        "i", 
        {"class": getIconClassesArray("external-link")}
    );
    const github_url = getCustomWebElement(
        "a", 
        {
            "class": ["github-url"], 
            "href": projectElement["github-url"], 
            "target": "_blank"
        },
        [github_icon, github_span, github_external_link_icon]
    );
    
    const mainTechContainerChilds = [];
    for (const currentTech of projectElement.technologies) {
        const currentTechIcon = getCustomWebElement(
            "i",
            {
                "class": getIconClassesArray(currentTech), 
                "title": capitalizeFirstLetter(currentTech)
            }
        );
        const currentTechContainer = getCustomWebElement(
            "div",
            {"class": ["tech-container", currentTech]},
            [currentTechIcon]
        );
        mainTechContainerChilds.push(currentTechContainer);
    }
    const mainTechContainer = getCustomWebElement(
        "div",
        {"class": ["main-tech-container"]},
        mainTechContainerChilds
    );

    const mainDiv = getCustomWebElement(
        "div", 
        {"class": ["element", "project"]},
        [image_url, title_url, github_url, mainTechContainer]
    );

    return mainDiv;
}