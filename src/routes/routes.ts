import { Outlet, RootRoute, Route } from '@tanstack/react-router';
import HomePage from '@pages/HomePage/HomePage';

const rootRoute = new RootRoute({
  component: Outlet,
});
const homePageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

export const routeTree = rootRoute.addChildren([homePageRoute]);
