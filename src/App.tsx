import { Router, RouterProvider } from '@tanstack/react-router';
import { MantineProvider } from '@mantine/core';
import { routeTree } from './routes/routes';

export default function App() {
  const router = new Router({ routeTree });

  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
