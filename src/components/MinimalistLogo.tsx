import React from 'react';

interface MinimalistLogoProps {
  size?: number;
  className?: string;
}

const MinimalistLogo: React.FC<MinimalistLogoProps> = ({ 
  size = 40, 
  className = ''
}) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Base container with modern gradient background */}
      <div className="absolute inset-0 rounded-lg overflow-hidden" 
           style={{ 
             background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #d946ef)',
             boxShadow: '0 8px 16px rgba(99, 102, 241, 0.25)'
           }}>
      </div>
      
      {/* Glass effect overlay */}
      <div className="absolute inset-0 opacity-70" 
           style={{
             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, transparent 100%)',
             borderRadius: 'inherit'
           }}>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute" 
           style={{
             width: size * 0.25,
             height: size * 0.25,
             borderRadius: '50%',
             background: 'rgba(255, 255, 255, 0.4)',
             top: size * 0.15,
             left: size * 0.15
           }}>
      </div>
      
      <div className="absolute" 
           style={{
             width: size * 0.3,
             height: size * 0.3,
             borderRadius: '50%',
             background: 'rgba(255, 255, 255, 0.25)',
             bottom: size * 0.1,
             right: size * 0.1
           }}>
      </div>
      
      {/* Modern star icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg 
          width={size * 0.6} 
          height={size * 0.6} 
          viewBox="0 0 24 24" 
          fill="white" 
          stroke="none"
          style={{
            filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.2))'
          }}
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
    </div>
  );
};

export default MinimalistLogo;
