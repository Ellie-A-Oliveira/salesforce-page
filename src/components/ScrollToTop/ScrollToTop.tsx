import { useEffect } from "react";

interface ScrollToTopProps {
    children: React.ReactNode
}

export const ScrollToTop = ( {children}: ScrollToTopProps ) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return children;
    
}