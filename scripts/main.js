import { getContactInfoTabContainer } from "./functions/getContactInfoTabContainer.js";
import { loadContactInfoButtonInNavbar } from "./functions/loadContactInfoButtonInNavbar.js";
import { loadMainContactLinksContainers } from "./functions/loadMainContactLinksContainers.js";
import { loadSectionalWebElementsInSectionalWebContainers } from "./functions/loadSectionalWebElementsInSectionalWebContainers.js";

const contactInfoTabContainer = getContactInfoTabContainer();
loadContactInfoButtonInNavbar(contactInfoTabContainer);
loadMainContactLinksContainers(contactInfoTabContainer);
loadSectionalWebElementsInSectionalWebContainers();
