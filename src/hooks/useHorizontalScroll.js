import { useRef, useEffect } from 'react';

/* 
    This custom hook 'useHorizontalScroll' is used to implement horizontal scrolling feature in a React component.
    It takes a reference to the DOM element as an input and attaches event listeners to handle mouse events 
    (mousedown, mouseup and mousemove) to calculate and update the position of the element based on the mouse movement.
    It returns a cleanup function to remove the event listeners when the component is unmounted.
*/
const useHorizontalScroll = (elementRef) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollSection = elementRef.current;
        const handleMouseDown = (event) => {
            event.preventDefault();
            scrollRef.current = {
                x: event.clientX,
                y: event.clientY,
                scrollLeft: scrollSection.scrollLeft,
            };
        };
        const handleMouseUp = () => {
            scrollRef.current = null;
        };
        const handleMouseMove = (event) => {
            if (!scrollRef.current) return;
            const deltaX = event.clientX - scrollRef.current.x;
            scrollSection.scrollLeft = scrollRef.current.scrollLeft - deltaX;
        };

        scrollSection.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            scrollSection.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [elementRef]);
};

export default useHorizontalScroll;
