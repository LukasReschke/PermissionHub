import "@cloudscape-design/global-styles/index.css"
import { createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import NoMatch from './pages/NoMatch';
import PermissionDomainsPage from './pages/Manage/PermissionDomains/PermissionDomainsPage';
import { SideNavigationProps } from "@cloudscape-design/components/side-navigation/interfaces";
import CreatePermissionDomainPage from "./pages/Manage/PermissionDomains/CreatePermissionDomainPage";
import PermissionsByDomainListPage from "./pages/Manage/PermissionDomains/Permissions/PermissionsByDomainListPage";

const navItems: SideNavigationProps.Item[] = [
    {
        type: 'section',
        text: 'Manage',
        items: [
            { type: 'link', text: 'Permission Domains', href: '/manage/permissiondomains' },
            // { type: 'link', text: 'Permissions', href: '#/paaages' },
            // { type: 'link', text: 'Users', href: '#/users' },
        ],
    },
    /*{
      type: 'section',
      text: 'Compliance',
      items: [
        { type: 'link', text: 'Anomalies', href: '#/database' },
        { type: 'link', text: 'Permission grants', href: '#/database' },
        { type: 'link', text: 'Audit logs', href: '#/database' },
        { type: 'link', text: 'Alerts', href: '#/database' },
      ],
    },
    {
      type: 'section',
      text: 'Set up',
      items: [
        { type: 'link', text: 'LDAP Sync', href: '#/database' },
      ],
    },*/
];

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route
                path="/manage/permissiondomains"
                element={
                    <PermissionDomainsPage
                        navItems={navItems} />
                } />
            <Route
                path="/manage/permissiondomains/:permissionDomainId"
                element={
                    <PermissionsByDomainListPage
                        navItems={navItems} />
                } />
            <Route
                path="/manage/permissiondomains/create"
                element={
                    <CreatePermissionDomainPage
                        navItems={navItems} />
                } />
            <Route
                path="*"
                element={
                    <NoMatch />
                } />
        </Route>
    )
);
