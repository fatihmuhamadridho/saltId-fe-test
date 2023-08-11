import { Router, RouterProvider } from '@tanstack/react-router';
import { MantineProvider } from '@mantine/core';
import { routeTree } from './routes/routes';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export default function App() {
  const router = new Router({ routeTree });

  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
