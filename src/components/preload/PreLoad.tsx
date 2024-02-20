import { useEffect, useState } from 'react';

const PreLoad = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Set a timeout for 2 seconds (adjust as needed)

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`preload absolute inset-0 flex items-center justify-center transition-all duration-3000 ${
        isVisible ? 'opacity-100' : 'opacity-0 -translate-y-full'
      }`}
    >
      PreLoad
    </div>
  );
};

export default PreLoad;
