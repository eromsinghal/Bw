# User Management Panel
A modern, responsive **User Management Panel** built with *React*, **Redux Toolkit**, and
**Material-UI**.
Easily manage users with add, edit, delete, and search functionalities.
Supports light/dark mode toggle and a clean, professional UI.
Live Demo: https://bw-git-main-eromsinghals-projects.vercel.app/
GitHub Repo: https://github.com/eromsinghal/Bw
## Features
- Light/Dark Theme toggle
- Real-time search users by name
- Add, Edit, Delete users
- User Table with pagination
- Type-safe code with TypeScript
- Global state with Redux Toolkit
- Responsive and accessible UI with MUI
## Live Demo
 View the live app here: https://bw-git-main-eromsinghals-projects.vercel.app/
## Getting Started
1. Clone the repository
 git clone https://github.com/eromsinghal/Bw.git
 cd Bw
2. Install dependencies
 npm install
3. Set up environment variables
 Create a .env file in the root:
   REACT_APP_API_URL=https://your-api-url.com/users
4. Run the app locally
 npm start
## Project Structure
src/
 app/ # Redux store & typed hooks
 components/ # Navbar, Layout, etc.
 features/
 users/ # Users slice, API, Table, Modals
 pages/ # Users page
 theme/ # Custom MUI theme setup
 App.tsx # Main app container
 main.tsx # Entry point
## Built With
- React
- Redux Toolkit
- Material-UI (MUI)
- TypeScript
- CRA
## License
This project is licensed under the MIT License.
## Acknowledgements
- React Hook Form
- Yup - Schema Validation
- Vercel for fast deployment
## Useful Links
- Live Demo: https://bw-git-main-eromsinghals-projects.vercel.app/
- GitHub Repository: https://github.com/eromsinghal/Bw
> Made with by Om Singhal
