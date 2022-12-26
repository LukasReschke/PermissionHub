import { Alert, CollectionPreferences, CollectionPreferencesProps, ColumnLayout, FormField, Input, Modal, Pagination, SideNavigationProps, TextFilter } from "@cloudscape-design/components";
import AppLayout from "@cloudscape-design/components/app-layout";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Table, { TableProps } from "@cloudscape-design/components/table";
import { useNavigate } from "react-router-dom";
import BreadcrumbGroup from "../../../components/BreadcrumbGroup";
import SideNavigation from "../../../components/SideNavigation";
import { useMutation, useQuery } from 'urql';
import { graphql } from '../../../gql';
import { useCollection } from '@cloudscape-design/collection-hooks';
import { useEffect, useState } from "react";
import Link from "../../../components/Link";
import { FetchAllPermissionDomainsQuery } from "../../../gql/graphql";

type PermissionDomainsQueryResponse = NonNullable<FetchAllPermissionDomainsQuery['permissionDomains']>['nodes'][0][];

const columnDefinitions: TableProps.ColumnDefinition<PermissionDomainsQueryResponse[0]>[] = [
    {
        header: "Name",
        cell: e => e.name,
        sortingField: "name",
    },
];

export const PermissionDomainsQuery = graphql(`
query FetchAllPermissionDomains {
    permissionDomains {
      nodes {
        id
        name
      }
    }
  }
`);

const DeletePermissionDomainMutation = graphql(`
mutation DeletePermissionDomainByIdMutation($id: ID!) {
    deletePermissionDomainById(input: {id: $id}) {
      permissionDomain {
        __typename
        id
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

type DeleteModalProps = {
    instances: PermissionDomainsQueryResponse,
    visible: boolean;
    onDiscard: () => void;
    onDelete: () => void;
};

function DeleteModal({ instances, visible, onDiscard, onDelete }: DeleteModalProps) {
    const deleteConsentText = 'confirm';

    const [deleteInputText, setDeleteInputText] = useState('');
    useEffect(() => {
        setDeleteInputText('');
    }, [visible]);

    const handleDeleteSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (inputMatchesConsentText) {
            onDelete();
        }
    };

    const inputMatchesConsentText = deleteInputText.toLowerCase() === deleteConsentText;

    const isMultiple = instances.length > 1;
    return (
        <Modal
            visible={visible}
            onDismiss={onDiscard}
            header={isMultiple ? 'Delete permission domains' : 'Delete permission domain'}
            closeAriaLabel="Close dialog"
            footer={
                <Box float="right">
                    <SpaceBetween direction="horizontal" size="xs">
                        <Button variant="link" onClick={onDiscard}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={onDelete} disabled={!inputMatchesConsentText}>
                            Delete
                        </Button>
                    </SpaceBetween>
                </Box>
            }
        >
            {instances.length > 0 && (
                <SpaceBetween size="m">
                    {isMultiple ? (
                        <Box variant="span">
                            Delete{' '}
                            <Box variant="span" fontWeight="bold">
                                {instances.length} permission domains
                            </Box>{' '}
                            permanently? This action cannot be undone.
                        </Box>
                    ) : (
                        <Box variant="span">
                            Delete permission domain{' '}
                            <Box variant="span" fontWeight="bold">
                                {instances[0].name}
                            </Box>{' '}
                            permanently? This action cannot be undone.
                        </Box>
                    )}

                    <Alert type="warning" statusIconAriaLabel="Warning">
                        Proceeding with this action will delete permission domains with all content and can impact related resources.{' '}
                        <Link external={true} href="#">
                            Learn more
                        </Link>
                    </Alert>

                    <Box>To avoid accidental deletions we ask you to provide additional written consent.</Box>

                    <ColumnLayout columns={2}>
                        <form onSubmit={handleDeleteSubmit}>
                            <FormField label={`Type "${deleteConsentText}" to agree.`}>
                                <Input
                                    placeholder={deleteConsentText}
                                    onChange={event => setDeleteInputText(event.detail.value)}
                                    value={deleteInputText}
                                    ariaRequired={true}
                                />
                            </FormField>
                        </form>
                    </ColumnLayout>
                </SpaceBetween>
            )}
        </Modal>
    );
}


const Content = () => {
    const [deletePermissionDomainResult, deletePermissionDomain] = useMutation(DeletePermissionDomainMutation);

    let navigate = useNavigate();
    const [result, reexecuteQuery] = useQuery({
        query: PermissionDomainsQuery
    });
    const [preferences, setPreferences] = useState<CollectionPreferencesProps.Preferences>({ pageSize: 10, visibleContent: ['id', 'name'] });
    const [permissionDomains, setPermissionDomains] = useState<PermissionDomainsQueryResponse>([]);
    useEffect(() => {
        setPermissionDomains(result.data?.permissionDomains?.nodes ?? []);
    }, [result]);

    const [selectedItems, setSelectedItems] = useState<PermissionDomainsQueryResponse>([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const onDeleteInit = () => setShowDeleteModal(true);
    const onDeleteDiscard = () => setShowDeleteModal(false);
    const onDeleteConfirm = () => {
        selectedItems.forEach(element => {
            deletePermissionDomain({ id: element.id }).then((result) => {

            });
        });

        setSelectedItems([]);
        setShowDeleteModal(false);
    };
    const navigateToSelectedPermissionDomain = () => {
        if (selectedItems.length === 1) {
            navigate(`./${selectedItems[0].id}`);
        }
    };

    let nodes = permissionDomains || [];
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
    let isOnlyOneSelected = selectedItems.length === 1 || false;

    return (
        <><Table
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
                    counter={"(" + (selectedItems.length || 0) + " of " + nodes.length.toString() + ")"}
                    actions={
                        <SpaceBetween size="xs" direction="horizontal">
                            <Button onClick={navigateToSelectedPermissionDomain} disabled={!isOnlyOneSelected}>View details</Button>
                            {/*<Button disabled={!isOnlyOneSelected}>Edit</Button */}
                            <Button onClick={onDeleteInit} disabled={(selectedItems.length || 0) === 0}>Delete</Button>
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
            selectedItems={selectedItems}
            onSelectionChange={event => setSelectedItems(event.detail.selectedItems)}
        />
            <DeleteModal
                visible={showDeleteModal}
                onDiscard={onDeleteDiscard}
                onDelete={onDeleteConfirm}
                instances={selectedItems}
            />
        </>
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