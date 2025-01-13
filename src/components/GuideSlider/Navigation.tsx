import clsx from 'clsx';
import { FiChevronRight } from 'react-icons/fi';
import type { BaseSlide } from './types';

interface NavigationProps {
  slides: BaseSlide[];
  currentSlide: number;
  onSelect: (index: number) => void;
  progress: number;
}

export function Navigation({ slides, currentSlide, onSelect, progress }: NavigationProps) {
  return (
    <div className="relative">
      {/* Progress bar with water effect */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-0.5 bg-gray-100 -z-10">
        <div 
          className="h-full bg-[#36b39a] transition-all duration-500 ease-out relative"
          style={{ width: `${progress}%` }}
        >
          {/* Water wave effect */}
          <div 
            className="absolute inset-0 opacity-50"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
              animation: 'wave 2s linear infinite',
            }}
          />
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center">
        {slides.map((slide, index) => {
          const Icon = slide.icon;
          const isActive = currentSlide === index;
          const isLast = index === slides.length - 1;

          return (
            <div key={slide.id} className="flex items-center">
              <button
                onClick={() => onSelect(index)}
                className={clsx(
                  'flex items-center gap-2 py-2 px-4 rounded-lg transition-all relative group bg-white',
                  isActive ? 'text-[#36b39a] bg-[#36b39a]/5' : 'text-gray-600 hover:text-[#36b39a] hover:bg-[#36b39a]/5',
                  'text-sm font-medium'
                )}
              >
                <Icon 
                  size={16} 
                  className={clsx(
                    'transition-colors',
                    isActive ? 'text-[#36b39a]' : 'text-gray-400 group-hover:text-[#36b39a]'
                  )} 
                />
                <span className="whitespace-nowrap">{slide.title}</span>
              </button>
              {!isLast && (
                <FiChevronRight 
                  size={16} 
                  className="mx-2 text-gray-400" 
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}