import { getContactInfoButton } from "./getContactInfoButton.js";
import { getCustomWebElement } from "./getCustomWebElement.js";

export function loadContactInfoButtonInNavbar(contactInfoTabContainer) {
    const contactInfoButton = getContactInfoButton(contactInfoTabContainer);
    const contactInfoButtonContainer = getCustomWebElement(
        "li",
        {},
        [contactInfoButton]
    );
    const navbar = document.getElementById("navbar");
    navbar.appendChild(contactInfoButtonContainer);
}