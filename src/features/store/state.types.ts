import { IconType } from "react-icons";

export interface SidebarLinkI {
    label: string,
    route: string,
    icon: IconType
}

export interface StateI {
    sidebarLinks: SidebarLinkI[]
}