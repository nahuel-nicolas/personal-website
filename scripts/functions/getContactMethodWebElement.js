import { getCustomWebElement } from "./getCustomWebElement.js";
import { getIconClassesArray } from "./getIconClassesArray.js";
import { capitalizeFirstLetter } from "./capitalizeFirstLetter.js";

export function getContactMethodWebElement(contactMethod) {
    const contactMethodIcon = getCustomWebElement(
        "i", 
        {"class": getIconClassesArray(contactMethod.name, 2)}
    );
    const contactMethodTitle = getCustomWebElement(
        "span", 
        {"class": "contact-method-title"},
        [], 
        capitalizeFirstLetter(contactMethod.name)
    );
    const contact_method_adress_span = getCustomWebElement(
        "span", 
        {"class": "contact-method-adress"},
        [],
        contactMethod.adress
    );
    const contactMethodSpanContainer = getContactMethodSpanContainer(
        contactMethod, contactMethodTitle, contact_method_adress_span
    );
    const contactMethodWebElement = getCustomWebElement(
        "div", 
        {"class": "contact-method"},
        [contactMethodIcon, contactMethodSpanContainer],
    );
    return contactMethodWebElement;
}

function getContactMethodSpanContainer(
    contactMethod, contactMethodTitle, contact_method_adress_span
) 
{
    let contactMethodSpanContainer;
    if (contactMethod.name === "phone") {
        contactMethodSpanContainer = getCustomWebElement(
            "div", 
            {"class": "contact-method-span-container"},
            [contactMethodTitle, contact_method_adress_span],
        );

    } else if (contactMethod.name === "email") {
        const contact_method_adress_url = getCustomWebElement(
            "a", 
            {
                "class": ["contact-method-adress-url"], 
                "href": "mailto:"+contactMethod.adress, 
                "target": "_blank"
            },
            [contact_method_adress_span]
        );
        contactMethodSpanContainer = getCustomWebElement(
            "div", 
            {"class": "contact-method-span-container"},
            [contactMethodTitle, contact_method_adress_url],
        );
    } else {
        const external_link_icon = getCustomWebElement(
            "i", 
            {"class": getIconClassesArray("external-link")}
        );
        const contact_method_adress_url = getCustomWebElement(
            "a", 
            {
                "class": ["contact-method-adress-url"], 
                "href": contactMethod.adress, 
                "target": "_blank"
            },
            [contact_method_adress_span, external_link_icon]
        );
        contactMethodSpanContainer = getCustomWebElement(
            "div", 
            {"class": "contact-method-span-container"},
            [contactMethodTitle, contact_method_adress_url],
        );
    }
    return contactMethodSpanContainer;
}