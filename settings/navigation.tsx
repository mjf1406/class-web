/** @format */
import { Mail } from "lucide-react";
import { BsTwitterX, BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

export const NAV_LINKS = [
    {
        title: "Home",
        href: "#hero",
        external: false,
    },
    {
        title: "Features",
        href: "#features",
        external: false,
    },
    {
        title: "Pricing",
        href: "#pricing",
        external: false,
    },
    {
        title: "FAQ",
        href: "#faq",
        external: false,
    },
];
export const PRODUCT_LINKS = [
    { href: "#features", text: "Features" },
    { href: "#pricing", text: "Pricing" },
    { href: "#hero", text: "Home" },
    { href: "#change-log", text: "Changelog" },
];

export const RESOURCE_LINKS = [
    { href: "https://docs.classquest.app", text: "Documentation" },
    { href: "https://blog.classquest.app", text: "Blog" },
    { href: "https://docs.classquest.app/guides", text: "Guides" },
    { href: "https://status.classquest.app", text: "Status" },
];

export const SOCIAL_LINKS = [
    {
        icon: <BsTwitterX className="h-5 w-5" />,
        href: "https://X.com/classquest",
    },
    {
        icon: <BsGithub className="h-5 w-5" />,
        href: "https://github.com/classquest",
    },
    {
        icon: <BsLinkedin className="h-5 w-5" />,
        href: "https://linkedin.com/company/classquest",
    },
    {
        icon: <BsYoutube className="h-5 w-5" />,
        href: "https://youtube.com/classquest",
    },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:hello@classquest.app" },
];
