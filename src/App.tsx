import { useState } from 'react';
import { JobProvider } from './context/JobContext';
import { Sidebar } from './components/layout/Sidebar';
import type { AppView } from './components/layout/Sidebar';
import { Navbar } from './components/layout/Navbar';
import { Board } from './components/kanban/Board';
import { JobListing } from './components/jobs/JobListing';
import { JobForm } from './components/jobs/JobForm';
import { CandidateProfile } from './components/candidates/CandidateProfile';
import { CandidatesList } from './components/candidates/CandidatesList';
import { ScheduleView } from './components/schedule/ScheduleView';
import { SettingsPage } from './components/settings/SettingsPage';
import { HelpPage } from './components/help/HelpPage';
import { DashboardOverview } from './components/dashboard/DashboardOverview';
import type { Candidate } from './types';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('dashboard');
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [showJobForm, setShowJobForm] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'pipeline':
        return (
          <>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl font-black text-slate-900 italic">Recruitment Pipeline</h1>
                <p className="text-slate-500 text-sm mt-1 font-medium italic">Manage and track your candidate progress across stages.</p>
              </div>
              <button className="bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-xl text-sm font-black shadow-lg shadow-brand-500/20 transition-all active:scale-95 w-full md:w-auto">
                Add Candidate
              </button>
            </div>
            <Board onCandidateClick={setSelectedCandidate} />
          </>
        );
      case 'jobs':
        return <JobListing onCreateJob={() => setShowJobForm(true)} />;
      case 'candidates':
        return <CandidatesList onCandidateClick={setSelectedCandidate} />;
      case 'schedule':
        return <ScheduleView />;
      case 'settings':
        return <SettingsPage />;
      case 'help':
        return <HelpPage />;
      default:
        return null;
    }
  };

  return (
    <JobProvider>
      <div className="min-h-screen bg-slate-50 flex">
        <Sidebar
          currentView={currentView}
          onNavigate={(view) => {
            setCurrentView(view);
            setIsSidebarOpen(false); // Close mobile sidebar on navigate
          }}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          isCollapsed={isSidebarCollapsed}
          toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />
        <div className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
          <Navbar
            onMenuClick={() => setIsSidebarOpen(true)}
            isSidebarCollapsed={isSidebarCollapsed}
          />
          <main className="flex-1 p-4 md:p-10 overflow-x-hidden min-h-[calc(100vh-80px)]">
            <div className="max-w-[1600px] mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
              {renderContent()}
            </div>
          </main>
        </div>

        {selectedCandidate && (
          <CandidateProfile
            candidate={selectedCandidate}
            onClose={() => setSelectedCandidate(null)}
          />
        )}

        {showJobForm && (
          <JobForm onClose={() => setShowJobForm(false)} />
        )}
      </div>
    </JobProvider>
  );
}

export default App;
