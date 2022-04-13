import { FC, useReducer } from "react";
import { SideContext } from "./SideContext";
import { sidesReducer } from "./sideReducer";


export interface SideState {
    openDrawer: boolean;
}


export const SIDE_INITIAL = {
    openDrawer: false
}


export const SideProvider: FC = ({ children }) => {

    const [state,dispatch] = useReducer(sidesReducer, SIDE_INITIAL);

    const toggleDrawer = () => {
        dispatch({ type: "[Side] - Toggle Side Menu" })
    }

    return (
        <SideContext.Provider value={{
            ...state,
            toggleDrawer
        }}>
            { children }
        </SideContext.Provider>
    )
}