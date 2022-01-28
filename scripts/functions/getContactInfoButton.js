import { getCustomWebElement } from "./getCustomWebElement.js";

export function getContactInfoButton(contactInfoContainer) {
    const contactInfoButton = getCustomWebElement(
        "button", 
        {
            "class": ["contact-info-button"]
        },
        [],
        "Contact info"
    );
    contactInfoButton.addEventListener('click', () => {
        contactInfoContainer.setAttribute("is-visible", "true");
    });
    return contactInfoButton;
}