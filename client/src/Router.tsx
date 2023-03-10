import "@cloudscape-design/global-styles/index.css"
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import NoMatch from './pages/NoMatch';
import PermissionDomainsPage from './pages/Manage/PermissionDomains/PermissionDomainsPage';
import { SideNavigationProps } from "@cloudscape-design/components/side-navigation/interfaces";
import CreatePermissionDomainPage from "./pages/Manage/PermissionDomains/CreatePermissionDomainPage";
import PermissionsByDomainListPage from "./pages/Manage/PermissionDomains/Permissions/PermissionsByDomainListPage";
import CreatePermissionPage from "./pages/Manage/PermissionDomains/Permissions/CreatePermissionPage";
import Grant from "./pages/Grant/Grant";

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

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/manage/permissiondomains',
                element: <PermissionDomainsPage navItems={navItems} />,
            },
            {
                path: '/manage/permissiondomains/:id',
                element: <PermissionsByDomainListPage navItems={navItems} />,
            },
            {
                path: '/manage/permissiondomains/:id/create',
                element: <CreatePermissionPage navItems={navItems} />,
            },
            {
                path: '/manage/permissiondomains/create',
                element: <CreatePermissionDomainPage navItems={navItems} />,
            },
            {
                path: '/request',
                element: <Grant />
            },
        ],
    },
    {
        path: '*',
        element: <NoMatch />,
    },
]);
