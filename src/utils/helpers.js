import {useState} from "react";


export function isObject(item) {
	return (item && typeof item === 'object' && !Array.isArray(item));
}

export default function mergeDeep(target, source) {
	let output = Object.assign({}, target);
	if (isObject(target) && isObject(source)) {
		Object.keys(source).forEach(key => {
			if (isObject(source[key])) {
				if (!(key in target))
					Object.assign(output, { [key]: source[key] });
				else
					output[key] = mergeDeep(target[key], source[key]);
			} else {
				Object.assign(output, { [key]: source[key] });
			}
		});
	}
	return output;
}

export function useMergeState(initialState) {
	const [state, setState] = useState(initialState);
	const setMergedState = newState =>
		setState(prevState => Object.assign({}, mergeDeep(prevState, newState)));
	return [state, setMergedState];
}