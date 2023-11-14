// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import EventsPage from './components/pages/EventsPage';
import EventDetailPage from './components/pages/EventDetailPage';
import NewEventPage from './components/pages/NewEventPage';
import EditEventPage from './components/pages/EditEventPage';
import RootLayout from './components/pages/RootLayout';
import EventsRootLayout from './components/pages/EventsRoot';
const router = createBrowserRouter([
  {
    path :'/',
    element: <RootLayout />, children: [
      
{
    index : true,
    element: <HomePage />
  },
  {path:'/', element:<EventsRootLayout/>, children: [
    {
    index: true,
    element: <EventsPage />
  },
  {
    path: ':eventId',
    element: <EventDetailPage />
  },
  {
    path: 'new',
    element: <NewEventPage />
  },
  {
    path:':eventId/edit',
    element: <EditEventPage />
  }
  ] },
  
    ],
  },
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
