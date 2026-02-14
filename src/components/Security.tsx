import { useEffect } from 'react';

/**
 * Security Component - Implements client-side security measures
 * - Disables right-click on images
 * - Prevents keyboard shortcuts for developer tools (optional)
 * - Adds context menu protection
 */
const Security = () => {
    useEffect(() => {
        // Disable right-click on entire document
        const handleContextMenu = (e: MouseEvent) => {
            // Only prevent on images and protected content
            const target = e.target as HTMLElement;
            if (target.tagName === 'IMG' || target.closest('.no-context-menu')) {
                e.preventDefault();
                return false;
            }
        };

        // Prevent drag start on images
        const handleDragStart = (e: DragEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'IMG') {
                e.preventDefault();
                return false;
            }
        };

        // Prevent common keyboard shortcuts for saving images and viewing source
        const handleKeyDown = (e: KeyboardEvent) => {
            // Prevent Ctrl+S (Save), Ctrl+Shift+I (DevTools - optional), Ctrl+U (View Source - optional)
            if (
                (e.ctrlKey && e.key === 's') || // Save
                (e.ctrlKey && e.key === 'S')    // Save
            ) {
                e.preventDefault();
                return false;
            }

            // Optional: Uncomment to disable dev tools shortcuts (may annoy developers)
            // if (
            //   (e.ctrlKey && e.shiftKey && e.key === 'I') || // DevTools
            //   (e.ctrlKey && e.shiftKey && e.key === 'J') || // Console
            //   (e.ctrlKey && e.key === 'U') || // View Source
            //   e.key === 'F12' // DevTools
            // ) {
            //   e.preventDefault();
            //   return false;
            // }
        };

        // Add watermark to console (fun security message)
        console.log(
            '%c🚫 Stop!',
            'color: #ff0000; font-size: 48px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);'
        );
        console.log(
            '%cThis is a browser feature intended for developers. If someone told you to copy-paste something here, it could be a scam.',
            'font-size: 16px; color: #333;'
        );
        console.log(
            '%c⚠️ All images and content are protected by copyright.',
            'font-size: 14px; color: #ff6b00; font-weight: bold;'
        );

        // Attach event listeners
        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('dragstart', handleDragStart);
        document.addEventListener('keydown', handleKeyDown);

        // Cleanup
        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('dragstart', handleDragStart);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return null; // This component doesn't render anything
};

export default Security;
