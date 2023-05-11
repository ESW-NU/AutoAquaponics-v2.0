import { createContext } from "react";

/* A context for values relevant to a session of the control panel.
Consists of three parts:
 * remoteValues: the control values currently in Firebase. each key is a firebase document id and
   each value is an object representing that document. Null represents still loading data.
 * getValueAndStatus: gets the value to display in the control component (either the remote value, or the
   local delta if one is set), and a boolean for whether a local delta is set
 * dispatchLocalValueChange: the function that a control component should call to update the
   `localValues` object; automatically handles detecting when a value has changed back to its original state.
 * reloadRemoteValues: a function that reloads the remote values (duh)
*/
export const ControlValuesContext = createContext({
	remoteValues: null,
	localValues: {},
	getValueAndStatus: () => ({ v: null, s: false }),
	dispatchLocalValueChange: () => {},
	reloadRemoteValues: () => {},
});
