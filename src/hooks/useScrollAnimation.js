import { useState, useEffect } from 'react';

export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Проверяем видимость элементов
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementIndex = element.dataset.index;

        // Элемент появляется когда он на 20% видим в окне
        if (rect.top < windowHeight * 0.8) {
          setIsVisible(prev => ({
            ...prev,
            [elementIndex]: true
          }));

          // Добавляем CSS класс для анимации
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Проверяем начальное состояние

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, isVisible };
}; 