import { createContext } from "react";

interface ISideContext {
    openDrawer: boolean;

    toggleDrawer: () => void;
}

export const SideContext = createContext({} as ISideContext);