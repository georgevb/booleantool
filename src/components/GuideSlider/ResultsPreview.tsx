import { FiUser, FiMail, FiMessageSquare, FiLinkedin, FiCheck } from 'react-icons/fi';

export function ResultsPreview() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#36b39a] to-[#2d9680] flex items-center justify-center text-white text-xl font-medium">
            JD
          </div>
          <div>
            <h3 className="font-medium text-gray-900">John Doe</h3>
            <p className="text-sm text-gray-500">Marketing Manager @ TechCorp</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-flex items-center gap-1 text-xs bg-[#36b39a]/10 text-[#36b39a] px-2 py-1 rounded-full">
                <FiCheck size={12} />
                Match score: 95%
              </span>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-[#0077b5] transition-colors">
              <FiLinkedin size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-blue-500 transition-colors">
              <FiMail size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-[#36b39a] transition-colors">
              <FiMessageSquare size={20} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-gray-500 mb-1">Functie</div>
            <div className="font-medium">Marketing Manager</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-gray-500 mb-1">Branche</div>
            <div className="font-medium">Software & IT</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-gray-500 mb-1">Locatie</div>
            <div className="font-medium">Amsterdam</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="text-3xl font-semibold text-[#36b39a] mb-2">152</div>
          <div className="text-sm text-gray-500">Leads gevonden</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="text-3xl font-semibold text-[#36b39a] mb-2">95%</div>
          <div className="text-sm text-gray-500">Match score</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="text-3xl font-semibold text-[#36b39a] mb-2">48%</div>
          <div className="text-sm text-gray-500">Response rate</div>
        </div>
      </div>
    </div>
  );
}