// Database Schema and Operations
// This file handles all database operations for the admin dashboard

export interface DatabaseSchema {
  curriculum: Curriculum[];
  departments: Department[];
  schoolEvents: SchoolEvent[];
  admissionInfo: AdmissionInfo[];
  careers: Career[];
  galleryItems: GalleryItem[];
  settings: Settings;
}

export interface Curriculum {
  id: string;
  subject: string;
  description: string;
  gradeLevel: string;
  objectives: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Department {
  id: string;
  name: string;
  head: string;
  subjects: string[];
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  category: 'academic' | 'sports' | 'cultural' | 'religious';
  location: string;
  targetAudience: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AdmissionInfo {
  id: string;
  title: string;
  content: string;
  requirements: string[];
  deadline: string;
  category: 'requirements' | 'process' | 'fees' | 'dates';
  priority: 'high' | 'medium' | 'low';
  createdAt: string;
  updatedAt: string;
}

export interface Career {
  id: string;
  position: string;
  department: string;
  type: 'full-time' | 'part-time' | 'contract';
  experience: string;
  requirements: string[];
  description: string;
  deadline: string;
  status: 'open' | 'closed';
  salary?: string;
  createdAt: string;
  updatedAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Settings {
  id: string;
  schoolName: string;
  schoolMotto: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
  updatedAt: string;
}

// Database Operations Class
export class Database {
  private static instance: Database;
  private data: DatabaseSchema;

  private constructor() {
    this.data = this.loadFromStorage();
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  private loadFromStorage(): DatabaseSchema {
    const defaultData: DatabaseSchema = {
      curriculum: [],
      departments: [],
      schoolEvents: [],
      admissionInfo: [],
      careers: [],
      galleryItems: [],
      settings: {
        id: '1',
        schoolName: 'St. Noa Mawagali S.S.S',
        schoolMotto: 'Wisdom Comes from God',
        contactEmail: 'st.noamawaggaliss@gmail.com',
        contactPhone: '+256-772-658134',
        address: 'Mbikko Parish, Njeru-Buikwe District, Uganda',
        socialMedia: {},
        updatedAt: new Date().toISOString(),
      },
    };

    try {
      const stored = localStorage.getItem('snoams_database');
      if (stored) {
        return { ...defaultData, ...JSON.parse(stored) };
      }
    } catch (error) {
      console.error('Error loading data from storage:', error);
    }

    return defaultData;
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem('snoams_database', JSON.stringify(this.data));
    } catch (error) {
      console.error('Error saving data to storage:', error);
    }
  }

  // Generic CRUD operations
  private generateId(): string {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }

  // Curriculum operations
  public getCurriculum(): Curriculum[] {
    return this.data.curriculum;
  }

  public addCurriculum(curriculum: Omit<Curriculum, 'id' | 'createdAt' | 'updatedAt'>): Curriculum {
    const newCurriculum: Curriculum = {
      ...curriculum,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.data.curriculum.push(newCurriculum);
    this.saveToStorage();
    return newCurriculum;
  }

  public updateCurriculum(id: string, updates: Partial<Curriculum>): Curriculum | null {
    const index = this.data.curriculum.findIndex(c => c.id === id);
    if (index === -1) return null;

    this.data.curriculum[index] = {
      ...this.data.curriculum[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    this.saveToStorage();
    return this.data.curriculum[index];
  }

  public deleteCurriculum(id: string): boolean {
    const index = this.data.curriculum.findIndex(c => c.id === id);
    if (index === -1) return false;

    this.data.curriculum.splice(index, 1);
    this.saveToStorage();
    return true;
  }

  // Department operations
  public getDepartments(): Department[] {
    return this.data.departments;
  }

  public addDepartment(department: Omit<Department, 'id' | 'createdAt' | 'updatedAt'>): Department {
    const newDepartment: Department = {
      ...department,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.data.departments.push(newDepartment);
    this.saveToStorage();
    return newDepartment;
  }

  public updateDepartment(id: string, updates: Partial<Department>): Department | null {
    const index = this.data.departments.findIndex(d => d.id === id);
    if (index === -1) return null;

    this.data.departments[index] = {
      ...this.data.departments[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    this.saveToStorage();
    return this.data.departments[index];
  }

  public deleteDepartment(id: string): boolean {
    const index = this.data.departments.findIndex(d => d.id === id);
    if (index === -1) return false;

    this.data.departments.splice(index, 1);
    this.saveToStorage();
    return true;
  }

  // School Events operations
  public getSchoolEvents(): SchoolEvent[] {
    return this.data.schoolEvents;
  }

  public addSchoolEvent(event: Omit<SchoolEvent, 'id' | 'createdAt' | 'updatedAt'>): SchoolEvent {
    const newEvent: SchoolEvent = {
      ...event,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.data.schoolEvents.push(newEvent);
    this.saveToStorage();
    return newEvent;
  }

  public updateSchoolEvent(id: string, updates: Partial<SchoolEvent>): SchoolEvent | null {
    const index = this.data.schoolEvents.findIndex(e => e.id === id);
    if (index === -1) return null;

    this.data.schoolEvents[index] = {
      ...this.data.schoolEvents[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    this.saveToStorage();
    return this.data.schoolEvents[index];
  }

  public deleteSchoolEvent(id: string): boolean {
    const index = this.data.schoolEvents.findIndex(e => e.id === id);
    if (index === -1) return false;

    this.data.schoolEvents.splice(index, 1);
    this.saveToStorage();
    return true;
  }

  // Admission Info operations
  public getAdmissionInfo(): AdmissionInfo[] {
    return this.data.admissionInfo;
  }

  public addAdmissionInfo(info: Omit<AdmissionInfo, 'id' | 'createdAt' | 'updatedAt'>): AdmissionInfo {
    const newInfo: AdmissionInfo = {
      ...info,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.data.admissionInfo.push(newInfo);
    this.saveToStorage();
    return newInfo;
  }

  public updateAdmissionInfo(id: string, updates: Partial<AdmissionInfo>): AdmissionInfo | null {
    const index = this.data.admissionInfo.findIndex(a => a.id === id);
    if (index === -1) return null;

    this.data.admissionInfo[index] = {
      ...this.data.admissionInfo[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    this.saveToStorage();
    return this.data.admissionInfo[index];
  }

  public deleteAdmissionInfo(id: string): boolean {
    const index = this.data.admissionInfo.findIndex(a => a.id === id);
    if (index === -1) return false;

    this.data.admissionInfo.splice(index, 1);
    this.saveToStorage();
    return true;
  }

  // Career operations
  public getCareers(): Career[] {
    return this.data.careers;
  }

  public addCareer(career: Omit<Career, 'id' | 'createdAt' | 'updatedAt'>): Career {
    const newCareer: Career = {
      ...career,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.data.careers.push(newCareer);
    this.saveToStorage();
    return newCareer;
  }

  public updateCareer(id: string, updates: Partial<Career>): Career | null {
    const index = this.data.careers.findIndex(c => c.id === id);
    if (index === -1) return null;

    this.data.careers[index] = {
      ...this.data.careers[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    this.saveToStorage();
    return this.data.careers[index];
  }

  public deleteCareer(id: string): boolean {
    const index = this.data.careers.findIndex(c => c.id === id);
    if (index === -1) return false;

    this.data.careers.splice(index, 1);
    this.saveToStorage();
    return true;
  }

  // Gallery operations
  public getGalleryItems(): GalleryItem[] {
    return this.data.galleryItems;
  }

  public addGalleryItem(item: Omit<GalleryItem, 'id' | 'createdAt' | 'updatedAt'>): GalleryItem {
    const newItem: GalleryItem = {
      ...item,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.data.galleryItems.push(newItem);
    this.saveToStorage();
    return newItem;
  }

  public updateGalleryItem(id: string, updates: Partial<GalleryItem>): GalleryItem | null {
    const index = this.data.galleryItems.findIndex(g => g.id === id);
    if (index === -1) return null;

    this.data.galleryItems[index] = {
      ...this.data.galleryItems[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    this.saveToStorage();
    return this.data.galleryItems[index];
  }

  public deleteGalleryItem(id: string): boolean {
    const index = this.data.galleryItems.findIndex(g => g.id === id);
    if (index === -1) return false;

    this.data.galleryItems.splice(index, 1);
    this.saveToStorage();
    return true;
  }

  // Settings operations
  public getSettings(): Settings {
    return this.data.settings;
  }

  public updateSettings(updates: Partial<Settings>): Settings {
    this.data.settings = {
      ...this.data.settings,
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    this.saveToStorage();
    return this.data.settings;
  }

  // Utility methods
  public exportData(): string {
    return JSON.stringify(this.data, null, 2);
  }

  public importData(jsonData: string): boolean {
    try {
      const importedData = JSON.parse(jsonData);
      this.data = { ...this.data, ...importedData };
      this.saveToStorage();
      return true;
    } catch (error) {
      console.error('Error importing data:', error);
      return false;
    }
  }

  public clearAllData(): void {
    this.data = {
      curriculum: [],
      departments: [],
      schoolEvents: [],
      admissionInfo: [],
      careers: [],
      galleryItems: [],
      settings: this.data.settings, // Keep settings
    };
    this.saveToStorage();
  }
}

// Export singleton instance
export const db = Database.getInstance();