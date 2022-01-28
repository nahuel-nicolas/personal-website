import { iconNamesToSimpleIconClasses } from "../objects/iconNamesToSimpleIconClasses.js";

export function getIconClassesArray(iconName, size=null) {
    const currentIconClassesArray = iconNamesToSimpleIconClasses[iconName].slice();
    if (size !== null) {
        const iconClassSize = `fa-${size}x`;
        currentIconClassesArray.push(iconClassSize);
    }
    return currentIconClassesArray;
}