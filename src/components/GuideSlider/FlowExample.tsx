import { FiArrowRight } from 'react-icons/fi';

interface FlowExampleProps {
  content: string[];
}

export function FlowExample({ content }: FlowExampleProps) {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      {content.map((step, idx) => (
        <div key={idx} className="flex items-center">
          <div className="flex items-center gap-2 bg-white rounded-lg shadow-sm px-3 py-2 border border-gray-100">
            <div className="w-5 h-5 rounded-full bg-[#36b39a]/10 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-medium text-[#36b39a]">{idx + 1}</span>
            </div>
            <span className="text-sm text-gray-900">{step}</span>
          </div>
          {idx < content.length - 1 && (
            <FiArrowRight className="text-gray-400 mx-3 animate-pulse" />
          )}
        </div>
      ))}
    </div>
  );
}