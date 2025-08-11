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
  Users, 
  Calendar, 
  Image,
  Upload,
  Eye
} from 'lucide-react';

interface PrefectMember {
  id: string;
  name: string;
  position: string;
  class: string;
  image?: string;
}

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
}

const SchoolLifeManagementPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'prefect' | 'events' | 'gallery'>('prefect');
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  // Prefect Body State
  const [prefectMembers, setPrefectMembers] = useState<PrefectMember[]>([
    { id: '1', name: 'John Doe', position: 'Head Prefect', class: 'S.6' },
    { id: '2', name: 'Jane Smith', position: 'Deputy Head Prefect', class: 'S.6' },
    { id: '3', name: 'Mike Johnson', position: 'Academic Prefect', class: 'S.5' },
  ]);

  // Events State
  const [events, setEvents] = useState<Event[]>([
    { 
      id: '1', 
      title: 'Sports Day 2024', 
      date: '2024-03-15', 
      description: 'Annual sports competition for all students',
      status: 'upcoming'
    },
    { 
      id: '2', 
      title: 'Cultural Day', 
      date: '2024-04-20', 
      description: 'Celebration of diverse cultures',
      status: 'upcoming'
    },
  ]);

  // Gallery State
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([
    {
      id: '1',
      title: 'Sports Day 2023',
      description: 'Students participating in various sports activities',
      imageUrl: '/images/photos/IMG1.JPG',
      category: 'Sports',
      date: '2023-12-15'
    },
    {
      id: '2',
      title: 'Graduation Ceremony',
      description: 'S.6 students graduating from St. Noa Mawagali',
      imageUrl: '/images/photos/IMG2.JPG',
      category: 'Academics',
      date: '2023-11-20'
    },
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
    // Save changes to localStorage or API
    localStorage.setItem('prefectMembers', JSON.stringify(prefectMembers));
    localStorage.setItem('events', JSON.stringify(events));
    localStorage.setItem('galleryItems', JSON.stringify(galleryItems));
    setIsEditing(false);
  };

  const addPrefectMember = () => {
    const newMember: PrefectMember = {
      id: Date.now().toString(),
      name: '',
      position: '',
      class: ''
    };
    setPrefectMembers([...prefectMembers, newMember]);
  };

  const updatePrefectMember = (id: string, field: keyof PrefectMember, value: string) => {
    setPrefectMembers(prefectMembers.map(member => 
      member.id === id ? { ...member, [field]: value } : member
    ));
  };

  const deletePrefectMember = (id: string) => {
    setPrefectMembers(prefectMembers.filter(member => member.id !== id));
  };

  const addEvent = () => {
    const newEvent: Event = {
      id: Date.now().toString(),
      title: '',
      date: '',
      description: '',
      status: 'upcoming'
    };
    setEvents([...events, newEvent]);
  };

  const updateEvent = (id: string, field: keyof Event, value: string) => {
    setEvents(events.map(event => 
      event.id === id ? { ...event, [field]: value } : event
    ));
  };

  const deleteEvent = (id: string) => {
    setEvents(events.filter(event => event.id !== id));
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
                  <span>Edit Content</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">School Life Management</h1>
          <p className="text-gray-600">Manage dynamic content for school life pages</p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('prefect')}
              className={`flex items-center space-x-2 px-6 py-4 font-medium ${
                activeTab === 'prefect' 
                  ? 'border-b-2' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={activeTab === 'prefect' ? { color: '#191635', borderColor: '#191635' } : {}}
            >
              <Users className="w-5 h-5" />
              <span>Prefect Body</span>
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
              <span>Our Events</span>
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center space-x-2 px-6 py-4 font-medium ${
                activeTab === 'gallery' 
                  ? 'border-b-2' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={activeTab === 'gallery' ? { color: '#191635', borderColor: '#191635' } : {}}
            >
              <Image className="w-5 h-5" />
              <span>School Gallery</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'prefect' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Prefect Body Management</h2>
                  {isEditing && (
                    <button
                      onClick={addPrefectMember}
                      className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Member</span>
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {prefectMembers.map((member) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gray-50 rounded-lg p-6"
                    >
                      {isEditing ? (
                        <div className="space-y-4">
                          <input
                            type="text"
                            value={member.name}
                            onChange={(e) => updatePrefectMember(member.id, 'name', e.target.value)}
                            placeholder="Full Name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <input
                            type="text"
                            value={member.position}
                            onChange={(e) => updatePrefectMember(member.id, 'position', e.target.value)}
                            placeholder="Position"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <input
                            type="text"
                            value={member.class}
                            onChange={(e) => updatePrefectMember(member.id, 'class', e.target.value)}
                            placeholder="Class"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button
                            onClick={() => deletePrefectMember(member.id)}
                            className="flex items-center space-x-2 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                            <span>Delete</span>
                          </button>
                        </div>
                      ) : (
                        <div className="text-center">
                          <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <Users className="w-8 h-8 text-blue-600" />
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                          <p className="text-blue-600 font-medium mb-1">{member.position}</p>
                          <p className="text-gray-600 text-sm">{member.class}</p>
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
                  <h2 className="text-xl font-semibold text-gray-900">Events Management</h2>
                  {isEditing && (
                    <button
                      onClick={addEvent}
                      className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Event</span>
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  {events.map((event) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gray-50 rounded-lg p-6"
                    >
                      {isEditing ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            value={event.title}
                            onChange={(e) => updateEvent(event.id, 'title', e.target.value)}
                            placeholder="Event Title"
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <input
                            type="date"
                            value={event.date}
                            onChange={(e) => updateEvent(event.id, 'date', e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <textarea
                            value={event.description}
                            onChange={(e) => updateEvent(event.id, 'description', e.target.value)}
                            placeholder="Event Description"
                            rows={3}
                            className="md:col-span-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button
                            onClick={() => deleteEvent(event.id)}
                            className="flex items-center space-x-2 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                            <span>Delete Event</span>
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{event.title}</h3>
                            <p className="text-gray-600 mb-2">{event.description}</p>
                            <p className="text-sm text-blue-600">{new Date(event.date).toLocaleDateString()}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            event.status === 'upcoming' ? 'bg-yellow-100 text-yellow-800' :
                            event.status === 'ongoing' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {event.status}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Gallery Management</h2>
                  {isEditing && (
                    <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                      <Upload className="w-4 h-4" />
                      <span>Upload Image</span>
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                    >
                      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">
                            {item.category}
                          </span>
                          <span className="text-xs text-gray-500">
                            {new Date(item.date).toLocaleDateString()}
                          </span>
                        </div>
                        {isEditing && (
                          <div className="mt-3 flex space-x-2">
                            <button className="flex items-center space-x-1 px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700">
                              <Edit className="w-3 h-3" />
                              <span>Edit</span>
                            </button>
                            <button className="flex items-center space-x-1 px-2 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700">
                              <Trash2 className="w-3 h-3" />
                              <span>Delete</span>
                            </button>
                          </div>
                        )}
                      </div>
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

export default SchoolLifeManagementPage;
