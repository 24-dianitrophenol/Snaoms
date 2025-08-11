# St. Noa Mawagali Secondary School Website

A comprehensive school website built with React, TypeScript, and Tailwind CSS, featuring a modern inline admin dashboard for content management.

## 🚀 Features

### Public Website
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Dynamic Navigation**: Dropdown menus for organized content structure
- **Multiple Sections**: About, Academics, Admissions, School Life, Alumni, Contact
- **Interactive Components**: Smooth animations and transitions using Framer Motion
- **Search Functionality**: Integrated search across website content
- **Contact Information**: Phone numbers, email, and location details

### Admin Dashboard (Inline Content Management)
- **Consolidated Interface**: Single dashboard managing all website content
- **Three Main Sections**:
  - **Academics**: Curriculum, Departments, School Program, Co-Curriculars, Circular, Performance
  - **Admissions**: Student Admissions, Careers, How to Apply
  - **School Life**: Events, Facilities, Prefect Body, Clubs, Gallery
- **Real-time Editing**: Inline content editing with save functionality
- **Data Persistence**: Content saved to localStorage (simulated backend)
- **Theme Consistency**: Dark blue (#191635) and yellow (#FBE805) color scheme

## 🏗️ Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components
│   ├── home/           # Home page components
│   └── layout/         # Layout components (Navbar, Footer)
├── pages/
│   ├── about/          # About section pages
│   ├── academics/      # Academics section pages
│   ├── admissions/     # Admissions section pages
│   ├── school-life/    # School life section pages
│   └── admin/          # Admin dashboard
├── assets/             # Static assets
└── main.tsx           # Application entry point
```

## 🎨 Design System

### Color Palette
- **Primary Dark Blue**: `#191635` (Navigation, buttons, active states)
- **Accent Yellow**: `#FBE805` (Highlights, icons, text on dark backgrounds)
- **Green**: `#33A158` (Success states, tags)
- **Gray Scale**: Various shades for text, backgrounds, and borders

### Typography
- **Headings**: Bold, clear hierarchy
- **Body Text**: Readable, appropriate line spacing
- **Navigation**: Medium weight for clarity

## 🔧 Admin Dashboard Features

### Content Management Sections

#### Academics
- **Curriculum**: Manage subjects, descriptions, grade levels, and learning objectives
- **Departments**: Organize academic departments with heads and subject lists
- **School Program**: Term planning with dates, descriptions, and activities
- **Co-Curriculars**: Track extracurricular activities and programs
- **Circular**: School announcements and circulars with priority levels
- **Performance**: Academic performance metrics and achievements

#### Admissions
- **Student Admissions**: Application requirements, processes, and forms
- **Careers**: Job postings with requirements, deadlines, and status
- **How to Apply**: Step-by-step application guidance

#### School Life
- **Events**: School events with dates, descriptions, and status tracking
- **Facilities**: School facilities with locations, capacity, and availability status
- **Prefect Body**: Student leadership structure and member management
- **Clubs**: Student clubs with leaders, member counts, and activities
- **Gallery**: Photo gallery with categories and descriptions

### Admin Features
- **Inline Editing**: Edit content directly in the interface
- **Bulk Save**: Save all changes across all sections at once
- **Real-time Preview**: See changes immediately
- **Data Validation**: Form validation for required fields
- **Responsive Design**: Works on all device sizes

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd Snaoms
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Admin Access
1. Navigate to `/admin/login`
2. Use any credentials (demo mode)
3. Access the inline dashboard at `/admin/dashboard`

## 📱 Responsive Design

The website is fully responsive with:
- **Mobile-first approach**: Optimized for mobile devices
- **Tablet support**: Intermediate breakpoints for tablets
- **Desktop optimization**: Full-featured desktop experience
- **Touch-friendly**: Large touch targets for mobile users

## 🎯 Key Features

### Navigation
- **Sticky Header**: Navigation stays visible while scrolling
- **Dropdown Menus**: Organized content structure
- **Mobile Menu**: Hamburger menu for mobile devices
- **Search Integration**: Global search functionality

### Content Management
- **Dynamic Content**: All content managed through admin dashboard
- **Real-time Updates**: Changes reflect immediately on public pages
- **Data Persistence**: Content saved locally (simulated backend)
- **Bulk Operations**: Edit multiple items simultaneously

### Performance
- **Optimized Images**: Compressed and responsive images
- **Lazy Loading**: Components load as needed
- **Smooth Animations**: Framer Motion for fluid transitions
- **Fast Loading**: Optimized bundle size

## 🔒 Security Features

- **Admin Authentication**: Simple client-side authentication
- **Protected Routes**: Admin routes require authentication
- **Session Management**: Login state persistence
- **Logout Functionality**: Secure logout process

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📝 Content Management Workflow

1. **Login**: Access admin dashboard with credentials
2. **Select Section**: Choose Academics, Admissions, or School Life
3. **Choose Tab**: Select specific content type (e.g., Curriculum, Events)
4. **Edit Content**: Modify content inline
5. **Save Changes**: Save all modifications at once
6. **Preview**: View changes on public pages

## 🎨 Customization

### Adding New Content Types
1. Define interface in `AdminDashboardPage.tsx`
2. Add state management
3. Create render function for the content
4. Add to section tabs configuration
5. Implement save functionality

### Modifying Styles
- Use Tailwind CSS classes for styling
- Follow the established color palette
- Maintain responsive design principles
- Use Framer Motion for animations

## 📊 Data Structure

All content is stored in localStorage with the following structure:
- `curriculum`: Academic curriculum data
- `departments`: Department information
- `termPlans`: Academic term planning
- `schoolEvents`: School event calendar
- `circulars`: School announcements
- `admissionInfo`: Admission requirements and processes
- `careers`: Job postings
- `prefectMembers`: Student leadership
- `events`: School life events
- `galleryItems`: Photo gallery
- `clubs`: Student clubs
- `facilities`: School facilities

## 🔄 Future Enhancements

- **Backend Integration**: Real database and API
- **User Management**: Multiple admin accounts
- **Media Upload**: File upload functionality
- **Analytics**: Website usage statistics
- **Email Integration**: Contact form functionality
- **SEO Optimization**: Meta tags and structured data
- **PWA Features**: Offline functionality and app-like experience

## 📞 Support

For technical support or questions about the admin dashboard:
- Check the inline help within the dashboard
- Review the console for any error messages
- Ensure all dependencies are properly installed

## 📄 License

This project is developed for St. Noa Mawagali Secondary School. All rights reserved.

---

**Built with ❤️ for educational excellence**
