import { ReactNode } from 'react';
import { Select } from './Select';
import { Button } from './Button';

interface LeadCardProps {
  title: string;
  icon: ReactNode;
  hasActions?: boolean;
}

export function LeadCard({ title, icon, hasActions }: LeadCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border-2 border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[#36b39a] text-xl">{icon}</span>
        <h3 className="text-black font-semibold text-[16.8px]">{title}</h3>
      </div>
      <Select className="mb-3">
        <option>Voeg een locatie toe</option>
      </Select>
      {hasActions && (
        <div className="flex gap-3">
          <Button className="flex-1">Reiken</Button>
          <Button className="flex-1">Locatie uitsluiten</Button>
        </div>
      )}
    </div>
  );
}