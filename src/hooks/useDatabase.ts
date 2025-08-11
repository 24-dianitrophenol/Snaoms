import { useState, useEffect } from 'react';
import { db, Curriculum, Department, SchoolEvent, AdmissionInfo, Career, GalleryItem } from '../lib/database';

// Custom hook for curriculum management
export const useCurriculum = () => {
  const [curriculum, setCurriculum] = useState<Curriculum[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCurriculum(db.getCurriculum());
    setLoading(false);
  }, []);

  const addCurriculum = (data: Omit<Curriculum, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newItem = db.addCurriculum(data);
    setCurriculum(db.getCurriculum());
    return newItem;
  };

  const updateCurriculum = (id: string, updates: Partial<Curriculum>) => {
    const updated = db.updateCurriculum(id, updates);
    setCurriculum(db.getCurriculum());
    return updated;
  };

  const deleteCurriculum = (id: string) => {
    const success = db.deleteCurriculum(id);
    setCurriculum(db.getCurriculum());
    return success;
  };

  return {
    curriculum,
    loading,
    addCurriculum,
    updateCurriculum,
    deleteCurriculum,
  };
};

// Custom hook for departments management
export const useDepartments = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setDepartments(db.getDepartments());
    setLoading(false);
  }, []);

  const addDepartment = (data: Omit<Department, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newItem = db.addDepartment(data);
    setDepartments(db.getDepartments());
    return newItem;
  };

  const updateDepartment = (id: string, updates: Partial<Department>) => {
    const updated = db.updateDepartment(id, updates);
    setDepartments(db.getDepartments());
    return updated;
  };

  const deleteDepartment = (id: string) => {
    const success = db.deleteDepartment(id);
    setDepartments(db.getDepartments());
    return success;
  };

  return {
    departments,
    loading,
    addDepartment,
    updateDepartment,
    deleteDepartment,
  };
};

// Custom hook for school events management
export const useSchoolEvents = () => {
  const [schoolEvents, setSchoolEvents] = useState<SchoolEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSchoolEvents(db.getSchoolEvents());
    setLoading(false);
  }, []);

  const addSchoolEvent = (data: Omit<SchoolEvent, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newItem = db.addSchoolEvent(data);
    setSchoolEvents(db.getSchoolEvents());
    return newItem;
  };

  const updateSchoolEvent = (id: string, updates: Partial<SchoolEvent>) => {
    const updated = db.updateSchoolEvent(id, updates);
    setSchoolEvents(db.getSchoolEvents());
    return updated;
  };

  const deleteSchoolEvent = (id: string) => {
    const success = db.deleteSchoolEvent(id);
    setSchoolEvents(db.getSchoolEvents());
    return success;
  };

  return {
    schoolEvents,
    loading,
    addSchoolEvent,
    updateSchoolEvent,
    deleteSchoolEvent,
  };
};

// Custom hook for admission info management
export const useAdmissionInfo = () => {
  const [admissionInfo, setAdmissionInfo] = useState<AdmissionInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAdmissionInfo(db.getAdmissionInfo());
    setLoading(false);
  }, []);

  const addAdmissionInfo = (data: Omit<AdmissionInfo, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newItem = db.addAdmissionInfo(data);
    setAdmissionInfo(db.getAdmissionInfo());
    return newItem;
  };

  const updateAdmissionInfo = (id: string, updates: Partial<AdmissionInfo>) => {
    const updated = db.updateAdmissionInfo(id, updates);
    setAdmissionInfo(db.getAdmissionInfo());
    return updated;
  };

  const deleteAdmissionInfo = (id: string) => {
    const success = db.deleteAdmissionInfo(id);
    setAdmissionInfo(db.getAdmissionInfo());
    return success;
  };

  return {
    admissionInfo,
    loading,
    addAdmissionInfo,
    updateAdmissionInfo,
    deleteAdmissionInfo,
  };
};

// Custom hook for careers management
export const useCareers = () => {
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCareers(db.getCareers());
    setLoading(false);
  }, []);

  const addCareer = (data: Omit<Career, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newItem = db.addCareer(data);
    setCareers(db.getCareers());
    return newItem;
  };

  const updateCareer = (id: string, updates: Partial<Career>) => {
    const updated = db.updateCareer(id, updates);
    setCareers(db.getCareers());
    return updated;
  };

  const deleteCareer = (id: string) => {
    const success = db.deleteCareer(id);
    setCareers(db.getCareers());
    return success;
  };

  return {
    careers,
    loading,
    addCareer,
    updateCareer,
    deleteCareer,
  };
};

// Custom hook for gallery management
export const useGallery = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setGalleryItems(db.getGalleryItems());
    setLoading(false);
  }, []);

  const addGalleryItem = (data: Omit<GalleryItem, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newItem = db.addGalleryItem(data);
    setGalleryItems(db.getGalleryItems());
    return newItem;
  };

  const updateGalleryItem = (id: string, updates: Partial<GalleryItem>) => {
    const updated = db.updateGalleryItem(id, updates);
    setGalleryItems(db.getGalleryItems());
    return updated;
  };

  const deleteGalleryItem = (id: string) => {
    const success = db.deleteGalleryItem(id);
    setGalleryItems(db.getGalleryItems());
    return success;
  };

  return {
    galleryItems,
    loading,
    addGalleryItem,
    updateGalleryItem,
    deleteGalleryItem,
  };
};