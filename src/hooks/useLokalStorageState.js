import {useState, useEffect} from "react";

export function useLokalStorageState(key, defaultValue) {
    const [state, setState] = useState(() => {
        const savedValue = localStorage.getItem(key);
        return savedValue ? JSON.parse(savedValue) : defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}