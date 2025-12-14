# TaskFlow Board - Task Management App

## 📋 Project Overview

A responsive Trello-style task management application with drag-and-drop functionality, filtering, sorting, and localStorage persistence.

## 🚀 Live Demo

-   **Live URL**: [Deployed Link Here]
-   **GitHub Repo**: [Repository Link Here]

## ✨ Features

### Core Features

-   ✅ 3-Column Kanban Board (To-Do, In-Progress, Completed)
-   ✅ Drag & Drop between columns
-   ✅ Create, Read, Update, Delete tasks
-   ✅ Priority levels (High, Medium, Low)
-   ✅ Due date tracking with visual indicators
-   ✅ Duplicate task detection

### UI/UX Features

-   ✅ Fully responsive design (Mobile, Tablet, Desktop)
-   ✅ Clean, modern interface with Tailwind CSS
-   ✅ Task creation/editing modal
-   ✅ Confirmation modal for deletions

### Advanced Features

-   ✅ Filter by priority and status
-   ✅ Sort by: Newest, Oldest, Due Date
-   ✅ LocalStorage persistence
-   ✅ Initial data from JSON file
-   ✅ Real-time status updates

## 🛠️ Tech Stack

-   **React** - Frontend framework
-   **Tailwind CSS** - Styling
-   **react-beautiful-dnd** - Drag and drop
-   **date-fns** - Date manipulation
-   **React Icons** - Icons

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar
│   ├── TaskForm.jsx        # Task creation/edit form
│   ├── TaskCard.jsx        # Individual task display
│   ├── Column.jsx          # Kanban column
│   ├── FilterSort.jsx      # Filter & sort controls
│   └── ConfirmationModal.jsx # Delete confirmation
├── hooks/
│   └── useLocalStorage.js  # Custom localStorage hook
├── utils/
│   └── helpers.js          # Utility functions
├── App.jsx                 # Main component
└── index.js               # App entry point
```

## 🔧 Installation & Setup

### Prerequisites

-   Node.js (v14 or higher)
-   npm or yarn

### Steps

1. Clone the repository:

```bash
git clone [your-repo-url]
cd taskflow-board
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Usage Instructions

### Adding a Task

1. Click "Add Task" button in navigation
2. Fill in task details (title, description, priority, due date, status)
3. Click "Create Task"

### Editing a Task

1. Click edit icon (✏️) on task card
2. Modify task details
3. Click "Update Task"

### Deleting a Task

1. Click delete icon (🗑️) on task card
2. Confirm deletion in modal

### Moving Tasks

-   Drag and drop tasks between columns to change status

### Filtering & Sorting

-   Use filters to show tasks by priority or status
-   Sort tasks by: Newest, Oldest, Closest due date

## 🚀 Deployment

### Deploy on Vercel

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. Deploy:

```bash
vercel
```

### Deploy on GitHub Pages

1. Update `package.json`:

```json
"homepage": "https://username.github.io/repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

2. Deploy:

```bash
npm run deploy
```

## 📦 Available Scripts

-   `npm start` - Start development server
-   `npm run build` - Build for production
-   `npm test` - Run tests
-   `npm run deploy` - Deploy to GitHub Pages

## 🗃️ Data Storage

-   All task data persists in browser's localStorage
-   Initial tasks loaded from `public/tasks.json`
-   Data survives browser refresh/restart

## 📱 Browser Support

-   Chrome 90+
-   Firefox 88+
-   Safari 14+
-   Edge 90+

## 📄 License

MIT License
