import { RootRoute, Route } from '@tanstack/react-router';
import Default from '@components/templates/Default/Default';
import HomePage from '@pages/HomePage/HomePage';

const rootRoute = new RootRoute({
  component: Default,
});
const homePageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

export const routeTree = rootRoute.addChildren([homePageRoute]);
