const initResize = () => {
    /**
     * Implement a function that handles JavaScript events. When the user clicks
     * and drags the `resize` node, its parent node `panel` should grow or shrink
     * vertically.
     */
    const panel = document.getElementById('panel');
    const resize = document.getElementById('resize');

    const handleMove = e => {
        const newHeight = window.innerHeight - e.pageY;
        panel.style.height = `${newHeight}px`;
    };

    resize.onmousedown = () => {
        document.addEventListener('mousemove', handleMove);
        document.onmouseup = () => {
            document.removeEventListener('mousemove', handleMove);
            document.onmouseup = null;
        };
    };
};

window.initResize = initResize;
export default initResize;
