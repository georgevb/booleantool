interface BooleanExampleProps {
  content: {
    operators: Array<{
      type: string;
      description: string;
      example: string;
    }>;
  };
}

export function BooleanExample({ content }: BooleanExampleProps) {
  return (
    <div className="space-y-6">
      {content.operators.map((op, idx) => (
        <div key={idx} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-medium text-gray-900">{op.type}</span>
            <span className="text-sm text-gray-600">{op.description}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {op.example.split(' ').map((word, widx) => {
              const isOperator = ['AND', 'OR', 'NOT', '(', ')'].includes(word);
              return (
                <span
                  key={widx}
                  className={`px-2 py-1 rounded-md text-sm ${
                    isOperator
                      ? 'bg-gray-200 text-gray-700 font-medium'
                      : 'bg-[#36b39a]/10 text-[#36b39a]'
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}