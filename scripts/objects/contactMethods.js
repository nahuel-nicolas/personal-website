import { personalInfo } from "./personalinfo.js";

export const contactMethods = [
    {
        "name": "email",
        "adress": personalInfo.email,
    },
    {
        "name": "linkedin",
        "adress": `https://www.linkedin.com/in/${personalInfo.linkedinName}/`,
    },
    {
        "name": "github",
        "adress": `https://github.com/${personalInfo.githubName}/`,
    },
    {
        "name": "phone",
        "adress": personalInfo.phone,
    }
];