import { useState } from "react";

export const useMap = (initial = {}) => {
    const [map, setMap] = useState(initial);
    const set = (key, value) => {
        setMap({
            ...map,
            [key]: {
                value,
                valid: true
            }
        })
    }
    return [
        map,
        set
    ]
}