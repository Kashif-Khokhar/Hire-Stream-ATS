# HireStream ATS

![HireStream ATS](public/logo.svg)

> **A Premium, State-of-the-Art Applicant Tracking System.**
> Built with React, TypeScript, Tailwind CSS, and a focus on "Clean-Tech" aesthetics.

HireStream is a modern recruitment platform designed to streamline the hiring process with a visually stunning and highly interactive user interface. It features a comprehensive dashboard, drag-and-drop pipeline management, and detailed candidate profiles, all wrapped in a sophisticated glassmorphism design.

---

## 🚀 Key Features

- **📊 Interactive Dashboard**
  - Real-time recruitment statistics.
  - Recent activity feed with status updates.
  - visual application trend charts.

- **⚡ Kanban Pipeline**
  - Drag-and-drop candidate management using `dnd-kit`.
  - Color-coded role tags for instant recognition.
  - Smooth transitions and animations.

- **👤 Premium Candidate Profiles**
  - Detailed modal views with glassmorphism backgrounds.
  - Status-coded metadata (Email, Phone, Location).
  - 5-star rating system and timeline-based notes.

- **📅 Interview Scheduler**
  - List and Calendar views for upcoming events.
  - Intelligent conflict resolution placeholders.
  - Integrated "System Intel" widgets.

- **💼 Job Requisition Management**
  - Create, track, and manage job openings.
  - Detailed metrics for candidates and application status.

- **🎨 "Clean-Tech" Aesthetic**
  - **Premium Typography**: Uses **Outfit** (Display) and **Inter** (Sans).
  - **Glassmorphism**: Advanced blur effects on Navbars and overlays.
  - **Dark Mode Ready**: Sophisticated slate and brand-color palette.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **State Management**: React Context API
- **Drag & Drop**: [@dnd-kit/core](https://dndkit.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)

---

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/Hire-Stream-ATS.git
    cd Hire-Stream-ATS
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:5173` to view the application.

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── candidates/    # Candidate list & profile components
│   ├── dashboard/     # Dashboard overview widgets
│   ├── help/          # Help center & support pages
│   ├── jobs/          # Job requisition cards & forms
│   ├── kanban/        # Drag-and-drop board & columns
│   ├── layout/        # Sidebar, Navbar, & Shell
│   ├── schedule/      # Calendar & event views
│   └── settings/      # Application settings forms
├── context/           # Global state (JobContext)
├── types/             # TypeScript definitions
└── utils/             # Helper functions (cn, etc.)
```

---

## 🎨 Design System

**Colors:**
- **Brand**: Slate Blue (`#0ea5e9` to `#0284c7`)
- **Accent**: Violet (`#8b5cf6`)
- **Success**: Emerald (`#10b981`)
- **Surfaces**: Slate-50 to White with Glassmorphism

**Typography:**
- **Headings**: *Outfit* (Italic, Uppercase, Variable Weights)
- **Body**: *Inter* (Clean, Legible)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
