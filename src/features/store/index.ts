import { create } from "zustand";
import { type StateI, type SidebarLinkI } from "./state.types.ts";
import { type ActionsI } from "./actions.types.ts";
import { FaGear, FaHouse } from "react-icons/fa6";

type StoreT = StateI & ActionsI;

const sidebarLinksMock: SidebarLinkI[] = [
    {
        label: "Dashboard",
        route: "/dashboard",
        icon: FaHouse
    },
    {
        label: "Settings",
        route: "/settings",
        icon: FaGear
    },
];

const useStore = create<StoreT>((): StoreT => ({
    sidebarLinks: sidebarLinksMock
}));

export default useStore;