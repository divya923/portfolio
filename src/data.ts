export const profile = {
  name: "Dhivya P",
  role: "Frontend Developer",
  location: "Chennai, India",
  email: "dhivyanisha762@gmail.com",
  linkedin: "https://www.linkedin.com/in/divya-ponnudurai-9b25a5215/",
  phone: "+91 98653 91227",
  resumeSummary:
    "Frontend Developer with 3+ years of experience in React.js, TypeScript, JavaScript, Ionic and modern UI frameworks. Experienced in approval-based workflows, role-based authentication, REST and GraphQL integration, reusable component architecture, responsive interfaces, dashboards and reporting systems.",
  summary:
    "I build approval workflows, dashboards and learning platforms with React, TypeScript and Ionic. I turn business rules into interfaces people can use without training, and I keep the components reusable so the next module ships faster.",
};

export const stats = [
  { value: "3+", label: "years building production frontends" },
  { value: "100,000+", label: "students on the Kruu learning platform" },
  { value: "30,000", label: "students in the Rotary programme" },
];

export interface Project {
  title: string;
  meta: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "HRMS platform",
    meta: "Built from scratch, Employee and HR Admin portals",
    description:
      "Onboarding, attendance, leave, WFH, travel and claims, payslips, appraisal, exit management, meetings and task tracking. Multi-level approvals route requests through employees, managers, HR and admins. The admin side adds employee master data, bulk upload, compensation setup and exportable reports.",
    tags: ["React", "TypeScript", "Ionic", "AWS Cognito", "GraphQL"],
  },
  {
    title: "Rotary Centenary Scholars Programme",
    meta: "CSR education initiative, 7 districts of Tamil Nadu",
    description:
      "An end-to-end platform for up to 30,000 students: digitised baseline assessments, group and role assignment, a 3-stage submission workflow, mentor and student attendance, bulk onboarding, and reporting dashboards with PDF and Excel export.",
    tags: ["React", "TypeScript", "REST APIs", "Dashboards"],
  },
  {
    title: "Kruu learning platform",
    meta: "Project-based learning, 100,000+ students",
    description:
      "Responsive interfaces for student progress and project workflows, built on shared React and Ionic components.",
    tags: ["React", "TypeScript", "Ionic"],
  },
];

export const experience = [
  {
    role: "Software Developer (Frontend)",
    company: "Kruu EduTech Pvt. Ltd.",
    period: "Nov 2022 – Present",
    points: [
      "Implemented role-based access, protected routes and domain-specific login with AWS Cognito.",
      "Created reusable forms, searchable dropdowns, tables, filters, modals and report views used across product modules.",
      "Integrated REST and GraphQL services with clear loading, error and empty states.",
      "Debugged API, CORS, auth, routing and responsive layout issues in production.",
      "Worked with backend, QA and product teams in Agile/Scrum using Git and GitLab.",
    ],
  },
  {
    role: "UI/UX Designer",
    company: "Leadtech Solutions Pvt. Ltd.",
    period: "Jan 2022 – Jun 2022",
    points: [
      "Designed wireframes, prototypes and visual designs that improved usability and engagement for web applications.",
    ],
  },
];

export const skills = [
  { group: "Frontend", items: ["React.js", "TypeScript", "JavaScript (ES6+)", "React Hooks", "React Native", "HTML5", "CSS3"] },
  { group: "UI frameworks", items: ["Ionic", "Tailwind CSS", "Bootstrap", "React-Bootstrap", "CSS Modules"] },
  { group: "Auth and APIs", items: ["AWS Cognito", "Role-based access", "REST", "GraphQL", "Axios", "Error handling"] },
  { group: "Workflow", items: ["Git", "GitLab", "Agile/Scrum", "Code reviews", "Debugging", "Form validation"] },
];

export const education = [
  { degree: "Master of Computer Application (MCA)", place: "Madras University, Chennai", period: "2021 – 2023" },
  { degree: "Bachelor of Computer Application (BCA)", place: "Dhanalakshmi Srinivasan College of Arts and Science", period: "2018 – 2021", note: "Aggregate: 83%" },
];
