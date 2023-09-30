import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { IOurCourse, IQuickLink } from "../interfaces/FooterInterface";
import { IMenu, ISocialIcon } from "../interfaces/HeaderInterface";
import { MdOutlineArrowDropDown } from "react-icons/md";

// header
export const socialIcon: ISocialIcon[] = [
    {
      link: "",
      icon: <FaFacebookF />,
    },
    {
      link: "",
      icon: <FaTwitter />,
    },
    {
      link: "",
      icon: <FaLinkedinIn />,
    },
    {
      link: "",
      icon: <FaInstagram />,
    },
    {
      link: "",
      icon: <FaYoutube />,
    },
  ];

  export const siteMenu: IMenu[] = [
    {
      slug: "/",
      menuLabel: "home",
    },
    {
      slug: "/about",
      menuLabel: "about",
    },
    {
      slug: "/course",
      menuLabel: "course",
    },
    {
      menuLabel: "page",
      icon: <MdOutlineArrowDropDown />,
    },
    {
      slug: "/contact",
      menuLabel: "contact",
    },
  ];

// footer

export const quickLink: IQuickLink[] = [
  {
    link: "",
    label: "privecy policy",
  },
  {
    link: "",
    label: "terms & condition",
  },
  {
    link: "",
    label: "regular FAQS",
  },
  {
    link: "",
    label: "Help & Support",
  },
  {
    link: "",
    label: "Contact",
  },
];

export const ourCourse: IOurCourse[] = [
  {
    link: "",
    courseName: "web desing",
  },
  {
    link: "",
    courseName: "apps desing",
  },
  {
    link: "",
    courseName: "marketing",
  },
  {
    link: "",
    courseName: "research",
  },
  {
    link: "",
    courseName: "seo",
  },
];


