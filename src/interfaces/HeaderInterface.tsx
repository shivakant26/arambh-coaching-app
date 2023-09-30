import { ReactNode } from "react";

export interface ISocialIcon {
    link:string,
    icon:ReactNode
}

export interface IMenu {
    slug?:string,
    menuLabel:string,
    icon?:ReactNode
}