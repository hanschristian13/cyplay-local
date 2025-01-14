import { useState, useEffect } from 'react';

interface TransitionProps {
  children: React.ReactNode;
  delay?: number;
}

const Transition: React.FC<TransitionProps> = ({ children, delay = 300 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
};

export default Transition;