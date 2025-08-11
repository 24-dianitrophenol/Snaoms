import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Calendar, 
  Image, 
  Settings, 
  LogOut, 
  Plus,
  Edit,
  Trash2,
  Eye,
  Bell,
  BookOpen,
  GraduationCap,
  Award,
  Save,
  X,
  Upload,
  Clock,
  Target,
  MapPin,
  Phone,
  Mail,
  Globe,
  Building,
  Trophy,
  Music,
  Camera,
  Star,
  CheckCircle,
  AlertCircle,
  Info,
  Search,
  Filter,
  Download,
  Share,
  RefreshCw,
  TrendingUp,
  BarChart3,
  Activity,
  Shield,
  UserCheck,
  FileCheck,
  CalendarCheck,
  ImagePlus,
  UserPlus,
  BookPlus
} from 'lucide-react';

// Interfaces for different content types
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

interface CurriculumItem {
  id: string;
  subject: string;
  description: string;
  grade: string;
  objectives: string[];
}

interface Department {
  id: string;
  name: string;
  head: string;
  description: string;
  subjects: string[];
}

interface Club {
  id: string;
  name: string;
  description: string;
  leader: string;
  members: number;
  activities: string[];
}

interface Facility {
  id: string;
  name: string;
  description: string;
  location: string;
  capacity: string;
  status: 'available' | 'maintenance' | 'unavailable';
}

interface AdmissionInfo {
  id: string;
  title: string;
  content: string;
  category: 'requirements' | 'process' | 'fees' | 'forms';
}

interface Career {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  deadline: string;
  status: 'open' | 'closed' | 'pending';
}

interface Circular {
  id: string;
  title: string;
  content: string;
  date: string;
  priority: 'high' | 'medium' | 'low';
  targetAudience: string[];
}

const AdminDashboardPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeSection, setActiveSection] = useState<'academics' | 'admissions' | 'school-life'>('academics');
  const [activeTab, setActiveTab] = useState<string>('curriculum');
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showStats, setShowStats] = useState(true);
  const [notifications, setNotifications] = useState([
    { id: '1', message: 'New student application received', type: 'info', time: '2 minutes ago' },
    { id: '2', message: 'Event "Sports Day" updated successfully', type: 'success', time: '1 hour ago' },
    { id: '3', message: 'Gallery upload completed', type: 'success', time: '3 hours ago' }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formType, setFormType] = useState('');
  const [formData, setFormData] = useState<any>({});
  const navigate = useNavigate();

  // Academics State
  const [curriculum, setCurriculum] = useState<CurriculumItem[]>([
    { id: '1', subject: 'Mathematics', description: 'Core mathematics curriculum', grade: 'S.1-S.6', objectives: ['Problem solving', 'Critical thinking', 'Analytical skills'] },
    { id: '2', subject: 'English', description: 'English language and literature', grade: 'S.1-S.6', objectives: ['Communication', 'Reading comprehension', 'Writing skills'] }
  ]);

  const [departments, setDepartments] = useState<Department[]>([
    { id: '1', name: 'Science Department', head: 'Dr. John Smith', description: 'Handles all science subjects', subjects: ['Physics', 'Chemistry', 'Biology'] },
    { id: '2', name: 'Arts Department', head: 'Mrs. Jane Doe', description: 'Manages arts and humanities', subjects: ['History', 'Geography', 'Literature'] }
  ]);

  const [termPlans, setTermPlans] = useState<TermPlan[]>([
    {
      id: '1',
      term: 'First Term',
      startDate: '2024-02-05',
      endDate: '2024-05-03',
      description: 'Academic activities, sports competitions, and cultural events',
      activities: ['Opening assembly and orientation', 'Mid-term examinations', 'Sports day preparation']
    }
  ]);

  const [schoolEvents, setSchoolEvents] = useState<SchoolEvent[]>([
    {
      id: '1',
      title: 'Opening Assembly',
      date: '2024-02-05',
      time: '08:00',
      description: 'Welcome back assembly for all students and staff',
      category: 'academic',
      targetAudience: 'All students and staff'
    }
  ]);

  const [circulars, setCirculars] = useState<Circular[]>([
    {
      id: '1',
      title: 'Mid-term Examination Schedule',
      content: 'Examinations will begin on March 15th, 2024',
      date: '2024-02-20',
      priority: 'high',
      targetAudience: ['Students', 'Parents', 'Teachers']
    }
  ]);

  // Admissions State
  const [admissionInfo, setAdmissionInfo] = useState<AdmissionInfo[]>([
    { id: '1', title: 'Admission Requirements', content: 'Students must have completed primary education', category: 'requirements' },
    { id: '2', title: 'Application Process', content: 'Submit application form with required documents', category: 'process' }
  ]);

  const [careers, setCareers] = useState<Career[]>([
    {
      id: '1',
      title: 'Mathematics Teacher',
      description: 'We are seeking a qualified mathematics teacher',
      requirements: ['Bachelor\'s degree in Mathematics', 'Teaching certification', '3 years experience'],
      deadline: '2024-03-30',
      status: 'open'
    }
  ]);

  // School Life State
  const [prefectMembers, setPrefectMembers] = useState<PrefectMember[]>([
    { id: '1', name: 'John Doe', position: 'Head Prefect', class: 'S.6' },
    { id: '2', name: 'Jane Smith', position: 'Deputy Head Prefect', class: 'S.6' }
  ]);

  const [events, setEvents] = useState<Event[]>([
    { 
      id: '1', 
      title: 'Sports Day 2024', 
      date: '2024-03-15', 
      description: 'Annual sports competition for all students',
      status: 'upcoming'
    }
  ]);

  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([
    {
      id: '1',
      title: 'Sports Day 2023',
      description: 'Students participating in various sports activities',
      imageUrl: '/images/photos/IMG1.JPG',
      category: 'Sports',
      date: '2023-12-15'
    }
  ]);

  const [clubs, setClubs] = useState<Club[]>([
    {
      id: '1',
      name: 'Science Club',
      description: 'Promotes scientific thinking and experiments',
      leader: 'Dr. Smith',
      members: 25,
      activities: ['Science fair', 'Lab experiments', 'Field trips']
    }
  ]);

  const [facilities, setFacilities] = useState<Facility[]>([
    {
      id: '1',
      name: 'Computer Lab',
      description: 'Modern computer laboratory with 30 workstations',
      location: 'Block A, Room 101',
      capacity: '30 students',
      status: 'available'
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

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    navigate('/admin/login');
  };

  const handleSave = () => {
    // Save all changes to localStorage
    localStorage.setItem('curriculum', JSON.stringify(curriculum));
    localStorage.setItem('departments', JSON.stringify(departments));
    localStorage.setItem('termPlans', JSON.stringify(termPlans));
    localStorage.setItem('schoolEvents', JSON.stringify(schoolEvents));
    localStorage.setItem('circulars', JSON.stringify(circulars));
    localStorage.setItem('admissionInfo', JSON.stringify(admissionInfo));
    localStorage.setItem('careers', JSON.stringify(careers));
    localStorage.setItem('prefectMembers', JSON.stringify(prefectMembers));
    localStorage.setItem('events', JSON.stringify(events));
    localStorage.setItem('galleryItems', JSON.stringify(galleryItems));
    localStorage.setItem('clubs', JSON.stringify(clubs));
    localStorage.setItem('facilities', JSON.stringify(facilities));
    setIsEditing(false);
  };

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'add-content':
        setIsEditing(true);
        break;
      case 'export-data':
        exportData();
        break;
      case 'analytics':
        showAnalytics();
        break;
      case 'refresh':
        window.location.reload();
        break;
      case 'share':
        shareDashboard();
        break;
      case 'settings':
        showSettings();
        break;
      default:
        break;
    }
  };

  const exportData = () => {
    const data = {
      curriculum,
      departments,
      termPlans,
      schoolEvents,
      circulars,
      admissionInfo,
      careers,
      prefectMembers,
      events,
      galleryItems,
      clubs,
      facilities
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'snoams-data.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const showAnalytics = () => {
    alert('Analytics feature coming soon!');
  };

  const shareDashboard = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Snoams Admin Dashboard',
        text: 'Check out our school management system',
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Dashboard URL copied to clipboard!');
    }
  };

  const showSettings = () => {
    alert('Settings panel coming soon!');
  };

  const openAddForm = (type: string) => {
    setFormType(type);
    setFormData({});
    setShowAddForm(true);
  };

  const handleFormSubmit = () => {
    // Handle form submission based on type
    switch (formType) {
      case 'curriculum':
        const newCurriculum = { ...formData, id: Date.now().toString() };
        setCurriculum([...curriculum, newCurriculum]);
        break;
      case 'department':
        const newDepartment = { ...formData, id: Date.now().toString() };
        setDepartments([...departments, newDepartment]);
        break;
      case 'event':
        const newEvent = { ...formData, id: Date.now().toString() };
        setEvents([...events, newEvent]);
        break;
      case 'prefect':
        const newPrefect = { ...formData, id: Date.now().toString() };
        setPrefectMembers([...prefectMembers, newPrefect]);
        break;
      default:
        break;
    }
    setShowAddForm(false);
    setFormData({});
  };

  const getSectionTabs = (section: string) => {
    switch (section) {
      case 'academics':
        return [
          { id: 'curriculum', name: 'Curriculum', icon: <BookOpen className="w-4 h-4" /> },
          { id: 'departments', name: 'Departments', icon: <Building className="w-4 h-4" /> },
          { id: 'school-program', name: 'School Program', icon: <Calendar className="w-4 h-4" /> },
          { id: 'co-curriculars', name: 'Co-Curriculars', icon: <Trophy className="w-4 h-4" /> },
          { id: 'circular', name: 'School Circular', icon: <Bell className="w-4 h-4" /> },
          { id: 'performance', name: 'School Performance', icon: <Star className="w-4 h-4" /> }
        ];
      case 'admissions':
        return [
          { id: 'student-admissions', name: 'Student Admissions', icon: <GraduationCap className="w-4 h-4" /> },
          { id: 'careers', name: 'Careers', icon: <Users className="w-4 h-4" /> },
          { id: 'how-to-apply', name: 'How to Apply', icon: <Info className="w-4 h-4" /> }
        ];
      case 'school-life':
        return [
          { id: 'events', name: 'Our Events', icon: <Calendar className="w-4 h-4" /> },
          { id: 'facilities', name: 'School Facilities', icon: <Building className="w-4 h-4" /> },
          { id: 'prefect-body', name: 'Prefect Body', icon: <Users className="w-4 h-4" /> },
          { id: 'clubs', name: 'School Clubs', icon: <Trophy className="w-4 h-4" /> },
          { id: 'gallery', name: 'School Gallery', icon: <Camera className="w-4 h-4" /> }
        ];
      default:
        return [];
    }
  };

  const getStats = () => {
    return {
      totalStudents: 1247,
      totalTeachers: 45,
      totalEvents: events.length + schoolEvents.length,
      totalContent: curriculum.length + departments.length + prefectMembers.length + galleryItems.length,
      pendingUpdates: 3,
      activeClubs: clubs.length,
      availableFacilities: facilities.filter(f => f.status === 'available').length
    };
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'curriculum':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">Curriculum Management</h3>
              {isEditing && (
                <button 
                  onClick={() => openAddForm('curriculum')}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105"
                >
                  <BookPlus className="w-4 h-4" />
                  <span>Add Subject</span>
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {curriculum.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="font-semibold text-gray-900 text-lg">{item.subject}</h4>
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                      {item.grade}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-gray-700">Learning Objectives:</h5>
                    {item.objectives.map((objective, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                        <span className="text-sm text-gray-700">{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'departments':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">Departments Management</h3>
              {isEditing && (
                <button 
                  onClick={() => openAddForm('department')}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  <Building className="w-4 h-4" />
                  <span>Add Department</span>
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departments.map((dept) => (
                <div key={dept.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="font-semibold text-gray-900 text-lg">{dept.name}</h4>
                    <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-medium">
                      Active
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{dept.description}</p>
                  <p className="text-blue-600 text-sm font-medium mb-4">Head: {dept.head}</p>
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-gray-700">Subjects:</h5>
                    <div className="flex flex-wrap gap-2">
                      {dept.subjects.map((subject, index) => (
                        <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'school-program':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">School Program Management</h3>
              {isEditing && (
                <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl shadow-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                  <CalendarCheck className="w-4 h-4" />
                  <span>Add Term</span>
                </button>
              )}
            </div>
            <div className="space-y-4">
              {termPlans.map((term) => (
                <div key={term.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="font-semibold text-gray-900 text-lg">{term.term}</h4>
                    <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full font-medium">
                      {term.activities.length} Activities
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{term.description}</p>
                  <p className="text-blue-600 text-sm font-medium mb-4">
                    {new Date(term.startDate).toLocaleDateString()} - {new Date(term.endDate).toLocaleDateString()}
                  </p>
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-gray-700">Activities:</h5>
                    {term.activities.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'events':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">Events Management</h3>
              {isEditing && (
                <button 
                  onClick={() => openAddForm('event')}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Add Event</span>
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="font-semibold text-gray-900 text-lg">{event.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      event.status === 'upcoming' ? 'bg-yellow-100 text-yellow-800' :
                      event.status === 'ongoing' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  <p className="text-blue-600 text-sm font-medium">
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'prefect-body':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">Prefect Body Management</h3>
              {isEditing && (
                <button 
                  onClick={() => openAddForm('prefect')}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-xl shadow-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Add Member</span>
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prefectMembers.map((member) => (
                <div key={member.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.class}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'gallery':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">Gallery Management</h3>
              {isEditing && (
                <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl shadow-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105">
                  <ImagePlus className="w-4 h-4" />
                  <span>Upload Image</span>
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Info className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Content Management</h3>
            <p className="text-gray-600">Select a tab to manage content for this section.</p>
          </div>
        );
    }
  };

  const stats = getStats();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                <img src="/images/logo.png" alt="Snoams Logo" className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Snoams Content Management</h1>
                <p className="text-sm text-gray-600">Professional inline content management system</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Bell className="w-5 h-5" />
                  {notifications.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {notifications.length}
                    </span>
                  )}
                </button>
                
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-900">Notifications</h3>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div key={notification.id} className="p-4 border-b border-gray-100 hover:bg-gray-50">
                          <div className="flex items-start space-x-3">
                            <div className={`w-2 h-2 rounded-full mt-2 ${
                              notification.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                            }`}></div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-900">{notification.message}</p>
                              <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save All Changes</span>
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex items-center space-x-2 px-4 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-all duration-200"
                  >
                    <X className="w-4 h-4" />
                    <span>Cancel</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  <Edit className="w-4 h-4" />
                  <span>Edit Content</span>
                </button>
              )}
              
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics Dashboard */}
        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Students</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalStudents}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-gradient-to-br from-green-400 to-green-600 rounded-lg">
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Teachers</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalTeachers}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Events</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalEvents}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Content Items</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalContent}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Quick Actions */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
              <button 
                onClick={() => setShowStats(!showStats)}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                {showStats ? 'Hide Stats' : 'Show Stats'}
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <button 
                onClick={() => handleQuickAction('add-content')}
                className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all duration-200 transform hover:scale-105"
              >
                <Plus className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-sm font-medium text-blue-700">Add Content</span>
              </button>
              <button 
                onClick={() => handleQuickAction('export-data')}
                className="flex flex-col items-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg hover:from-green-100 hover:to-green-200 transition-all duration-200 transform hover:scale-105"
              >
                <Download className="w-6 h-6 text-green-600 mb-2" />
                <span className="text-sm font-medium text-green-700">Export Data</span>
              </button>
              <button 
                onClick={() => handleQuickAction('analytics')}
                className="flex flex-col items-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg hover:from-purple-100 hover:to-purple-200 transition-all duration-200 transform hover:scale-105"
              >
                <BarChart3 className="w-6 h-6 text-purple-600 mb-2" />
                <span className="text-sm font-medium text-purple-700">Analytics</span>
              </button>
              <button 
                onClick={() => handleQuickAction('refresh')}
                className="flex flex-col items-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg hover:from-orange-100 hover:to-orange-200 transition-all duration-200 transform hover:scale-105"
              >
                <RefreshCw className="w-6 h-6 text-orange-600 mb-2" />
                <span className="text-sm font-medium text-orange-700">Refresh</span>
              </button>
              <button 
                onClick={() => handleQuickAction('share')}
                className="flex flex-col items-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg hover:from-red-100 hover:to-red-200 transition-all duration-200 transform hover:scale-105"
              >
                <Share className="w-6 h-6 text-red-600 mb-2" />
                <span className="text-sm font-medium text-red-700">Share</span>
              </button>
              <button 
                onClick={() => handleQuickAction('settings')}
                className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg hover:from-gray-100 hover:to-gray-200 transition-all duration-200 transform hover:scale-105"
              >
                <Settings className="w-6 h-6 text-gray-600 mb-2" />
                <span className="text-sm font-medium text-gray-700">Settings</span>
              </button>
            </div>
          </div>
        </div>

        {/* Section Navigation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8 overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => {
                setActiveSection('academics');
                setActiveTab('curriculum');
              }}
              className={`flex items-center space-x-2 px-8 py-6 font-medium transition-all duration-200 ${
                activeSection === 'academics' 
                  ? 'border-b-2' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={activeSection === 'academics' ? { 
                color: '#191635', 
                borderColor: '#191635',
                backgroundColor: '#FBE805',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(251, 232, 5, 0.3)'
              } : {}}
            >
              <BookOpen className="w-5 h-5" />
              <span>Academics</span>
            </button>
            <button
              onClick={() => {
                setActiveSection('admissions');
                setActiveTab('student-admissions');
              }}
              className={`flex items-center space-x-2 px-8 py-6 font-medium transition-all duration-200 ${
                activeSection === 'admissions' 
                  ? 'border-b-2' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={activeSection === 'admissions' ? { 
                color: '#191635', 
                borderColor: '#191635',
                backgroundColor: '#FBE805',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(251, 232, 5, 0.3)'
              } : {}}
            >
              <GraduationCap className="w-5 h-5" />
              <span>Admissions</span>
            </button>
            <button
              onClick={() => {
                setActiveSection('school-life');
                setActiveTab('events');
              }}
              className={`flex items-center space-x-2 px-8 py-6 font-medium transition-all duration-200 ${
                activeSection === 'school-life' 
                  ? 'border-b-2' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={activeSection === 'school-life' ? { 
                color: '#191635', 
                borderColor: '#191635',
                backgroundColor: '#FBE805',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(251, 232, 5, 0.3)'
              } : {}}
            >
              <Award className="w-5 h-5" />
              <span>School Life</span>
            </button>
          </div>

          {/* Sub-tabs */}
          <div className="flex border-b border-gray-200 overflow-x-auto bg-gray-50">
            {getSectionTabs(activeSection).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'border-b-2 bg-white' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
                style={activeTab === tab.id ? { color: '#191635', borderColor: '#191635' } : {}}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="p-8">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </div>
        </div>
      </main>

      {/* Add Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md mx-4"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Add {formType.charAt(0).toUpperCase() + formType.slice(1)}
              </h3>
              <button
                onClick={() => setShowAddForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              {formType === 'curriculum' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject Name</label>
                    <input
                      type="text"
                      value={formData.subject || ''}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter subject name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={formData.description || ''}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      placeholder="Enter description"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Grade Level</label>
                    <input
                      type="text"
                      value={formData.grade || ''}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., S.1-S.6"
                    />
                  </div>
                </>
              )}

              {formType === 'department' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department Name</label>
                    <input
                      type="text"
                      value={formData.name || ''}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter department name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department Head</label>
                    <input
                      type="text"
                      value={formData.head || ''}
                      onChange={(e) => setFormData({ ...formData, head: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter department head name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={formData.description || ''}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      placeholder="Enter description"
                    />
                  </div>
                </>
              )}

              {formType === 'event' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Event Title</label>
                    <input
                      type="text"
                      value={formData.title || ''}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter event title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input
                      type="date"
                      value={formData.date || ''}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={formData.description || ''}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      placeholder="Enter event description"
                    />
                  </div>
                </>
              )}

              {formType === 'prefect' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.name || ''}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
                    <input
                      type="text"
                      value={formData.position || ''}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter position"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                    <input
                      type="text"
                      value={formData.class || ''}
                      onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., S.6"
                    />
                  </div>
                </>
              )}
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowAddForm(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleFormSubmit}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
              >
                Add {formType.charAt(0).toUpperCase() + formType.slice(1)}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboardPage;
