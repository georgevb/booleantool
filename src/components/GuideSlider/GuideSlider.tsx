import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { slides } from './slides';
import { Navigation } from './Navigation';
import { SlideContent } from './SlideContent';
import { FiArrowRight } from 'react-icons/fi';
import type { BaseSlide } from './types';

interface GuideSliderProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GuideSlider({ isOpen, onClose }: GuideSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const progress = ((currentSlide + 1) / slides.length) * 100;

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(curr => curr + 1);
    } else {
      onClose();
    }
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl h-[800px] flex flex-col">
                <div className="px-8 pt-6">
                  <Navigation 
                    slides={slides} 
                    currentSlide={currentSlide}
                    onSelect={setCurrentSlide}
                    progress={progress}
                  />
                </div>

                <div className="px-8 py-6 flex-1 overflow-y-auto">
                  <SlideContent
                    slide={slides[currentSlide]}
                    hoveredSection={hoveredSection}
                    onHoverSection={setHoveredSection}
                  />
                </div>

                <div className="px-8 pb-6 flex justify-between items-center border-t border-gray-100 bg-white">
                  <div className="text-sm text-gray-500">
                    {currentSlide + 1} van {slides.length}
                  </div>
                  <button
                    onClick={handleNext}
                    className="group bg-[#36b39a] text-white px-6 py-2 rounded-full hover:bg-[#2d9680] transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="text-sm font-medium">
                      {currentSlide === slides.length - 1 ? 'Aan de slag' : 'Volgende'}
                    </span>
                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}