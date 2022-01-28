export function getSectionalWebContainers (sections) {
    const sectionalWebContainers = {};
    for (const section of sections) {
        sectionalWebContainers[section] = document.getElementById(section).querySelector(".container");
    }
    return sectionalWebContainers;   
}