import { CollectionPreferences, CollectionPreferencesProps, Pagination, SideNavigationProps, TextFilter } from "@cloudscape-design/components";
import AppLayout from "@cloudscape-design/components/app-layout";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Table, { TableProps } from "@cloudscape-design/components/table";
import { useNavigate } from "react-router-dom";
import BreadcrumbGroup from "../../../components/BreadcrumbGroup";
import SideNavigation from "../../../components/SideNavigation";
import { useQuery } from 'urql';
import { graphql } from '../../../gql';
import { useCollection } from '@cloudscape-design/collection-hooks';
import { useState } from "react";

const columnDefinitions: TableProps.ColumnDefinition<{ __typename?: "PermissionDomain" | undefined; id: number; name: string; }>[] = [
    {
        header: "ID",
        cell: e => e.id,
        sortingField: "id",
    },
    {
        header: "Name",
        cell: e => e.name,
        sortingField: "name",
    },
];

const PermissionDomainsQuery = graphql(`
query FetchAllPermissionDomains {
    permissionDomains {
      nodes {
        id
        name
      }
    }
  }
`);


type EmptyStateProps = {
    title: string;
    subtitle: string;
    action: JSX.Element;
}

function EmptyState({ title, subtitle, action }: EmptyStateProps): JSX.Element {
    return (
        <Box textAlign="center" color="inherit">
            <Box variant="strong" textAlign="center" color="inherit">
                {title}
            </Box>
            <Box variant="p" padding={{ bottom: 's' }} color="inherit">
                {subtitle}
            </Box>
            {action}
        </Box>
    );
}

const PAGE_SIZE_OPTIONS: CollectionPreferencesProps.PageSizeOption[] = [
    { value: 10, label: '10 permission domains' },
    { value: 30, label: '30 permission domains' },
    { value: 50, label: '50 permission domains' },
];

const Content = () => {
    let navigate = useNavigate();
    const [result, reexecuteQuery] = useQuery({
        query: PermissionDomainsQuery
    });
    const [preferences, setPreferences] = useState<CollectionPreferencesProps.Preferences>({ pageSize: 10, visibleContent: ['id', 'name'] });

    let nodes = result.data?.permissionDomains?.nodes || [];
    const {
        items,
        actions,
        filteredItemsCount,
        collectionProps,
        filterProps,
        paginationProps
    } = useCollection(nodes, {
        filtering: {
            empty: (
                <EmptyState
                    title="No instances"
                    subtitle="No instances to display."
                    action={<Button>Create permission domain</Button>}
                />
            ),
            noMatch: (
                <EmptyState
                    title="No matches"
                    subtitle="We can't find a match."
                    action={<Button onClick={() => actions.setFiltering('')}>Clear filter</Button>}
                />
            ),
        },
        pagination: {
            pageSize: preferences.pageSize,
        },
        sorting: {},
        selection: {},
    });
    let isOnlyOneSelected = collectionProps.selectedItems?.length === 1 || false; 

    return (
        <Table
            {...collectionProps}
            selectionType="multi"
            stripedRows={preferences.stripedRows}
            wrapLines={preferences.wrapLines}
            items={items}
            loading={result.fetching}
            pagination={<Pagination {...paginationProps} />}
            columnDefinitions={columnDefinitions}
            variant="full-page"
            header={
                <Header
                    counter={"(" + (collectionProps.selectedItems?.length || 0) + " of " + nodes.length.toString() + ")"}
                    actions={
                        <SpaceBetween size="xs" direction="horizontal">
                            <Button disabled={!isOnlyOneSelected}>View details</Button>
                            <Button disabled={!isOnlyOneSelected}>Edit</Button>
                            <Button disabled={(collectionProps.selectedItems?.length || 0) === 0}>Delete</Button>
                            <Button onClick={e => { e.preventDefault(); navigate("./create"); }} variant="primary">Create permission domain</Button>
                        </SpaceBetween>
                    }
                >
                    Permission Domains
                </Header>
            }
            filter={
                <TextFilter
                    {...filterProps}
                    countText={filteredItemsCount + " permission domains"}
                    filteringAriaLabel="Filter permission domains"
                />
            }
            preferences={
                <CollectionPreferences
                    preferences={preferences}
                    onConfirm={({ detail }) => setPreferences(detail)}
                    title={"Preferences"}
                    confirmLabel={"Confirm"}
                    cancelLabel={"Cancel"}
                    wrapLinesPreference={{
                        label: 'Wrap lines',
                        description: 'Check to see all the text and wrap the lines',
                    }}
                    pageSizePreference={{
                        title: 'Page size',
                        options: PAGE_SIZE_OPTIONS
                    }}
                    stripedRowsPreference={{
                        label: 'Striped rows',
                        description: 'Check to add alternating shaded rows',
                    }}
                />
            }

            stickyHeader={true}
        />
    );
};

const breadcrumbs = [
    {
        text: 'PermissionHub',
        href: '/',
    },
    {
        text: 'Manage',
        href: '/manage/',
    },
    {
        text: 'Permission domains',
        href: '/manage/permissiondomains',
    },
];

type Props = {
    navItems: SideNavigationProps.Item[],
}

export default function PermissionDomainsPage({ navItems }: Props) {
    return <AppLayout
        toolsHide
        navigation={<SideNavigation items={navItems} />}
        breadcrumbs={<BreadcrumbGroup items={breadcrumbs} expandAriaLabel="Show path" ariaLabel="Breadcrumbs" />}
        contentType="table"
        content={<Content />}
    />;
}