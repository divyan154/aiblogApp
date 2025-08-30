## Introduction
A modern AI-powered blogging platform built with Next.js, Appwrite, and Tailwind CSS. This app allows users to create, edit, and save blogs effortlessly using Google Gemini API for AI-assisted content generation.
## Features
■ AI-Powered Content Creation: Generate blogs with customizable writing styles (Technical, Formal, Casual).
■ Secure Authentication: Implemented using Clerk for login, registration, and access control.
■ SEO Optimization: AI-driven keyword suggestions and SEO analysis to boost blog visibility.
■ Persistent Storage: Blogs stored in Appwrite for seamless data management.
■ Modern UI: Responsive design using Tailwind CSS.
## Tech Stack
Frontend: Next.js, Tailwind CSS 
Backend/Database: Appwrite 
Authentication: Clerk 
AI Integration: Gemini API 
## Installation
1. Clone the repository:
 git clone https://github.com/yourusername/ai-blog-app.git
 cd ai-blog-app
2. Install dependencies:
 npm install
3. Set up environment variables in a .env.local file:
 NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
 NEXT_PUBLIC_APPWRITE_API_KEY=your_api_key
 NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_api
 GEMINI_API_KEY=your_gemini_api_key
4. Run the development server:
 npm run dev
5. Open http://localhost:3000 in your browser.
## Screenshots
Add screenshots of your app here:
![Homepage](./screenshots/home.png)
![Editor](./screenshots/editor.png)


## Future Work

■ Server-Side Rendering (SSR) for improved SEO and faster initial load.

■ Internationalization (i18n) to support multi-language blogs.

■ Categories & Tags for better content organization.

■ Image Uploads with CDN integration.

■ Social Sharing to boost engagement.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
