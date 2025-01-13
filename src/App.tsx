import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { LeadCard } from './components/LeadCard';
import { HelpButton } from './components/HelpButton';
import { FiMapPin, FiTarget, FiFilter, FiPieChart, FiUsers, FiBriefcase, FiDatabase, FiLayers } from 'react-icons/fi';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="max-w-[1440px] mx-auto">
        <FilterBar />
        
        <div className="p-6">
          <h2 className="text-white font-normal text-[19.2px] mb-6">Leads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <LeadCard 
              title="Persoonlijke locatie" 
              icon={<FiMapPin />}
              hasActions
            />
            <LeadCard 
              title="Bedrijflocatie" 
              icon={<FiTarget />} 
            />
            <LeadCard 
              title="Bedrijftype inclusies" 
              icon={<FiFilter />} 
            />
            <LeadCard 
              title="Bedrijfgrootte" 
              icon={<FiPieChart />} 
            />
            <LeadCard 
              title="Team samenstelling" 
              icon={<FiUsers />} 
            />
            <LeadCard 
              title="Functie niveau" 
              icon={<FiBriefcase />} 
            />
            <LeadCard 
              title="Data bronnen" 
              icon={<FiDatabase />} 
            />
            <LeadCard 
              title="Technologie stack" 
              icon={<FiLayers />} 
            />
          </div>
        </div>
      </main>
      <HelpButton />
    </div>
  );
}

export default App;