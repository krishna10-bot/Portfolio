// Edit everything here. The site updates automatically.
export const profile = {
  name: "Krishna Prasad Chaulagai",
  role: "QA Tester",
  location: "Nepal",
  status: "Open to internships, jobs and collaborations",
  intro:
    "I test web applications, find bugs, and help ensure software quality and a smooth user experience.",
  email: "ackrishna30@gmail.com",
  github: "https://github.com/krishna10-bot",
  about: [
    "Hi, I'm Krishna Prasad Chaulagai, a QA Tester from Nepal who enjoys finding bugs and improving software quality.",
    "I'm passionate about manual testing, learning new testing tools, and ensuring reliable, user-friendly applications. I'm open to internships, jobs, and collaborations.",
  ],
};

// Shown on the Home page.
export const highlights = [
  { label: "Education", text: "Currently pursuing a Bachelor's degree at LA GRANDEE International College, studying BCA." },
  { label: "Internship", text: "Currently interning at Pravidhi Digital Innovations Nepal Pvt. Ltd." },
  { label: "Interest", text: "Learning QA." },
];

export const skillGroups = [
  { title: "Testing", items: ["Manual Testing", "API Testing (Postman)", "Bug Reporting", "Test Case Writing"] },
  { title: "Tools and web", items: ["Git", "React", "HTML & CSS", "DevTools"] },
];
export const skills = skillGroups.flatMap((g) => g.items);

// "What I do" cards, shown on the Home page. Rewrite these in your own words.
export const focus = [
  { title: "Manual testing", text: "Using web apps the way a real user would, and noting what breaks or feels confusing." },
  { title: "Bug reporting", text: "Writing clear steps to reproduce, with expected and actual results, so bugs are easy to fix." },
  { title: "API testing", text: "Checking requests and responses in Postman, and using DevTools to see what the browser sees." },
{ title: "Test Case Writing", text: "Creating test cases with steps, test data, and expected results." },
{ title: "Test Scenario Design", text: "Identifying different situations and conditions that need to be tested." },
{ title: "Bug Reporting", text: "Writing clear steps to reproduce, with expected and actual results, so bugs are easy to fix." },
{ title: "Bug Tracking", text: "Tracking reported defects, monitoring their status, and verifying fixes." },
{ title: "Functional Testing", text: "Verifying that application features work according to requirements." },
{ title: "Regression Testing", text: "Re-testing existing features after changes to ensure nothing is broken." },
{ title: "Automation Testing", text: "Automating repetitive test scenarios using tools like Playwright and Selenium." },

];

export const projects = [
  {
    title: "Project One",
    description: "Login Page Manual Testing",
    tech: ["React", "Vite"],
    link: "https://github.com/krishna10-bot/qa-manual-testing",
  },
  {
    title: "Project Two",
    description: "A short line on what it does and who it is for.",
    tech: ["React", "Node.js"],
    link: "https://github.com/your-username/project-two",
  },
  {
    title: "Project Three",
    description: "A short line on what it does and who it is for.",
    tech: ["JavaScript", "CSS"],
    link: "https://github.com/your-username/project-three",
  },
];
