import { FiPlus } from 'react-icons/fi';
import { Button } from './Button';
import { Select } from './Select';

export function FilterBar() {
  return (
    <div className="flex flex-wrap items-center gap-4 p-6">
      <Button variant="primary" className="flex items-center gap-2">
        <FiPlus className="text-xl" />
        <span>Nieuw</span>
      </Button>
      <Button>LinkedIn zoekopdrach</Button>
      <Button>Doelgroeplijst</Button>
      <Button>Zoekgeschiedenis</Button>
      <div className="ml-auto">
        <Select>
          <option>Laad zoekopdrachtie in</option>
        </Select>
      </div>
    </div>
  );
}