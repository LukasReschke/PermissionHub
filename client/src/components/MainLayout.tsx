import React, { ReactNode, useId, useState } from 'react';
import "@cloudscape-design/global-styles/index.css"
import Button from "@cloudscape-design/components/button"
import TopNavigation from '@cloudscape-design/components/top-navigation';
import Input from '@cloudscape-design/components/input';
import AppLayout from '@cloudscape-design/components/app-layout';
import SideNavigation from '@cloudscape-design/components/side-navigation';
import BreadcrumbGroup from '@cloudscape-design/components/breadcrumb-group';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Box from '@cloudscape-design/components/box';
import Header from '@cloudscape-design/components/header';
import Table from '@cloudscape-design/components/table';
import Flashbar from '@cloudscape-design/components/flashbar';
import { SideNavigationProps } from '@cloudscape-design/components/side-navigation';
import { HelpPanel } from '@cloudscape-design/components';
import { Outlet } from "react-router-dom";

const i18nStrings = {
  searchIconAriaLabel: 'Search',
  searchDismissIconAriaLabel: 'Close search',
  overflowMenuTriggerText: 'More',
  overflowMenuTitleText: 'All',
  overflowMenuBackIconAriaLabel: 'Back',
  overflowMenuDismissIconAriaLabel: 'Close menu',
};

const profileActions = [
  { type: 'button', id: 'profile', text: 'Profile' },
  { type: 'button', id: 'preferences', text: 'Preferences' },
  { type: 'button', id: 'security', text: 'Security' },
  {
    type: 'menu-dropdown',
    id: 'support-group',
    text: 'Support',
    items: [
      {
        id: 'documentation',
        text: 'Documentation',
        href: '#',
        external: true,
        externalIconAriaLabel: ' (opens in new tab)',
      },
      { id: 'feedback', text: 'Feedback', href: '#', external: true, externalIconAriaLabel: ' (opens in new tab)' },
      { id: 'support', text: 'Customer support' },
    ],
  },
  { type: 'button', id: 'signout', text: 'Sign out' },
];




type Props = {
}

export function MainLayout({ }: Props) {
  return (<><TopNavigation
    i18nStrings={i18nStrings}
    identity={{
      href: '/',
      title: 'PermissionHub',
    }}
    utilities={[
      { type: 'button', iconName: 'settings', title: 'Settings', ariaLabel: 'Settings' },
      {
        type: 'menu-dropdown',
        text: 'User name',
        description: 'customer@example.com',
        iconName: 'user-profile',
        items: profileActions,
      },
    ]}
  />
    <Outlet />
  </>
  );
}
