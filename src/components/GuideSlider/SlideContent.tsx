import { FiInfo, FiCheck } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { ListTypeCard } from './ListTypeCard';
import { SearchExample } from './SearchExample';
import { FlowExample } from './FlowExample';
import { BooleanExample } from './BooleanExample';
import { ResultsPreview } from './ResultsPreview';
import type { BaseSlide } from './types';

interface SlideContentProps {
  slide: BaseSlide;
  hoveredSection: string | null;
  onHoverSection: (id: string | null) => void;
}

export function SlideContent({ slide, hoveredSection, onHoverSection }: SlideContentProps) {
  const renderHoverContent = () => {
    const detail = slide.details.find((_, index) => hoveredSection === `${slide.id}-${index}`);
    if (!detail) return null;

    if (detail.content) {
      return (
        <div className="prose prose-sm max-w-none">
          <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
            {detail.content}
          </div>
        </div>
      );
    }

    if (detail.items) {
      return (
        <motion.ul 
          className="space-y-3"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
        >
          {detail.items.map((item, idx) => (
            <motion.li 
              key={idx} 
              className="flex items-start gap-3"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#36b39a]/10 flex items-center justify-center mt-0.5">
                <FiCheck className="text-[#36b39a] w-3 h-3" />
              </div>
              <span className="text-gray-600 text-sm">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      );
    }

    return null;
  };

  const renderPreview = () => {
    if (!slide.preview) return null;

    switch (slide.preview.type) {
      case 'search':
        return <SearchExample content={slide.preview.content} />;
      case 'flow':
        return <FlowExample content={slide.preview.content} />;
      case 'boolean':
        return <BooleanExample content={slide.preview.content} />;
      case 'results':
        return <ResultsPreview />;
      default:
        return null;
    }
  };

  if (slide.id === 'list-type') {
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-1">{slide.title}</h2>
          <p className="text-gray-500 text-sm">{slide.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <ListTypeCard 
            title="Begin met een bedrijvenlijst als je:"
            items={[
              "Schonere data wilt",
              "Specifieke bedrijfsprofielen zoekt",
              "De juiste beslissers wilt vinden"
            ]}
          />
          <ListTypeCard 
            title="Begin direct met een leadlijst als je:"
            items={[
              "Specifieke functies zoekt",
              "Breed binnen een regio zoekt",
              "Snel een markt wilt verkennen"
            ]}
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-3">
            {slide.details.map((detail, index) => (
              <button
                key={index}
                onMouseEnter={() => onHoverSection(`${slide.id}-${index}`)}
                onMouseLeave={() => onHoverSection(null)}
                className={`w-full text-left p-4 rounded-xl transition-all border-2 ${
                  hoveredSection === `${slide.id}-${index}`
                    ? 'border-[#36b39a] bg-[#36b39a]/5'
                    : 'border-gray-100 hover:border-[#36b39a]/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <FiInfo 
                    size={18} 
                    className={`transition-colors ${
                      hoveredSection === `${slide.id}-${index}`
                        ? 'text-[#36b39a]'
                        : 'text-gray-400'
                    }`}
                  />
                  <span className="font-medium text-gray-900">{detail.title}</span>
                </div>
              </button>
            ))}
          </div>
          <div className="relative min-h-[200px]">
            <AnimatePresence mode="wait">
              {hoveredSection ? (
                <motion.div
                  key={hoveredSection}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  {renderHoverContent()}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full"
                >
                  {renderPreview()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-1">{slide.title}</h2>
        <p className="text-gray-500 text-sm">{slide.subtitle}</p>
      </div>

      {slide.content && (
        <p className="text-gray-600 text-sm leading-relaxed">{slide.content}</p>
      )}

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-3">
          {slide.details.map((detail, index) => (
            <button
              key={index}
              onMouseEnter={() => onHoverSection(`${slide.id}-${index}`)}
              onMouseLeave={() => onHoverSection(null)}
              className={`w-full text-left p-4 rounded-xl transition-all border-2 ${
                hoveredSection === `${slide.id}-${index}`
                  ? 'border-[#36b39a] bg-[#36b39a]/5'
                  : 'border-gray-100 hover:border-[#36b39a]/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <FiInfo 
                  size={18} 
                  className={`transition-colors ${
                    hoveredSection === `${slide.id}-${index}`
                      ? 'text-[#36b39a]'
                      : 'text-gray-400'
                  }`}
                />
                <span className="font-medium text-gray-900">{detail.title}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            {hoveredSection ? (
              <motion.div
                key={hoveredSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                {renderHoverContent()}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full"
              >
                {renderPreview()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}