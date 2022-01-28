import { contactMethods } from "../objects/contactMethods.js";
import { getCustomWebElement } from "./getCustomWebElement.js";
import { getContactMethodWebElement } from "./getContactMethodWebElement.js";
import { getIconClassesArray } from "./getIconClassesArray.js";

export function getContactInfoTab(contactInfoTabContainer) {
    const nameTitle = getCustomWebElement(
        "span",
        {"class": ["name-title"]},
        [],
        "Nahuel Nicolas Barbieri"
    );
    const closeContactInfoTabIcon = getCustomWebElement(
        "i",
        {"class": getIconClassesArray("close-tab")},
    );
    closeContactInfoTabIcon.addEventListener('click', () => {
        contactInfoTabContainer.setAttribute("is-visible", "false");
    });
    const contactInfoTabHeader = getCustomWebElement(
        "div",
        {"id": "contact-info-header"},
        [nameTitle, closeContactInfoTabIcon]
    );
    const contactInfoTabTitle = getCustomWebElement(
        "span",
        {"class": ["contact-info-title"]},
        [],
        "Contact Info"
    );
    const contactMethodsDivContainerChilds = [];
    for (const currentContactMethod of contactMethods) {
        contactMethodsDivContainerChilds.push(
            getContactMethodWebElement(currentContactMethod)
        );
    }
    const contactMethodsDivContainer = getCustomWebElement(
        "div",
        {"class": ["contact-methods-container"]},
        contactMethodsDivContainerChilds
    );

    const contactInfoTab = getCustomWebElement(
        "div",
        {"class": ["contact-info-container"]},
        [contactInfoTabHeader, contactInfoTabTitle, contactMethodsDivContainer]
    );
    return contactInfoTab;
}