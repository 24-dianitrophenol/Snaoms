import React, { useState } from 'react';

const uceData = {
  2024: [
    { name: 'MUGISHA EDIMON', points: 20 },
    { name: 'EPAJA NELSON', points: 19 },
    { name: 'ISABIYIRE ROBIN', points: 19 },
    { name: 'KOMAGUN JORDAN', points: 18 },
    { name: 'MASABA ADRIAN FABIAN', points: 18 },
    { name: 'AYINZA MARIA SHALOM', points: 17 },
    { name: 'WALELA EMMANUEL', points: 17 },
    { name: 'SSEKATE RONALD WYCLIF', points: 17 },
    { name: 'SSEMPIJJA IBRAHIM', points: 17 },
    { name: 'OBOTH BENEDICT', points: 17 },
  ],
  2023: [
    { name: 'ODOI TIMON', points: 20 },
    { name: 'MENYA KUZAIFA', points: 19 },
    { name: 'OTIM DANIEL', points: 19 },
    { name: 'KAKOMO LILIAN MARTHA', points: 18 },
    { name: 'KAVULE JOHN BAPTIST', points: 18 },
    { name: 'SSEBULIBA WALTER', points: 17 },
    { name: 'SSENKUNGU BENJAMIN', points: 17 },
    { name: 'MULONDO YASIN', points: 17 },
    { name: 'MODINGHI JUNIOR MOSES', points: 17 },
    { name: 'ISABIYRE DAVID', points: 17 },
  ],
  2022: [
    { name: 'STUDENT A', points: 20 },
    { name: 'STUDENT B', points: 19 },
    { name: 'STUDENT C', points: 18 },
  ],
  2021: [
    { name: 'STUDENT D', points: 20 },
    { name: 'STUDENT E', points: 19 },
    { name: 'STUDENT F', points: 18 },
  ],
  2020: [
    { name: 'STUDENT G', points: 20 },
    { name: 'STUDENT H', points: 19 },
    { name: 'STUDENT I', points: 18 },
  ],
  2019: [
    { name: 'STUDENT J', points: 20 },
    { name: 'STUDENT K', points: 19 },
    { name: 'STUDENT L', points: 18 },
  ],
};

const uaceData = {
  2024: [
    { name: 'UACE STUDENT 1', points: 20 },
    { name: 'UACE STUDENT 2', points: 19 },
    { name: 'UACE STUDENT 3', points: 18 },
  ],
  2023: [
    { name: 'ODOI TIMON', points: 20 },
    { name: 'MENYA KUZAIFA', points: 19 },
    { name: 'OTIM DANIEL', points: 19 },
    { name: 'KAKOMO LILIAN MARTHA', points: 18 },
    { name: 'KAVULE JOHN BAPTIST', points: 18 },
    { name: 'SSEBULIBA WALTER', points: 17 },
    { name: 'SSENKUNGU BENJAMIN', points: 17 },
    { name: 'MULONDO YASIN', points: 17 },
    { name: 'MODINGHI JUNIOR MOSES', points: 17 },
    { name: 'ISABIYRE DAVID', points: 17 },
  ],
  2022: [
    { name: 'UACE STUDENT 4', points: 20 },
    { name: 'UACE STUDENT 5', points: 19 },
    { name: 'UACE STUDENT 6', points: 18 },
  ],
  2021: [
    { name: 'UACE STUDENT 7', points: 20 },
    { name: 'UACE STUDENT 8', points: 19 },
    { name: 'UACE STUDENT 9', points: 18 },
  ],
  2020: [
    { name: 'UACE STUDENT 10', points: 20 },
    { name: 'UACE STUDENT 11', points: 19 },
    { name: 'UACE STUDENT 12', points: 18 },
  ],
  2019: [
    { name: 'UACE STUDENT 13', points: 20 },
    { name: 'UACE STUDENT 14', points: 19 },
    { name: 'UACE STUDENT 15', points: 18 },
  ],
};

const yearsUCE = Object.keys(uceData).sort((a, b) => b.localeCompare(a));
const yearsUACE = Object.keys(uaceData).sort((a, b) => b.localeCompare(a));

const SchoolPerformancePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'UCE' | 'UACE'>('UCE');
  const [openYear, setOpenYear] = useState<string | null>(null);

  const data = activeTab === 'UCE' ? uceData : uaceData;
  const years = activeTab === 'UCE' ? yearsUCE : yearsUACE;

  return (
    <div className="min-h-screen bg-white text-gray-900 pb-16">
      <div className="container mx-auto px-4 pt-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 text-primary-600">Top Performers</h1>
        <p className="text-center text-gray-500 mb-8">Here is a compilation of most recent performances</p>
        <div className="flex justify-center mb-8">
          <div className="flex rounded-full bg-gray-200 p-1 w-fit">
            <button
              className={`px-6 py-1 rounded-full font-semibold transition-all duration-200 text-sm md:text-base ${activeTab === 'UCE' ? 'bg-primary-600 text-white' : 'text-primary-600'}`}
              onClick={() => setActiveTab('UCE')}
            >
              UCE
            </button>
            <button
              className={`px-6 py-1 rounded-full font-semibold transition-all duration-200 text-sm md:text-base ${activeTab === 'UACE' ? 'bg-primary-600 text-white' : 'text-primary-600'}`}
              onClick={() => setActiveTab('UACE')}
            >
              UACE
            </button>
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-primary-600">{activeTab} Results</h2>
          <div className="space-y-4">
            {years.map((year) => (
              <div key={year} className="bg-gray-100 rounded-xl shadow p-4">
                <button
                  className="w-full flex justify-between items-center text-lg font-semibold text-left text-primary-600 focus:outline-none"
                  onClick={() => setOpenYear(openYear === year ? null : year)}
                >
                  <span>{year}</span>
                  <span>{openYear === year ? '▲' : '▼'}</span>
                </button>
                {openYear === year && (
                  <div className="overflow-x-auto mt-4">
                    <table className="min-w-full text-left text-sm md:text-base">
                      <thead>
                        <tr className="border-b border-gray-300">
                          <th className="py-2 px-2 font-bold">No.</th>
                          <th className="py-2 px-2 font-bold">Name</th>
                          <th className="py-2 px-2 font-bold">Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data[year].map((student, idx) => (
                          <tr key={student.name} className="border-b border-gray-200 hover:bg-gray-200/60">
                            <td className="py-2 px-2">{idx + 1}.</td>
                            <td className="py-2 px-2 whitespace-nowrap">{student.name}</td>
                            <td className="py-2 px-2">{student.points}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolPerformancePage; 