import { useEffect, useRef, useState } from "react";

const LOCK_KEY = "isIdleLocked";

const useIdleLock = (timeout = 5 * 60 * 1000) => {
  const [isClient, setIsClient] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsClient(true); // Set true after mount
    const storedLock = localStorage.getItem(LOCK_KEY);
    if (storedLock === "true") {
      setIsLocked(true);
    }
  }, []);

  const triggerLock = () => {
    setIsLocked(true);
    localStorage.setItem(LOCK_KEY, "true");
  };

  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(triggerLock, timeout);
  };

  useEffect(() => {
    if (!isLocked) resetTimer();

    const events = ["mousemove", "keydown", "scroll", "click"];
    const resetOnActivity = () => {
      if (!isLocked) resetTimer();
    };

    events.forEach((event) =>
      window.addEventListener(event, resetOnActivity)
    );

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      events.forEach((event) =>
        window.removeEventListener(event, resetOnActivity)
      );
    };
  }, [isLocked]);

  const unlock = () => {
    setIsLocked(false);
    localStorage.removeItem(LOCK_KEY);
    resetTimer();
  };

  return { isLocked: isClient && isLocked, unlock };
};

export default useIdleLock;
