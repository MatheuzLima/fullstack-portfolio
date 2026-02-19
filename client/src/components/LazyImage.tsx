import React, { useState, useEffect } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
}

/**
 * Componente para lazy loading de imagens
 * Melhora performance ao carregar imagens sob demanda
 */
export const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23333" width="400" height="300"/%3E%3C/svg%3E',
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [ref, setRef] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    
    if (ref && imageSrc === placeholder) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '50px' }
      );
      
      observer.observe(ref);
    }

    return () => {
      if (observer && ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, imageSrc, placeholder, src]);

  return (
    <img
      {...props}
      ref={setRef}
      src={imageSrc}
      alt={alt}
      loading="lazy"
    />
  );
};

export default LazyImage;
