import { createBrowserRouter } from 'react-router'
import { SiteLayout } from '../components/layout/SiteLayout'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { CaseStudyPage } from '../pages/projects/CaseStudyPage'

export const router = createBrowserRouter(
  [
    {
      element: <SiteLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/projects/kapital', element: <CaseStudyPage slug="kapital" /> },
        { path: '/projects/taraki', element: <CaseStudyPage slug="taraki" /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)
