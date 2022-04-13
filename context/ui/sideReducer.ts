import { SideState } from "./SideProvider"


type SideActionType =
| { type: '[Side] - Toggle Side Menu'}


export const sidesReducer = (state: SideState, action: SideActionType) => {
    switch (action.type) {

        case '[Side] - Toggle Side Menu':
            return {
                ...state,
                openDrawer: !state.openDrawer
            }

        default:
            return state
    }
}