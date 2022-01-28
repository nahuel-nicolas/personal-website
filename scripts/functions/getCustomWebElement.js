export function getCustomWebElement(
    webElementType, attributes={}, children=[], text=null
) 
{
    const customWebElement = document.createElement(webElementType);
    for (const current_attr_name in attributes) {
        if (current_attr_name == "class" && Array.isArray(attributes[current_attr_name])) 
        {
            for (const current_attr_value of attributes[current_attr_name]) {
                customWebElement.classList.add(current_attr_value);
            }
        } else {
            const current_attr_value = attributes[current_attr_name];
            if (current_attr_name == "class") {
                customWebElement.classList.add(current_attr_value);
            }
            customWebElement.setAttribute(current_attr_name, current_attr_value);
        }
    }
    if (text !== null) {
        const currentTextNode = document.createTextNode(text);
        children.push(currentTextNode);
    }
    for (const currentChild of children) {
        customWebElement.appendChild(currentChild);
    }
    return customWebElement;
}