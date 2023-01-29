import logo from './logo.svg';
import './App.css';
import Kontak from './pages/Kontak';
import Nav from './pages/Nav';
import Sejarah from './pages/Sejarah';
import Tentang from './pages/Tentang';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Component } from 'react';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav />
          <Routes>
            <Route path='/' component = {Home} exact />
            <Route path='/kontak' component = {Kontak} />
            <Route path='/sejarah' component = {Sejarah} />
            <Route path='/tentang' component = {Tentang} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;

/*

  AbortedDeferredError, Await, BrowserRouter, Form, HashRouter, Link, MemoryRouter, NavLink, Navigate, NavigationType, Outlet, Route, Router, RouterProvider, Routes, ScrollRestoration, UNSAFE_DataRouterContext, UNSAFE_DataRouterStateContext, UNSAFE_LocationContext, UNSAFE_NavigationContext, UNSAFE_RouteContext, UNSAFE_enhanceManualRouteObjects, UNSAFE_useScrollRestoration, createBrowserRouter, createHashRouter, createMemoryRouter, createPath, createRoutesFromChildren, createRoutesFromElements, createSearchParams, defer, generatePath, isRouteErrorResponse, json, matchPath, matchRoutes, parsePath, redirect, renderMatches, resolvePath, unstable_HistoryRouter, unstable_useBlocker, unstable_usePrompt, useActionData, useAsyncError, useAsyncValue, useBeforeUnload, useFetcher, useFetchers, useFormAction, useHref, useInRouterContext, useLinkClickHandler, useLoaderData, useLocation, useMatch, useMatches, useNavigate, useNavigation, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useRevalidator, useRouteError, useRouteLoaderData, useRoutes, useSearchParams, useSubmit)

  */
