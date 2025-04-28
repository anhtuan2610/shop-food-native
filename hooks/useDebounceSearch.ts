import { useEffect, useState } from "react"

export const useDebounceSearch = (searchString: string) => {
    const [debouncedString, setDebouncedString] = useState(searchString); 
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedString(searchString);
        }, 500);
        return () => clearTimeout(handler)
    }, [searchString])
    return debouncedString;
}
