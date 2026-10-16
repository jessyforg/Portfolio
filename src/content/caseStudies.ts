import type { CaseStudy } from '../types/project'

/*
 * Sources:
 * - "contributions" come from Jester's resume (his own claims about his work).
 * - Features, technologies, and implementation notes were verified by inspecting
 *   the source code on 2026-10-16:
 *     Kapital: C:\xampp\htdocs\KAPITALCapstone (local version; the public CAPSTONE_Kapital repo is outdated)
 *     TARAKI:  C:\xampp\htdocs\Taraki(2025)\KapitalxTaraki (commit bef6faf + local changes)
 * - TARAKI is limited to general, publicly appropriate details (no internal
 *   documents, API details, credentials, or stakeholder information).
 * - Repository links are intentionally omitted at Jester's request.
 */

export const caseStudies: CaseStudy[] = [
  {
    slug: 'kapital',
    overview:
      'A startup ecosystem platform for the Cordillera region, built in partnership with TARAKI-CAR. It gives entrepreneurs, investors, and job seekers separate workflows for finding and working with each other. It began as my team’s capstone project at the University of the Cordilleras, and I continued developing it during my internship.',
    purpose: [
      'Kapital aims to give the region’s entrepreneurs, investors, and job seekers one place to find each other.',
      'Entrepreneurs publish startup profiles and recruit team members. Investors browse startups and get matched with ones that fit their preferences. Job seekers find roles at startups and apply directly.',
    ],
    roleContext:
      'Team project. I was team lead and worked across the frontend, the backend, and the database.',
    contributions: [
      'Designed the relational MySQL database behind user profiles, startups, investor preferences, messaging, and notifications.',
      'Implemented role-based authentication and authorization, and create, read, update, and delete (CRUD) functionality for startup and user management.',
      'Built startup discovery, investor preference matching, messaging, and notification features.',
      'Coordinated development tasks with team members and debugged issues through repeated testing.',
    ],
    technologyGroups: [
      { label: 'Backend', items: ['PHP', 'MySQL'] },
      { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS (some pages)'] },
      { label: 'Integrations', items: ['OpenAI Chat Completions API'] },
      { label: 'Environment', items: ['XAMPP (Apache, PHP, MySQL)', 'Git'] },
    ],
    implementation: [
      {
        title: 'Role checks on the server',
        body: 'Every account is an entrepreneur, investor, or job seeker, and there is a separate administrator role. Role-specific pages check the signed-in user’s role on the server and redirect anyone without access, so access rules don’t rely on hiding links in the interface.',
      },
      {
        title: 'Weighted investor matchmaking',
        body: 'Investors set preferred industries, locations, and funding stages. The matchmaking code scores each startup against those preferences and combines them into one match score, weighting funding stage at 40%, industry at 35%, and location at 25%. Separate matchmaking modules pair founders with potential co-founders and job seekers with startups.',
      },
      {
        title: 'Guarding against injection and unsafe output',
        body: 'Most database queries that include user input use prepared statements with bound parameters; the startup filter queries escape their input instead. User-supplied text is escaped with htmlspecialchars before it is rendered, to prevent cross-site scripting.',
      },
      {
        title: 'Review before content goes live',
        body: 'New startups appear in discovery only after an administrator approves them. Users can also verify their accounts by uploading documents, which administrators review from the admin panel.',
      },
      {
        title: 'Tracking AI usage',
        body: 'The AI startup advisor sends requests to the OpenAI Chat Completions API. Because each request has a cost, the app records how many tokens each user consumes, and a per-user daily limit is configured.',
      },
    ],
    features: [
      {
        name: 'Role-based accounts',
        description:
          'Sign-up as an entrepreneur, investor, or job seeker, with role-specific pages.',
        status: 'implemented',
      },
      {
        name: 'Startup profiles',
        description: 'Create, edit, and delete startup profiles, published after admin approval.',
        status: 'implemented',
      },
      {
        name: 'Startup discovery',
        description:
          'Browse approved startups and filter by industry, location, and funding stage.',
        status: 'implemented',
      },
      {
        name: 'Matchmaking',
        description:
          'Investor–startup, co-founder, and job seeker–startup matching from saved preferences.',
        status: 'implemented',
      },
      {
        name: 'Jobs and applications',
        description: 'Post jobs, apply, review applicants, and track application status.',
        status: 'implemented',
      },
      {
        name: 'Messaging',
        description:
          'Direct messages between users, with options to mute or archive conversations.',
        status: 'implemented',
      },
      {
        name: 'Notifications',
        description: 'Alerts for messages, matches, application updates, and verification results.',
        status: 'implemented',
      },
      {
        name: 'Account verification',
        description: 'Document upload with administrator review.',
        status: 'implemented',
      },
      {
        name: 'Admin panel',
        description:
          'Manage users, approve startups, review verification requests, and handle support tickets.',
        status: 'implemented',
      },
      {
        name: 'AI startup advisor',
        description:
          'Business guidance for entrepreneurs, powered by the OpenAI API. Needs an API key to run.',
        status: 'implemented',
      },
      {
        name: 'Resume builder with AI helper',
        description: 'The pages exist but are not yet linked from the main interface.',
        status: 'partial',
      },
    ],
    screenshots: [
      {
        basePath: 'assets/projects/kapital/kapital-landing',
        width: 1600,
        height: 819,
        alt: 'Kapital landing page with the headline “Connecting Innovation in the Cordillera Region” over a photo of rice terraces, and Login and Sign Up buttons.',
        caption: 'Landing page. Kapital is co-branded with TARAKI, its partner consortium.',
      },
      {
        basePath: 'assets/projects/kapital/kapital-startup-showcase',
        width: 1600,
        height: 821,
        alt: 'Startup Showcase page for a signed-in user, with a sidebar for Startups, Co-Founders, Investors, and Job Seekers, filters for industry, location, and startup stage, and a row of startup cards.',
        caption: 'Startup discovery, with filters and role-based navigation in the sidebar.',
      },
      {
        basePath: 'assets/projects/kapital/kapital-about',
        width: 1600,
        height: 815,
        alt: 'Kapital About page showing the Kapital and TARAKI logos and a “What is Kapital?” description.',
        caption: 'About page describing the platform’s purpose.',
      },
    ],
    challenges: [
      {
        title: 'Matching with incomplete preferences',
        body: 'Not every investor fills in every preference. The scoring code checks for missing preferences instead of assuming every field is set, so a partly completed profile doesn’t break matching.',
      },
      {
        title: 'Keeping AI costs visible',
        body: 'Every AI request costs money, so the app stores each user’s token usage in the database. That record is the basis for a per-user daily limit, which is configured but not yet enforced.',
      },
    ],
    statusDetail:
      'Kapital runs locally on XAMPP (Apache, PHP, and MySQL). It is not publicly deployed, so there is no live demo.',
    limitations: [
      'The messages page doesn’t update live; new messages appear when the page reloads.',
      'Forms do not use CSRF tokens yet. These should be added before any public deployment.',
      'AI features need an OpenAI API key. Token usage is recorded, but the daily per-user limit is not enforced yet.',
      'The resume builder is not yet linked from the main interface.',
      'Test and debugging scripts sit alongside the application code and should be separated before deployment.',
    ],
  },
  {
    slug: 'taraki',
    overview:
      'A web platform for TARAKI-CAR, a technology and innovation consortium, built under the University of the Cordilleras Innovation and Technology Transfer Office (UC InTTO). I led the development team during my internship, then returned in a project-based role to test and refine the website before turnover.',
    purpose: [
      'TARAKI-CAR (the Technological Consortium for Awareness, Readiness, and Advancement of Knowledge in Innovation) supports the startup ecosystem in the Cordillera region.',
      'The website gives the consortium a public home for its programs, events, and ecosystem, and gives entrepreneurs and investors accounts for creating startup profiles, finding each other, and communicating.',
    ],
    roleContext:
      'Team project under UC InTTO. I was team lead and full-stack developer during my internship (May to August 2025), then returned in a project-based role (October to December 2025).',
    contributions: [
      'Built the full-stack platform with React, Node.js, and MySQL, and integrated the frontend with the backend.',
      'Deployed backend services on Railway and migrated project resources to the hosting environment.',
      'Took part in technical meetings and planning with the project team.',
      'Tested the website for usability, navigation, responsiveness, and user experience.',
      'Created feedback forms with Google Forms, consolidated stakeholder feedback, and refined functionality and content based on validated feedback.',
      'Prepared feedback reports and coordinated with project staff on technical requirements and the final website turnover.',
    ],
    technologyGroups: [
      { label: 'Frontend', items: ['React', 'React Router', 'Tailwind CSS'] },
      { label: 'Backend', items: ['Node.js', 'Express'] },
      { label: 'Database', items: ['MySQL'] },
      { label: 'Deployment and feedback', items: ['Railway (backend)', 'Google Forms'] },
    ],
    implementation: [
      {
        title: 'Separate frontend and API',
        body: 'The React frontend communicates with a Node.js and Express API, which reads and writes a MySQL database. Keeping the two apart allowed the backend to be deployed on its own, on Railway.',
      },
      {
        title: 'Interfaces by role',
        body: 'Entrepreneurs, investors, and administrators each have their own dashboard. Pages that need an account are wrapped in a protected route that checks for a signed-in user.',
      },
      {
        title: 'A feedback loop before turnover',
        body: 'In the project-based phase, I tested the site, collected stakeholder feedback through Google Forms, consolidated it into recommended improvements, and refined the site based on the feedback that was validated.',
      },
    ],
    features: [
      {
        name: 'Public information pages',
        description:
          'Programs, events, the startup ecosystem, and partner technology business incubators.',
        status: 'implemented',
      },
      {
        name: 'Accounts by role',
        description: 'Separate dashboards for entrepreneurs, investors, and administrators.',
        status: 'implemented',
      },
      {
        name: 'Startup profiles',
        description: 'Create and edit startup profiles and view other startups.',
        status: 'implemented',
      },
      {
        name: 'Search and matches',
        description: 'Search for users and startups, and view suggested matches.',
        status: 'implemented',
      },
      {
        name: 'Messaging and notifications',
        description: 'Direct messages between users and in-app notifications.',
        status: 'implemented',
      },
    ],
    screenshots: [
      {
        basePath: 'assets/projects/taraki/taraki-homepage',
        width: 1600,
        height: 768,
        alt: 'TARAKI website homepage with the TARAKI logo over a photo of an event, a search bar for users and startups, and Home, Ecosystem, and About menus.',
        caption: 'Homepage, with search for users and startups in the navigation bar.',
      },
    ],
    challenges: [
      {
        title: 'Moving the backend to hosting',
        body: 'Taking the backend from local development to Railway meant migrating project resources and configuring the hosting environment so the frontend and API could work together outside a local machine.',
      },
      {
        title: 'Turning feedback into changes',
        body: 'Feedback came from several stakeholders. I consolidated it first, then refined the site only on feedback that had been validated, so changes stayed focused on real issues.',
      },
    ],
    statusDetail:
      'The website is not deployed as a live site, so there is no public demo. Backend services were deployed to Railway during development, and my project-based role ended with the final website turnover in December 2025.',
    limitations: [
      'No public demo is available.',
      'Source code and internal project documents are not shared, in line with the project’s publication restrictions.',
    ],
  },
]

export function getCaseStudy(slug: string) {
  const caseStudy = caseStudies.find((c) => c.slug === slug)
  if (!caseStudy) throw new Error(`Unknown case study slug: ${slug}`)
  return caseStudy
}
