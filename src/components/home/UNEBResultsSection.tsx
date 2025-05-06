import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users } from 'lucide-react';

const performerPlaceholder = 'images/placeholder.jpg'; // Replace with actual images if available

const topPerformers2025 = [
  { name: 'MUGISHA EDIMON', result: '8 As', img: performerPlaceholder },
  { name: 'EPAJA NELSON', result: '7 As', img: performerPlaceholder },
  { name: 'ISABIYIRE ROBIN', result: '6 As', img: performerPlaceholder },
  { name: 'KOMAGUN JORDAN', result: '6 As', img: performerPlaceholder },
  { name: 'MASABA ADRIAN FABIAN', result: '6 As', img: performerPlaceholder },
  { name: 'AYINZA MARIA SHALOM', result: '6 As', img: performerPlaceholder },
  { name: 'WALELA EMMANUEL', result: '5 As', img: performerPlaceholder },
  { name: 'SSEKATE RONALD WYCLIF', result: '5 As', img: performerPlaceholder },
  { name: 'SSEMPIJJA IBRAHIM', result: '20 points', img: performerPlaceholder },
  { name: 'OBOTH BENEDICT', result: '20 points', img: performerPlaceholder },
  { name: 'SSEKYANZI EDRINE ALLAN', result: '19 points', img: performerPlaceholder },
  { name: 'MUZAMBE HARUNA', result: '19 points', img: performerPlaceholder },
  { name: 'LUBANGA ANTHONY', result: '19 points', img: performerPlaceholder },
  { name: 'ALIA JOSEPH', result: '18 points', img: performerPlaceholder },
  { name: 'SSENDAGIRE GODFREY', result: '17 points', img: performerPlaceholder },
  { name: 'KADIMBA SOLOMON', result: '17 points', img: performerPlaceholder },
  { name: 'MUJUNI TIMOTHY KENETH', result: '17 points', img: performerPlaceholder },
  { name: 'NAKANYIKE REBECCA', result: '17 points', img: performerPlaceholder },
  { name: 'KIGGUNDU FAHIM', result: '17 points', img: performerPlaceholder },
  { name: 'MUGISHA BRIAN', result: '17 points', img: performerPlaceholder },
  { name: 'KASANVU LASTON', result: '17 points', img: performerPlaceholder },
  { name: 'MUKEYO WILLIAM', result: '17 points', img: performerPlaceholder },
];

const uce2024Grades = [
  { label: 'As', value: 160 },
  { label: 'Bs', value: 642 },
  { label: 'Cs', value: 848 },
  { label: 'Ds', value: 227 },
  { label: 'Es', value: 1 },
];

const results = [
  {
    year: '2023',
    passRate: '98.5%',
    topPerformers: [
      { name: 'Sarah Nakato', grade: 'A', points: '20' },
      { name: 'John Mukasa', grade: 'A', points: '19' },
      { name: 'Grace Namukasa', grade: 'A', points: '19' },
    ],
    highlights: 'Best performing school in the district',
  },
  {
    year: '2022',
    passRate: '97.8%',
    topPerformers: [
      { name: 'David Ssewanyana', grade: 'A', points: '20' },
      { name: 'Mary Nakato', grade: 'A', points: '19' },
      { name: 'Peter Wasswa', grade: 'A', points: '18' },
    ],
    highlights: 'Highest number of first grades in the region',
  },
  {
    year: '2021',
    passRate: '96.9%',
    topPerformers: [
      { name: 'James Muwonge', grade: 'A', points: '20' },
      { name: 'Ruth Nakato', grade: 'A', points: '19' },
      { name: 'Michael Ssebowa', grade: 'A', points: '19' },
    ],
    highlights: 'Outstanding performance in sciences',
  },
];

const UNEBResultsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 2025 Top Performers */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-primary-600 font-display">2025 Top Performers</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16">
          {topPerformers2025.map((student, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-4 md:p-6 mb-4 md:mb-0"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-primary-100 flex items-center justify-center mb-4">
                <img
                  src={student.img}
                  alt={student.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-bold text-lg text-center mb-1 text-primary-600">{student.name}</div>
              <div className="text-base text-center font-semibold text-primary-700">{student.result}</div>
            </div>
          ))}
        </div>

        {/* UCE 2024 NLSC Grade Summary */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-primary-600 font-display">UCE 2024</h2>
          <p className="text-gray-500 mb-6">Performance according to Grades</p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {uce2024Grades.map((grade, idx) => (
            <div key={idx} className="bg-primary-600 text-white rounded-2xl w-40 h-40 flex flex-col items-center justify-center shadow-lg">
              <span className="text-5xl font-bold mb-2">{grade.value}</span>
              <span className="text-xl font-bold">{grade.label}</span>
            </div>
          ))}
        </div>

        {/* Previous Years' Results */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-600 mb-4">
            UNEB Results Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our consistent track record of academic excellence in national examinations
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={result.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-primary-600">{result.year}</h3>
                <div className="flex items-center text-green-600">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  <span className="font-semibold">{result.passRate}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Top Performers</h4>
                <div className="space-y-3">
                  {result.topPerformers.map((performer, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-primary-600 mr-2" />
                        <span className="font-medium">{performer.name}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-bold text-primary-600 mr-2">{performer.grade}</span>
                        <span className="text-gray-600">({performer.points} points)</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-2" />
                <p className="text-sm">{result.highlights}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UNEBResultsSection; 