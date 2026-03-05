# QuickHire - Client Application

A modern, responsive, and dynmic frontend for the **QuickHire** job board platform. Built using **Next.js 16**, and **Tailwind CSS**, this application provides a seamless experience for both job seekers to find and apply for jobs, and for administrators to manage job postings and track candidate applications.

---

## 🌟 Features

- 💼 **Job Discovery**: Browse, filter, and search for jobs efficiently with server-side pagination and dynamic categories.
- 📝 **Job Applications**: Apply for jobs seamlessly through dedicated forms.
- 👨‍💼 **Admin Dashboard**: Manage user jobs, track all submitted applications, and oversee platform activity.
- ✍️ **Rich Text Editor**: Create and edit job descriptions with formatting using **React Quill**.
- 🔔 **Toast Notifications**: Built-in interactive notifications powered by **Sonner**.
- 🛠️ **Form Validation**: Client-side object validation powered by **Zod**.
- ⚡ **Optimized Performance**: Taking advantage of Next.js Server Components, Turbopack, and advanced data-fetching techniques for unparalleled speed.
- 📱 **Mobile Responsive**: Fully responsive design adapting to all screen sizes.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Jwt**: jwt-decode for decoding jwt token
- **Notifications**: Sonner
- **Validation**: Zod

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **npm**, **yarn**, **pnpm**, or **bun** installed on your system.

### 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/imam0321/qtack_task_client.git
   cd qtack_task_client
   ```

2. **Install dependencies**:
   Using **npm**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file in the root directory and add the necessary environment configurations (such as your backend API URL).

   ```env
   NEXT_PUBLIC_BASE_API=http://localhost:5000/api/v1
   ```

4. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🏗️ Project Structure

```text
src/
├── app/                  # Next.js App Router (Pages & Layouts)
│   ├── (commonLayout)/   # Public-facing pages (Home, Find Jobs, Job Details)
│   ├── (dashboardLayout)/# Admin restricted dashboard
│   ├── globals.css       # Global styles & Tailwind config
│   └── layout.tsx        # Root layout HTML structure and metadata
├── components/           # Reusable UI Components
│   ├── modules/          # Feature-specific components (Home, Jobs, Admin, Auth)
│   └── shared/           # Common components (Navbar, Footer, Modals, Toasts)
├── lib/                  # Utilities, Formatters, Server fetch config
├── services/             # API connection and data-fetching hooks
│   ├── application/
│   ├── auth/
│   └── job/
└── types/                # TypeScript interface definitions
public/                   # Static assets (Images, Icons)
```