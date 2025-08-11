import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Calendar, 
  DollarSign, 
  ExternalLink,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react';

interface OngoingClass {
  id: string;
  name: string;
  currentLevel: string;
  nextLevel: string;
  subjects: string[];
  requirements: string[];
  duration: string;
  status: 'open' | 'limited' | 'closed';
}

interface FeeStructure {
  level: string;
  tuition: number;
  development: number;
  examination: number;
  other: number;
  total: number;
}

const StudentAdmissionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ongoing' | 'fees' | 'apply'>('ongoing');

  const ongoingClasses: OngoingClass[] = [
    {
      id: '1',
      name: 'Senior One (S.1)',
      currentLevel: 'Primary 7',
      nextLevel: 'Senior 2',
      subjects: ['Mathematics', 'English', 'Biology', 'Chemistry', 'Physics', 'History', 'Geography', 'Religious Education'],
      requirements: ['Primary 7 Certificate', 'Aggregate 4-20', 'Age 13-15 years'],
      duration: '1 Academic Year',
      status: 'open'
    },
    {
      id: '2',
      name: 'Senior Two (S.2)',
      currentLevel: 'Senior 1',
      nextLevel: 'Senior 3',
      subjects: ['Mathematics', 'English', 'Biology', 'Chemistry', 'Physics', 'History', 'Geography', 'Religious Education'],
      requirements: ['Senior 1 Report Card', 'Good academic standing', 'Age 14-16 years'],
      duration: '1 Academic Year',
      status: 'limited'
    },
    {
      id: '3',
      name: 'Senior Three (S.3)',
      currentLevel: 'Senior 2',
      nextLevel: 'Senior 4',
      subjects: ['Mathematics', 'English', 'Biology', 'Chemistry', 'Physics', 'History', 'Geography', 'Religious Education'],
      requirements: ['Senior 2 Report Card', 'Aggregate 4-20', 'Age 15-17 years'],
      duration: '1 Academic Year',
      status: 'open'
    },
    {
      id: '4',
      name: 'Senior Four (S.4)',
      currentLevel: 'Senior 3',
      nextLevel: 'Senior 5',
      subjects: ['Mathematics', 'English', 'Biology', 'Chemistry', 'Physics', 'History', 'Geography', 'Religious Education'],
      requirements: ['Senior 3 Report Card', 'Good academic standing', 'Age 16-18 years'],
      duration: '1 Academic Year',
      status: 'limited'
    },
    {
      id: '5',
      name: 'Senior Five (S.5)',
      currentLevel: 'Senior 4',
      nextLevel: 'Senior 6',
      subjects: ['Mathematics', 'English', 'Biology', 'Chemistry', 'Physics', 'History', 'Geography', 'Religious Education'],
      requirements: ['UCE Certificate', 'Aggregate 4-20', 'Age 17-19 years'],
      duration: '1 Academic Year',
      status: 'open'
    },
    {
      id: '6',
      name: 'Senior Six (S.6)',
      currentLevel: 'Senior 5',
      nextLevel: 'University',
      subjects: ['Mathematics', 'English', 'Biology', 'Chemistry', 'Physics', 'History', 'Geography', 'Religious Education'],
      requirements: ['UACE Certificate', 'Good academic standing', 'Age 18-20 years'],
      duration: '1 Academic Year',
      status: 'limited'
    }
  ];

  const feeStructure: FeeStructure[] = [
    {
      level: 'Senior 1-3',
      tuition: 150000,
      development: 50000,
      examination: 30000,
      other: 20000,
      total: 250000
    },
    {
      level: 'Senior 4',
      tuition: 180000,
      development: 60000,
      examination: 40000,
      other: 25000,
      total: 305000
    },
    {
      level: 'Senior 5-6',
      tuition: 200000,
      development: 70000,
      examination: 50000,
      other: 30000,
      total: 350000
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-800';
      case 'limited': return 'bg-yellow-100 text-yellow-800';
      case 'closed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'open': return 'Open for Admission';
      case 'limited': return 'Limited Spaces';
      case 'closed': return 'Admission Closed';
      default: return 'Unknown';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <GraduationCap className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Student Admissions
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Join St. Noa Mawagali Secondary School for Academic Excellence
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Quality Education</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Experienced Teachers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Modern Facilities</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="flex flex-wrap border-b border-gray-200">
            <button
              onClick={() => setActiveTab('ongoing')}
              className={`flex items-center space-x-2 px-6 py-4 font-medium ${
                activeTab === 'ongoing' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span>Ongoing Classes</span>
            </button>
            <button
              onClick={() => setActiveTab('fees')}
              className={`flex items-center space-x-2 px-6 py-4 font-medium ${
                activeTab === 'fees' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <DollarSign className="w-5 h-5" />
              <span>Fees Structure</span>
            </button>
            <button
              onClick={() => setActiveTab('apply')}
              className={`flex items-center space-x-2 px-6 py-4 font-medium ${
                activeTab === 'apply' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Apply Now</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'ongoing' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Available Classes</h2>
                  <p className="text-gray-600">Explore our ongoing classes and admission requirements</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {ongoingClasses.map((classItem) => (
                    <div key={classItem.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">{classItem.name}</h3>
                          <p className="text-gray-600 text-sm">
                            {classItem.currentLevel} → {classItem.nextLevel}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(classItem.status)}`}>
                          {getStatusText(classItem.status)}
                        </span>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Subjects Offered</h4>
                          <div className="flex flex-wrap gap-2">
                            {classItem.subjects.map((subject, index) => (
                              <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                                {subject}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
                          <ul className="space-y-1">
                            {classItem.requirements.map((requirement, index) => (
                              <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span>{requirement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span>{classItem.duration}</span>
                          </div>
                          {classItem.status === 'open' && (
                            <button
                              onClick={() => setActiveTab('apply')}
                              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                              Apply Now
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'fees' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Fees Structure</h2>
                  <p className="text-gray-600">Transparent fee structure for all academic levels</p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Level
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Tuition
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Development
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Examination
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Other
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {feeStructure.map((fee, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="font-medium text-gray-900">{fee.level}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                            {formatCurrency(fee.tuition)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                            {formatCurrency(fee.development)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                            {formatCurrency(fee.examination)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                            {formatCurrency(fee.other)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="font-semibold text-blue-600">
                              {formatCurrency(fee.total)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Notes</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Fees are payable per term (3 terms per year)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Payment plans are available for families in need</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Scholarships available for outstanding students</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>All fees include basic learning materials</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {activeTab === 'apply' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Apply for Admission</h2>
                  <p className="text-gray-600">Complete your application through our secure Google Forms</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Application Form */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="text-center mb-6">
                      <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Online Application</h3>
                      <p className="text-gray-600">Fill out our comprehensive application form</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-green-800">Secure and confidential</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span className="text-sm text-blue-800">Instant submission</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-purple-600" />
                        <span className="text-sm text-purple-800">Email confirmation</span>
                      </div>
                    </div>

                    <a
                      href="https://forms.google.com/your-form-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Start Application</span>
                    </a>
                  </div>

                  {/* Required Documents */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="text-center mb-6">
                      <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Required Documents</h3>
                      <p className="text-gray-600">Prepare these documents for your application</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-blue-600">1</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Personal Information</h4>
                          <p className="text-sm text-gray-600">Full names, date of birth, contact details</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-blue-600">2</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Academic Records</h4>
                          <p className="text-sm text-gray-600">Previous school reports and certificates</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-blue-600">3</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Subject & Grade</h4>
                          <p className="text-sm text-gray-600">Current subjects and grades achieved</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-blue-600">4</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Total Aggregates</h4>
                          <p className="text-sm text-gray-600">Overall academic performance score</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-blue-600">5</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Target Class</h4>
                          <p className="text-sm text-gray-600">Class you wish to join</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mt-8 bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Application Deadline</p>
                        <p className="text-sm text-gray-600">March 31, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Star className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Admission Office</p>
                        <p className="text-sm text-gray-600">st.noamawaggaliss@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAdmissionsPage;
