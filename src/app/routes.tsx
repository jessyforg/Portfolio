import { createBrowserRouter } from 'react-router'
import { SiteLayout } from '../components/layout/SiteLayout'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ProjectPlaceholderPage } from '../pages/projects/ProjectPlaceholderPage'

export const router = createBrowserRouter(
  [
    {
      element: <SiteLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/projects/kapital', element: <ProjectPlaceholderPage name="Kapital" /> },
        { path: '/projects/taraki', element: <ProjectPlaceholderPage name="TARAKI" /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)
