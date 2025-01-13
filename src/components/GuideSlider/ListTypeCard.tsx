import { FiCheck } from 'react-icons/fi';

interface ListTypeCardProps {
  title: string;
  items: string[];
}

export function ListTypeCard({ title, items }: ListTypeCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="font-medium text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#36b39a]/10 flex items-center justify-center mt-0.5">
              <FiCheck className="text-[#36b39a] w-3 h-3" />
            </div>
            <span className="text-gray-600 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}