import { FiSearch } from 'react-icons/fi';

interface SearchExampleProps {
  content: {
    filters: Array<{
      label: string;
      value: string;
    }>;
  };
}

export function SearchExample({ content }: SearchExampleProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="space-y-4">
        {content.filters.map((filter, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <div className="w-32 text-sm font-medium text-gray-500">{filter.label}</div>
            {filter.label === "Trefwoorden" ? (
              <div className="flex-1 flex flex-wrap gap-2">
                {filter.value.split(', ').map((keyword, kidx) => (
                  <div key={kidx} className="inline-flex items-center">
                    <span className="px-2 py-1 bg-[#36b39a]/10 text-[#36b39a] rounded-md text-sm">
                      {keyword}
                    </span>
                    {kidx < filter.value.split(', ').length - 1 && (
                      <span className="mx-2 text-gray-400 font-medium">AND</span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex-1 p-2 bg-gray-50 rounded text-sm text-gray-900">
                {filter.value}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between text-sm">
        <div className="text-gray-500">
          <span className="font-medium">Steekproef:</span> 25 resultaten
        </div>
        <div className="text-[#36b39a]">
          <span className="font-medium">Nauwkeurigheid:</span> 92%
        </div>
      </div>
    </div>
  );
}