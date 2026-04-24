# Task Management Dashboard

A modern, responsive Task Management Dashboard built with React, Node.js, and MongoDB. Features include user authentication, CRUD operations for tasks, search functionality, and a beautiful UI/UX design.

## 🚀 Features

### Authentication
- ✅ User Registration & Login
- ✅ JWT-based Authentication
- ✅ Protected Routes
- ✅ Input Validation
- ✅ Password Hashing

### Task Management
- ✅ Create, Read, Update, Delete Tasks
- ✅ Mark Tasks as Complete/Pending
- ✅ Search Tasks
- ✅ Filter Tasks (All, Completed, Pending)
- ✅ Real-time Statistics
- ✅ User-specific Tasks

### Backend
- ✅ RESTful API
- ✅ Input Validation
- ✅ Error Handling
- ✅ Database Indexing
- ✅ Security Best Practices

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI Library
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Axios** - HTTP Client
- **React Hot Toast** - Notifications

### Backend
- **Node.js** - Runtime
- **Express** - Web Framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password Hashing

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/JahanviSharma16/task-manager.git
cd task-manager
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Configure .env file
```

**Environment Variables (.env):**
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key_here
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install
```

### 4. Start the Application

**Start Backend:**
```bash
# From backend directory
npm run dev
```

**Start Frontend:**
```bash
# From frontend directory
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 📁 Project Structure

```
task-manager/
├── backend/
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── controllers/
│   │   ├── authController.js  # Authentication logic
│   │   └── taskController.js  # Task CRUD operations
│   ├── middleware/
│   │   └── authMiddleware.js  # JWT verification
│   ├── models/
│   │   ├── User.js           # User schema
│   │   └── Task.js           # Task schema
│   ├── routes/
│   │   ├── authRoutes.js     # Authentication routes
│   │   └── taskRoutes.js     # Task routes
│   ├── .env.example          # Environment variables template
│   └── server.js             # Express server
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js      # API configuration
│   │   ├── components/
│   │   │   ├── Loader.jsx    # Loading component
│   │   │   └── TaskCard.jsx  # Task card component
│   │   ├── context/
│   │   │   ├── AuthContext.jsx # Authentication context
│   │   │   └── TaskContext.jsx # Task context
│   │   ├── pages/
│   │   │   ├── Login.jsx     # Login page
│   │   │   ├── Register.jsx  # Registration page
│   │   │   └── Dashboard.jsx # Main dashboard
│   │   ├── routes/
│   │   │   └── ProtectedRoute.jsx # Route protection
│   │   ├── App.jsx           # Main App component
│   │   ├── main.jsx          # Entry point
│   │   └── index.css         # Global styles
│   └── package.json
└── README.md
```

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Tasks
- `GET /api/tasks` - Get user tasks (with pagination, search, filters)
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

### Query Parameters for GET /api/tasks
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `status` - Filter by status (completed/pending)
- `search` - Search in task titles

## 🎨 UI Features

### Dashboard
- **Statistics Cards**: Display total, completed, and pending tasks
- **Task Creation**: Quick task input with validation
- **Search Bar**: Real-time task search
- **Filter Buttons**: Filter tasks by status
- **Task List**: Interactive task cards with actions

### Authentication Pages
- **Modern Design**: Gradient backgrounds and card layouts
- **Form Validation**: Real-time input validation
- **Loading States**: Visual feedback during operations
- **Error Handling**: User-friendly error messages

### Task Cards
- **Interactive Elements**: Hover effects and animations
- **Status Toggle**: Click to mark complete/pending
- **Delete Confirmation**: Safe task deletion
- **Visual Feedback**: Different styles for completed tasks

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for secure password storage
- **Input Validation**: Server-side validation for all inputs
- **CORS Configuration**: Proper cross-origin resource sharing
- **Route Protection**: Protected API endpoints
- **User Isolation**: Users can only access their own tasks

## 🎯 Usage Guide

### 1. Registration
- Visit the registration page
- Enter a valid email and password (min 6 characters)
- Click "Sign Up" to create an account

### 2. Login
- Use your registered credentials
- Successful login redirects to the dashboard

### 3. Managing Tasks
- **Create Tasks**: Enter task title and click "Add Task"
- **Complete Tasks**: Click the checkbox or "Done" button
- **Search Tasks**: Use the search bar to find specific tasks
- **Filter Tasks**: Use filter buttons to view by status
- **Delete Tasks**: Click the delete button with confirmation

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
# Build for production
cd frontend
npm run build

# Deploy the dist/ folder
```

### Backend (Heroku/Railway)
```bash
# Set environment variables
# Configure MongoDB connection
# Deploy the backend
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- MongoDB for the flexible database solution
- All contributors and users of this project

## 📞 Support

If you have any questions or issues, please:
- Open an issue on GitHub
- Contact the project maintainer
- Check the documentation

---

**Built with ❤️ by Jahanvi Sharma**
