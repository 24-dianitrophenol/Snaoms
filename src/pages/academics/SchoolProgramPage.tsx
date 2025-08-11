import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  BookOpen, 
  Users, 
  Target,
  CheckCircle,
  Star
} from 'lucide-react';

interface TermPlan {
  id: string;
  term: string;
  startDate: string;
  endDate: string;
  description: string;
  activities: string[];
}

interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  category: 'academic' | 'sports' | 'cultural' | 'religious';
  targetAudience: string;
}

const SchoolProgramPage: React.FC = () => {
  const [termPlans, setTermPlans] = useState<TermPlan[]>([]);
  const [schoolEvents, setSchoolEvents] = useState<SchoolEvent[]>([]);
  const [activeTab, setActiveTab] = useState<'terms' | 'events'>('terms');

  useEffect(() => {
    // Load data from localStorage (set by admin)
    const savedTermPlans = localStorage.getItem('termPlans');
    const savedSchoolEvents = localStorage.getItem('schoolEvents');

    if (savedTermPlans) {
      setTermPlans(JSON.parse(savedTermPlans));
    } else {
      // Default data if no admin data exists
      setTermPlans([
        {
          id: '1',
          term: 'First Term',
          startDate: '2024-02-05',
          endDate: '2024-05-03',
          description: 'Academic activities, sports competitions, and cultural events',
          activities: [
            'Opening assembly and orientation',
            'Mid-term examinations',
            'Sports day preparation',
            'Parent-teacher meetings',
            'End of term examinations'
          ]
        },
        {
          id: '2',
          term: 'Second Term',
          startDate: '2024-05-20',
          endDate: '2024-08-16',
          description: 'Continued academic excellence with enhanced extracurricular activities',
          activities: [
            'Term opening and goal setting',
            'Academic competitions',
            'Cultural day celebrations',
            'Sports competitions',
            'Term closing ceremonies'
          ]
        },
        {
          id: '3',
          term: 'Third Term',
          startDate: '2024-09-02',
          endDate: '2024-11-29',
          description: 'Final term focusing on examinations and graduation preparations',
          activities: [
            'Final term commencement',
            'Mock examinations',
            'Graduation preparations',
            'Final examinations',
            'Graduation ceremonies'
          ]
        }
      ]);
    }

    if (savedSchoolEvents) {
      setSchoolEvents(JSON.parse(savedSchoolEvents));
    } else {
      // Default data if no admin data exists
      setSchoolEvents([
        {
          id: '1',
          title: 'Opening Assembly',
          date: '2024-02-05',
          time: '08:00',
          description: 'Welcome back assembly for all students and staff',
          category: 'academic',
          targetAudience: 'All students and staff'
        },
        {
          id: '2',
          title: 'Sports Day',
          date: '2024-03-15',
          time: '09:00',
          description: 'Annual inter-house sports competition',
          category: 'sports',
          targetAudience: 'All students'
        },
        {
          id: '3',
          title: 'Cultural Day',
          date: '2024-04-20',
          time: '10:00',
          description: 'Celebration of diverse cultures and traditions',
          category: 'cultural',
          targetAudience: 'All students and parents'
        }
      ]);
    }
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic': return 'bg-blue-100 text-blue-800';
      case 'sports': return 'bg-green-100 text-green-800';
      case 'cultural': return 'bg-purple-100 text-purple-800';
      case 'religious': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'academic': return <BookOpen className="w-4 h-4" />;
      case 'sports': return <Target className="w-4 h-4" />;
      case 'cultural': return <Users className="w-4 h-4" />;
      case 'religious': return <Star className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
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
              <BookOpen className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                School Program
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Academic Calendar, Term Planning & School Events
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Structured Learning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Balanced Activities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Holistic Development</span>
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
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('terms')}
              className={`flex items-center space-x-2 px-6 py-4 font-medium ${
                activeTab === 'terms' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span>Term Planning</span>
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`flex items-center space-x-2 px-6 py-4 font-medium ${
                activeTab === 'events' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span>School Events</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'terms' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Academic Term Planning</h2>
                  <p className="text-gray-600">Our structured academic calendar ensures comprehensive learning and development</p>
                </div>

                <div className="space-y-6">
                  {termPlans.map((term, index) => (
                    <motion.div
                      key={term.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">{term.term}</h3>
                          <p className="text-gray-600">{term.description}</p>
                          <p className="text-sm text-blue-600 mt-1">
                            {new Date(term.startDate).toLocaleDateString()} - {new Date(term.endDate).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-gray-500">
                            {term.activities.length} activities
                          </span>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          Planned Activities
                        </h4>
                        <ul className="space-y-2">
                          {term.activities.map((activity, activityIndex) => (
                            <li key={activityIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              <span className="text-gray-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Academic Highlights */}
                <div className="mt-8 bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="font-medium text-gray-900">Structured Learning</h4>
                      <p className="text-sm text-gray-600">Organized curriculum delivery</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Target className="w-6 h-6 text-green-600" />
                      </div>
                      <h4 className="font-medium text-gray-900">Goal-Oriented</h4>
                      <p className="text-sm text-gray-600">Clear academic objectives</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-6 h-6 text-purple-600" />
                      </div>
                      <h4 className="font-medium text-gray-900">Holistic Development</h4>
                      <p className="text-sm text-gray-600">Academic and personal growth</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'events' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">School Events Calendar</h2>
                  <p className="text-gray-600">Engaging events and activities throughout the academic year</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {schoolEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-gray-900">{event.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getCategoryColor(event.category)}`}>
                          {getCategoryIcon(event.category)}
                          <span>{event.category}</span>
                        </span>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">{event.targetAudience}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Event Categories */}
                <div className="mt-8 bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Categories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex items-center space-x-3 p-3 bg-blue-100 rounded-lg">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      <div>
                        <h4 className="font-medium text-blue-900">Academic</h4>
                        <p className="text-xs text-blue-700">Educational events</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-100 rounded-lg">
                      <Target className="w-5 h-5 text-green-600" />
                      <div>
                        <h4 className="font-medium text-green-900">Sports</h4>
                        <p className="text-xs text-green-700">Athletic activities</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-purple-100 rounded-lg">
                      <Users className="w-5 h-5 text-purple-600" />
                      <div>
                        <h4 className="font-medium text-purple-900">Cultural</h4>
                        <p className="text-xs text-purple-700">Cultural celebrations</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-orange-100 rounded-lg">
                      <Star className="w-5 h-5 text-orange-600" />
                      <div>
                        <h4 className="font-medium text-orange-900">Religious</h4>
                        <p className="text-xs text-orange-700">Spiritual activities</p>
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

export default SchoolProgramPage;
