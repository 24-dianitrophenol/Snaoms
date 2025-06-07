import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/common/SplashScreen';

// Layout Components
import Layout from './components/layout/Layout';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import SchoolLifePage from './pages/SchoolLifePage';
import AlumniPage from './pages/AlumniPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Sub-pages
import HistoryPage from './pages/about/HistoryPage';
import AnthemPage from './pages/about/AnthemPage';
import ProfilePage from './pages/about/ProfilePage';
import AdministrationPage from './pages/about/AdministrationPage';
import DirectorMessagePage from './pages/about/DirectorMessagePage';

import CurriculumPage from './pages/academics/CurriculumPage';
import CoCurricularsPage from './pages/academics/CoCurricularsPage';
import DepartmentsPage from './pages/academics/DepartmentsPage';
import CircularPage from './pages/academics/CircularPage';
import SchoolPerformancePage from './pages/SchoolPerformancePage';

import CareersPage from './pages/admissions/CareersPage';
import HowToApplyPage from './pages/admissions/HowToApplyPage';

import EventsPage from './pages/school-life/EventsPage';
import FacilitiesPage from './pages/school-life/FacilitiesPage';
import PrefectBodyPage from './pages/school-life/PrefectBodyPage';
import ClubsPage from './pages/school-life/ClubsPage';
import GalleryPage from './pages/school-life/GalleryPage';

import AdvertsPage from './pages/AdvertsPage';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />

                {/* About Routes */}
                <Route path="about" element={<AboutPage />} />
                <Route path="about/history" element={<HistoryPage />} />
                <Route path="about/anthem" element={<AnthemPage />} />
                <Route path="about/profile" element={<ProfilePage />} />
                <Route path="about/administration" element={<AdministrationPage />} />
                <Route path="about/directors-message" element={<DirectorMessagePage />} />

                {/* Academics Routes */}
                <Route path="academics" element={<AcademicsPage />} />
                <Route path="academics/curriculum" element={<CurriculumPage />} />
                <Route path="academics/co-curriculars" element={<CoCurricularsPage />} />
                <Route path="academics/departments" element={<DepartmentsPage />} />
                <Route path="academics/circular" element={<CircularPage />} />
                <Route path="academics/school-performance" element={<SchoolPerformancePage />} />

                {/* Admissions Routes */}
                <Route path="admissions" element={<AdmissionsPage />} />
                <Route path="admissions/careers" element={<CareersPage />} />
                <Route path="admissions/how-to-apply" element={<HowToApplyPage />} />

                {/* School Life Routes */}
                <Route path="school-life" element={<SchoolLifePage />} />
                <Route path="school-life/events" element={<EventsPage />} />
                <Route path="school-life/facilities" element={<FacilitiesPage />} />
                <Route path="school-life/prefect-body" element={<PrefectBodyPage />} />
                <Route path="school-life/clubs" element={<ClubsPage />} />
                <Route path="school-life/gallery" element={<GalleryPage />} />

                {/* Other Main Routes */}
                <Route path="alumni" element={<AlumniPage />} />
                <Route path="contact" element={<ContactPage />} />

                {/* Adverts Route */}
                <Route path="/adverts" element={<AdvertsPage />} />

                {/* Catch-all for 404 */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
};

export default App;