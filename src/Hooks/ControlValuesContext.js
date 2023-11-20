import { createContext } from "react";

/* ctrlVals is of the form { remote, local }.
The remote values are the control values currently in Firebase. each key is a firebase document id
and each value is an object representing that document. Null represents still loading data.
The local values are the control values in the current control panel session that are different from
the remote values. Local cannot be null. */

/* gets the value to display in the control component (either the remote value, or the
local value if one is set), and a boolean for whether a local value is set */
export const getValueAndStatus = (ctrlVals, document, field) => ({
	v: ctrlVals.local[document]?.[field] ?? ctrlVals.remote?.[document]?.[field] ?? null, // null is the most sensible default until the remote values have been retrieved
	s: ctrlVals.local.hasOwnProperty(document) && ctrlVals.local[document].hasOwnProperty(field),
});

/* A context for values relevant to a session of the control panel.
Consists of three parts:
 * ctrlVals: an object representing the control values (see above)
 * dispatchCtrlVals: the function that a control component should call to update the
	 ctrlVals object; automatically handles detecting when a local value has change to be equivalent
	 to the corresponding remote value.
 * reloadRemoteValues: a function that reloads the remote values (duh). Takes a boolean for whether
	 the local values should be discarded too.
*/
export const ControlValuesContext = createContext({
	ctrlVals: { remote: {}, local: {} },
	dispatchCtrlVals: () => {},
	reloadRemoteValues: () => {},
});

/*
types of action:
 * "discard_local": no arguments; discards all local values
 * "set_local": sets local[document][field] = newValue, unless it's the same as the corresponding
	 remote value, in which case it deletes
 * "set_remote": sets remote to newRemote
 * "discard_remote": same as "set_remote" with {}
 * "update_remote": sets remote to newRemote
*/
export const ctrlValsReducer = (oldCtrlVals, action) => {
	switch (action.type) {
		case "discard_local": {
			return { remote: oldCtrlVals.remote, local: {} };
		}
		case "set_local": {
			const { remote, local: oldLocal } = oldCtrlVals;
			const { document, field, newValue } = action;
			const newLocal = structuredClone(oldLocal);
			if (remote?.[document]?.[field] === newValue) {
				if (newLocal.hasOwnProperty(document) && newLocal[document].hasOwnProperty(field)) {
					delete newLocal[document][field];
					if (Object.keys(newLocal[document]).length === 0) {
						delete newLocal[document];
					}
				}
			} else {
				newLocal[document] = { ...newLocal[document], [field]: newValue};
			}
			return { remote, local: newLocal };
		}
		case "discard_remote": {
			return { remote: null, local: oldCtrlVals.local };
		}
		case "set_remote": {
			const { newRemote } = action;
			return { remote: newRemote, local: oldCtrlVals.local };
		}
		case "update_remote": {
			const { local: oldLocal } = oldCtrlVals;
			const { remote: oldRemote } = oldCtrlVals;
			const { newRemote: newRemoteChanges } = action;
			const newLocal = structuredClone(oldLocal);
			const newRemote = structuredClone(oldRemote);
			for (const document in newRemoteChanges) {
				newRemote[document] = newRemoteChanges[document];
			}
			for (const document in newLocal) {
				for (const field in newLocal[document]) {
					if (newRemote?.[document]?.[field] === newLocal[document][field]) {
						delete newLocal[document][field];
					}
				}
				if (Object.keys(newLocal[document]).length === 0) {
					delete newLocal[document];
				}
			}
			return { remote: newRemote, local: newLocal };
		}
		default: {
			return oldCtrlVals;
		}
	}
}
