import { getContactInfoTab } from "./getContactInfoTab.js"

export function getContactInfoTabContainer() {
    const contactInfoTabContainer = document.getElementById("contact-info-shadow");
    const contactInfoTab = getContactInfoTab(contactInfoTabContainer);
    contactInfoTabContainer.appendChild(contactInfoTab);
    contactInfoTabContainer.addEventListener('click', (event) => {
        const isContactInfoTabClicked = contactInfoTab.contains(event.target);
        if (!(isContactInfoTabClicked)) {
            contactInfoTabContainer.setAttribute("is-visible", "false");
        }
    });
    return contactInfoTabContainer;
}
