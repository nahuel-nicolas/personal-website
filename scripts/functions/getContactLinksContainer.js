import { getCustomWebElement } from './getCustomWebElement.js';
import { getIconClassesArray } from './getIconClassesArray.js';
import { getContactInfoButton } from './getContactInfoButton.js';
import { getUserCountry } from './getUserCountry.js';
import { personalInfo } from '../objects/personalinfo.js';

export async function getContactLinksContainer(contactInfoContainer) {
    let resumeLinkTextContent = "Online Resume";
    let resumeLink_url = personalInfo.onlineResume;
    const userCountry = await getUserCountry();
    // const userCountry = "Argentina";
    if (userCountry == "Argentina") {
        resumeLinkTextContent = "CV Online";
        resumeLink_url = personalInfo.online_cv;
    }
    const resumeLinkText = getCustomWebElement(
        "span", 
        {}, 
        [], 
        resumeLinkTextContent
    );
    const resumeLinkExternalIcon = getCustomWebElement(
        "i", 
        {
            "class": getIconClassesArray("external-link")
        }
    );
    const resumeLink = getCustomWebElement(
        "a", 
        {
            "class": ["resume-link"],
            "href": resumeLink_url,
            "target": "_blank"
        },
        [resumeLinkText, resumeLinkExternalIcon]
    );

    const contactInfoButton = getContactInfoButton(contactInfoContainer);

    const contactLinksContainer = getCustomWebElement(
        "div", 
        {
            "class": ["contact-links-container"]
        },
        [contactInfoButton, resumeLink]
    );

    return contactLinksContainer;
}