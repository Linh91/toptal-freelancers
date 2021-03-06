import { Action } from '@ngrx/store';

export interface AppState {
    freelancers : Array<IFreelancer>
}

export interface IFreelancer {
    name: string,
    email: string,
}

export const ACTIONS = {
    LOAD_FREELANCERS: 'LOAD_FREELANCERS',
    INCOMMING_DATA: 'INCOMMING_DATA',
    DELETE_FREELANCER: 'DELETE_FREELANCER',
}

export function freelancersReducer(
    state: Array<IFreelancer> = [],
    action: Action): Array<IFreelancer> {
    switch (action.type) {
        case ACTIONS.INCOMMING_DATA:
            action.payload.DELETE.forEach((index) => {
                state.splice(state.indexOf(action.payload), 1);
            })
            return Array.prototype.concat(action.payload.ADD, state);
        case ACTIONS.FREELANCERS_LOADED:
            // Return the new state with the payload as freelancers list
            return Array.prototype.concat(action.payload);
        case ACTIONS.DELETE_FREELANCER:
            // Remove the element from the array
            state.splice(state.indexOf(action.payload), 1);
            // We need to create another reference
            return Array.prototype.concat(state);
        default:
            return state;
    }
}
// function will be called each time an action is dispatched through the store. 
// important to create a new array from the old one in order to have a new immutable state

