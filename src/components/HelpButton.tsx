import { useState } from 'react';
import { FiHelpCircle } from 'react-icons/fi';
import { GuideSlider } from './GuideSlider/index';

export function HelpButton() {
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsGuideOpen(true)}
        className="fixed left-6 bottom-6 text-[#36b39a] hover:text-[#2d9680] transition-colors"
      >
        <FiHelpCircle size={32} />
      </button>

      <GuideSlider 
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </>
  );
}