import { getContactLinksContainer } from "./getContactLinksContainer.js";

export async function loadMainContactLinksContainers(contactInfoTabContainer) {
    const contactContainers = document.getElementsByClassName("contact-container");
    for (const currentContactContainer of contactContainers) {
        currentContactContainer.appendChild(
            await getContactLinksContainer(contactInfoTabContainer)
        );
    }
}