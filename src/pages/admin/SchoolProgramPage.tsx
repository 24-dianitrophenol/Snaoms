import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Calendar,
  Clock,
  BookOpen,
  Users,
  Target
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'terms' | 'events'>('terms');
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  // Term Planning State
  const [termPlans, setTermPlans] = useState<TermPlan[]>([
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

  // School Events State
  const [schoolEvents, setSchoolEvents] = useState<SchoolEvent[]>([
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

  useEffect(() => {
    const auth = localStorage.getItem('adminAuthenticated');
    if (!auth) {
      navigate('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleSave = () => {
    localStorage.setItem('termPlans', JSON.stringify(termPlans));
    localStorage.setItem('schoolEvents', JSON.stringify(schoolEvents));
    setIsEditing(false);
  };

  const addTermPlan = () => {
    const newTerm: TermPlan = {
      id: Date.now().toString(),
      term: '',
      startDate: '',
      endDate: '',
      description: '',
      activities: []
    };
    setTermPlans([...termPlans, newTerm]);
  };

  const updateTermPlan = (id: string, field: keyof TermPlan, value: string | string[]) => {
    setTermPlans(termPlans.map(term => 
      term.id === id ? { ...term, [field]: value } : term
    ));
  };

  const addActivity = (termId: string) => {
    setTermPlans(termPlans.map(term => 
      term.id === termId 
        ? { ...term, activities: [...term.activities, ''] }
        : term
    ));
  };

  const updateActivity = (termId: string, activityIndex: number, value: string) => {
    setTermPlans(termPlans.map(term => 
      term.id === termId 
        ? { 
            ...term, 
            activities: term.activities.map((activity, index) => 
              index === activityIndex ? value : activity
            )
          }
        : term
    ));
  };

  const deleteActivity = (termId: string, activityIndex: number) => {
    setTermPlans(termPlans.map(term => 
      term.id === termId 
        ? { ...term, activities: term.activities.filter((_, index) => index !== activityIndex) }
        : term
    ));
  };

  const deleteTermPlan = (id: string) => {
    setTermPlans(termPlans.filter(term => term.id !== id));
  };

  const addSchoolEvent = () => {
    const newEvent: SchoolEvent = {
      id: Date.now().toString(),
      title: '',
      date: '',
      time: '',
      description: '',
      category: 'academic',
      targetAudience: ''
    };
    setSchoolEvents([...schoolEvents, newEvent]);
  };

  const updateSchoolEvent = (id: string, field: keyof SchoolEvent, value: string) => {
    setSchoolEvents(schoolEvents.map(event => 
      event.id === id ? { ...event, [field]: value } : event
    ));
  };

  const deleteSchoolEvent = (id: string) => {
    setSchoolEvents(schoolEvents.filter(event => event.id !== id));
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic': return 'bg-blue-100 text-blue-800';
      case 'sports': return 'bg-green-100 text-green-800';
      case 'cultural': return 'bg-purple-100 text-purple-800';
      case 'religious': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/admin/dashboard')}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Dashboard</span>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg"
                    style={{ backgroundColor: '#191635', color: '#FBE805' }}
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Changes</span>
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                  >
                    <X className="w-4 h-4" />
                    <span>Cancel</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg"
                  style={{ backgroundColor: '#191635', color: '#FBE805' }}
                >
                  <Edit className="w-4 h-4" />
                  <span>Edit Program</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">School Program Management</h1>
          <p className="text-gray-600">Manage term planning and school events</p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('terms')}
              className={`flex items-center space-x-2 px-6 py-4 font-medium ${
                activeTab === 'terms' 
                  ? 'border-b-2' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={activeTab === 'terms' ? { color: '#191635', borderColor: '#191635' } : {}}
            >
              <BookOpen className="w-5 h-5" />
              <span>Term Planning</span>
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`flex items-center space-x-2 px-6 py-4 font-medium ${
                activeTab === 'events' 
                  ? 'border-b-2' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={activeTab === 'events' ? { color: '#191635', borderColor: '#191635' } : {}}
            >
              <Calendar className="w-5 h-5" />
              <span>School Events</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'terms' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Term Planning</h2>
                  {isEditing && (
                    <button
                      onClick={addTermPlan}
                      className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Term</span>
                    </button>
                  )}
                </div>

                <div className="space-y-6">
                  {termPlans.map((term) => (
                    <motion.div
                      key={term.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gray-50 rounded-lg p-6"
                    >
                      {isEditing ? (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                              type="text"
                              value={term.term}
                              onChange={(e) => updateTermPlan(term.id, 'term', e.target.value)}
                              placeholder="Term Name"
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="flex space-x-2">
                              <input
                                type="date"
                                value={term.startDate}
                                onChange={(e) => updateTermPlan(term.id, 'startDate', e.target.value)}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                              <input
                                type="date"
                                value={term.endDate}
                                onChange={(e) => updateTermPlan(term.id, 'endDate', e.target.value)}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            </div>
                          </div>
                          <textarea
                            value={term.description}
                            onChange={(e) => updateTermPlan(term.id, 'description', e.target.value)}
                            placeholder="Term Description"
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-medium text-gray-900">Activities</h4>
                              <button
                                onClick={() => addActivity(term.id)}
                                className="flex items-center space-x-1 px-2 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                              >
                                <Plus className="w-3 h-3" />
                                <span>Add Activity</span>
                              </button>
                            </div>
                            <div className="space-y-2">
                              {term.activities.map((activity, index) => (
                                <div key={index} className="flex space-x-2">
                                  <input
                                    type="text"
                                    value={activity}
                                    onChange={(e) => updateActivity(term.id, index, e.target.value)}
                                    placeholder="Activity description"
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                  <button
                                    onClick={() => deleteActivity(term.id, index)}
                                    className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>

                          <button
                            onClick={() => deleteTermPlan(term.id)}
                            className="flex items-center space-x-2 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                            <span>Delete Term</span>
                          </button>
                        </div>
                      ) : (
                        <div>
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
                            <h4 className="font-medium text-gray-900 mb-3">Activities</h4>
                            <ul className="space-y-2">
                              {term.activities.map((activity, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                  <span className="text-gray-700">{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'events' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">School Events</h2>
                  {isEditing && (
                    <button
                      onClick={addSchoolEvent}
                      className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Event</span>
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {schoolEvents.map((event) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                    >
                      {isEditing ? (
                        <div className="space-y-4">
                          <input
                            type="text"
                            value={event.title}
                            onChange={(e) => updateSchoolEvent(event.id, 'title', e.target.value)}
                            placeholder="Event Title"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <div className="grid grid-cols-2 gap-2">
                            <input
                              type="date"
                              value={event.date}
                              onChange={(e) => updateSchoolEvent(event.id, 'date', e.target.value)}
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                              type="time"
                              value={event.time}
                              onChange={(e) => updateSchoolEvent(event.id, 'time', e.target.value)}
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <select
                            value={event.category}
                            onChange={(e) => updateSchoolEvent(event.id, 'category', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="academic">Academic</option>
                            <option value="sports">Sports</option>
                            <option value="cultural">Cultural</option>
                            <option value="religious">Religious</option>
                          </select>
                          <textarea
                            value={event.description}
                            onChange={(e) => updateSchoolEvent(event.id, 'description', e.target.value)}
                            placeholder="Event Description"
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <input
                            type="text"
                            value={event.targetAudience}
                            onChange={(e) => updateSchoolEvent(event.id, 'targetAudience', e.target.value)}
                            placeholder="Target Audience"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button
                            onClick={() => deleteSchoolEvent(event.id)}
                            className="flex items-center space-x-2 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                            <span>Delete Event</span>
                          </button>
                        </div>
                      ) : (
                        <div>
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="font-semibold text-gray-900">{event.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                              {event.category}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-3">{event.description}</p>
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
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SchoolProgramPage;
