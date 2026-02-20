import React from "react";

const useFocusTrap = <T extends HTMLElement>(
  elementRef: React.RefObject<T | null>,
  isOpen: boolean,
  closeModal: () => void,
) => {
  React.useEffect(() => {
    if (!elementRef.current || !isOpen) return;

    const focusableSelectors =
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";
    const focusableElements = Array.from(
      elementRef.current.querySelectorAll<HTMLElement>(focusableSelectors),
    );

    if (!focusableElements.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Tab") return;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }

    const handleEscapeKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    elementRef.current.addEventListener("keydown", handleKeyDown);
    elementRef.current.addEventListener("keydown", handleEscapeKeyDown);
    firstElement.focus();

    return () => {
      elementRef.current?.removeEventListener("keydown", handleKeyDown);
      elementRef.current?.removeEventListener("keydown", handleEscapeKeyDown);
    };
  }, [elementRef, isOpen, closeModal]);
};

export default useFocusTrap;
