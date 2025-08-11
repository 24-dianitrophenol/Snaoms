import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  Users,
  Calendar,
  FileText,
  Trophy,
  Image,
  Settings,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Search,
  Filter,
  MoreVertical,
  Eye,
  Upload,
  Download
} from 'lucide-react';

// Database interfaces
interface Curriculum {
  id: string;
  subject: string;
  description: string;
  gradeLevel: string;
  objectives: string[];
  createdAt: string;
  updatedAt: string;
}

interface Department {
  id: string;
  name: string;
  head: string;
  subjects: string[];
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  category: 'academic' | 'sports' | 'cultural' | 'religious';
  location: string;
  targetAudience: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  createdAt: string;
  updatedAt: string;
}

interface AdmissionInfo {
  id: string;
  title: string;
  content: string;
  requirements: string[];
  deadline: string;
  category: 'requirements' | 'process' | 'fees' | 'dates';
  createdAt: string;
  updatedAt: string;
}

interface Career {
  id: string;
  position: string;
  department: string;
  type: 'full-time' | 'part-time' | 'contract';
  experience: string;
  requirements: string[];
  description: string;
  deadline: string;
  status: 'open' | 'closed';
  createdAt: string;
  updatedAt: string;
}

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}

const AdminDashboardPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeSection, setActiveSection] = useState<'overview' | 'academics' | 'admissions' | 'school-life'>('overview');
  const [activeTab, setActiveTab] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const navigate = useNavigate();

  // Data states
  const [curriculum, setCurriculum] = useState<Curriculum[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [schoolEvents, setSchoolEvents] = useState<SchoolEvent[]>([]);
  const [admissionInfo, setAdmissionInfo] = useState<AdmissionInfo[]>([]);
  const [careers, setCareers] = useState<Career[]>([]);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'add' | 'edit' | 'delete'>('add');
  const [currentItem, setCurrentItem] = useState<any>(null);

  useEffect(() => {
    const auth = localStorage.getItem('adminAuthenticated');
    if (!auth) {
      navigate('/admin/login');
    } else {
      setIsAuthenticated(true);
      loadData();
    }
  }, [navigate]);

  const loadData = () => {
    // Load data from localStorage (simulating database)
    const savedCurriculum = localStorage.getItem('curriculum');
    const savedDepartments = localStorage.getItem('departments');
    const savedSchoolEvents = localStorage.getItem('schoolEvents');
    const savedAdmissionInfo = localStorage.getItem('admissionInfo');
    const savedCareers = localStorage.getItem('careers');
    const savedGalleryItems = localStorage.getItem('galleryItems');

    if (savedCurriculum) setCurriculum(JSON.parse(savedCurriculum));
    if (savedDepartments) setDepartments(JSON.parse(savedDepartments));
    if (savedSchoolEvents) setSchoolEvents(JSON.parse(savedSchoolEvents));
    if (savedAdmissionInfo) setAdmissionInfo(JSON.parse(savedAdmissionInfo));
    if (savedCareers) setCareers(JSON.parse(savedCareers));
    if (savedGalleryItems) setGalleryItems(JSON.parse(savedGalleryItems));
  };

  const saveData = () => {
    localStorage.setItem('curriculum', JSON.stringify(curriculum));
    localStorage.setItem('departments', JSON.stringify(departments));
    localStorage.setItem('schoolEvents', JSON.stringify(schoolEvents));
    localStorage.setItem('admissionInfo', JSON.stringify(admissionInfo));
    localStorage.setItem('careers', JSON.stringify(careers));
    localStorage.setItem('galleryItems', JSON.stringify(galleryItems));
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    navigate('/admin/login');
  };

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'academics', label: 'Academics', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'admissions', label: 'Admissions', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'school-life', label: 'School Life', icon: <Users className="w-5 h-5" /> },
  ];

  const academicsTabs = [
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'departments', label: 'Departments' },
    { id: 'events', label: 'Academic Events' },
  ];

  const admissionsTabs = [
    { id: 'info', label: 'Admission Info' },
    { id: 'careers', label: 'Careers' },
    { id: 'applications', label: 'Applications' },
  ];

  const schoolLifeTabs = [
    { id: 'events', label: 'Events' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'clubs', label: 'Clubs' },
  ];

  const StatCard = ({ title, value, change, icon, color }: any) => (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className={`text-sm ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {change >= 0 ? '+' : ''}{change}% from last month
          </p>
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          {icon}
        </div>
      </div>
    </motion.div>
  );

  const DataTable = ({ data, columns, onEdit, onDelete }: any) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Data Management</h3>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={() => {
                setModalType('add');
                setCurrentItem(null);
                setShowModal(true);
              }}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Plus className="w-4 h-4" />
              <span>Add New</span>
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column: any) => (
                <th key={column.key} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {column.label}
                </th>
              ))}
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item: any) => (
              <tr key={item.id} className="hover:bg-gray-50">
                {columns.map((column: any) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {Array.isArray(item[column.key]) 
                      ? item[column.key].join(', ')
                      : item[column.key]
                    }
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      onClick={() => onEdit(item)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onDelete(item)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <img src="/images/logo.png" alt="Logo" className="w-10 h-10" />
            <div>
              <h2 className="text-lg font-bold text-gray-900">Snoams Admin</h2>
              <p className="text-sm text-gray-500">Dashboard</p>
            </div>
          </div>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveSection(item.id as any);
                    setActiveTab('');
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-600 border border-blue-200'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 capitalize">
                {activeSection === 'overview' ? 'Dashboard Overview' : activeSection}
              </h1>
              <p className="text-gray-600">
                {activeSection === 'overview' 
                  ? 'Welcome to your admin dashboard'
                  : `Manage ${activeSection} content and settings`
                }
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            {activeSection === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <StatCard
                    title="Total Curriculum Items"
                    value={curriculum.length}
                    change={12}
                    icon={<BookOpen className="w-6 h-6 text-white" />}
                    color="bg-blue-500"
                  />
                  <StatCard
                    title="Active Events"
                    value={schoolEvents.filter(e => e.status === 'upcoming').length}
                    change={8}
                    icon={<Calendar className="w-6 h-6 text-white" />}
                    color="bg-green-500"
                  />
                  <StatCard
                    title="Open Positions"
                    value={careers.filter(c => c.status === 'open').length}
                    change={-3}
                    icon={<Users className="w-6 h-6 text-white" />}
                    color="bg-purple-500"
                  />
                  <StatCard
                    title="Gallery Items"
                    value={galleryItems.length}
                    change={15}
                    icon={<Image className="w-6 h-6 text-white" />}
                    color="bg-orange-500"
                  />
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">New curriculum item added</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">Event updated</p>
                        <p className="text-xs text-gray-500">4 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'academics' && (
              <motion.div
                key="academics"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {/* Tabs */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="border-b border-gray-200">
                    <nav className="flex space-x-8 px-6">
                      {academicsTabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`py-4 px-1 border-b-2 font-medium text-sm ${
                            activeTab === tab.id || (activeTab === '' && tab.id === 'curriculum')
                              ? 'border-blue-500 text-blue-600'
                              : 'border-transparent text-gray-500 hover:text-gray-700'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </nav>
                  </div>
                  
                  <div className="p-6">
                    {(activeTab === 'curriculum' || activeTab === '') && (
                      <DataTable
                        data={curriculum}
                        columns={[
                          { key: 'subject', label: 'Subject' },
                          { key: 'gradeLevel', label: 'Grade Level' },
                          { key: 'description', label: 'Description' },
                        ]}
                        onEdit={(item: Curriculum) => {
                          setCurrentItem(item);
                          setModalType('edit');
                          setShowModal(true);
                        }}
                        onDelete={(item: Curriculum) => {
                          setCurriculum(curriculum.filter(c => c.id !== item.id));
                          saveData();
                        }}
                      />
                    )}
                    
                    {activeTab === 'departments' && (
                      <DataTable
                        data={departments}
                        columns={[
                          { key: 'name', label: 'Department' },
                          { key: 'head', label: 'Head' },
                          { key: 'subjects', label: 'Subjects' },
                        ]}
                        onEdit={(item: Department) => {
                          setCurrentItem(item);
                          setModalType('edit');
                          setShowModal(true);
                        }}
                        onDelete={(item: Department) => {
                          setDepartments(departments.filter(d => d.id !== item.id));
                          saveData();
                        }}
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'admissions' && (
              <motion.div
                key="admissions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {/* Tabs */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="border-b border-gray-200">
                    <nav className="flex space-x-8 px-6">
                      {admissionsTabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`py-4 px-1 border-b-2 font-medium text-sm ${
                            activeTab === tab.id || (activeTab === '' && tab.id === 'info')
                              ? 'border-blue-500 text-blue-600'
                              : 'border-transparent text-gray-500 hover:text-gray-700'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </nav>
                  </div>
                  
                  <div className="p-6">
                    {(activeTab === 'info' || activeTab === '') && (
                      <DataTable
                        data={admissionInfo}
                        columns={[
                          { key: 'title', label: 'Title' },
                          { key: 'category', label: 'Category' },
                          { key: 'deadline', label: 'Deadline' },
                        ]}
                        onEdit={(item: AdmissionInfo) => {
                          setCurrentItem(item);
                          setModalType('edit');
                          setShowModal(true);
                        }}
                        onDelete={(item: AdmissionInfo) => {
                          setAdmissionInfo(admissionInfo.filter(a => a.id !== item.id));
                          saveData();
                        }}
                      />
                    )}
                    
                    {activeTab === 'careers' && (
                      <DataTable
                        data={careers}
                        columns={[
                          { key: 'position', label: 'Position' },
                          { key: 'department', label: 'Department' },
                          { key: 'type', label: 'Type' },
                          { key: 'status', label: 'Status' },
                        ]}
                        onEdit={(item: Career) => {
                          setCurrentItem(item);
                          setModalType('edit');
                          setShowModal(true);
                        }}
                        onDelete={(item: Career) => {
                          setCareers(careers.filter(c => c.id !== item.id));
                          saveData();
                        }}
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'school-life' && (
              <motion.div
                key="school-life"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {/* Tabs */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="border-b border-gray-200">
                    <nav className="flex space-x-8 px-6">
                      {schoolLifeTabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`py-4 px-1 border-b-2 font-medium text-sm ${
                            activeTab === tab.id || (activeTab === '' && tab.id === 'events')
                              ? 'border-blue-500 text-blue-600'
                              : 'border-transparent text-gray-500 hover:text-gray-700'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </nav>
                  </div>
                  
                  <div className="p-6">
                    {(activeTab === 'events' || activeTab === '') && (
                      <DataTable
                        data={schoolEvents}
                        columns={[
                          { key: 'title', label: 'Event' },
                          { key: 'date', label: 'Date' },
                          { key: 'category', label: 'Category' },
                          { key: 'status', label: 'Status' },
                        ]}
                        onEdit={(item: SchoolEvent) => {
                          setCurrentItem(item);
                          setModalType('edit');
                          setShowModal(true);
                        }}
                        onDelete={(item: SchoolEvent) => {
                          setSchoolEvents(schoolEvents.filter(e => e.id !== item.id));
                          saveData();
                        }}
                      />
                    )}
                    
                    {activeTab === 'gallery' && (
                      <DataTable
                        data={galleryItems}
                        columns={[
                          { key: 'title', label: 'Title' },
                          { key: 'category', label: 'Category' },
                          { key: 'date', label: 'Date' },
                        ]}
                        onEdit={(item: GalleryItem) => {
                          setCurrentItem(item);
                          setModalType('edit');
                          setShowModal(true);
                        }}
                        onDelete={(item: GalleryItem) => {
                          setGalleryItems(galleryItems.filter(g => g.id !== item.id));
                          saveData();
                        }}
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardPage;