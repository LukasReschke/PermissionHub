import { Link, SideNavigationProps } from "@cloudscape-design/components";
import AppLayout from "@cloudscape-design/components/app-layout";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import HelpPanel from "@cloudscape-design/components/help-panel";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Table from "@cloudscape-design/components/table";
import { Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BreadcrumbGroup from "../../../components/BreadcrumbGroup";
import SideNavigation from "../../../components/SideNavigation";

const columnDefinitions: [] = [

];

const Content = () => {
    let navigate = useNavigate();

    return (
        <Table
            items={[]}
            columnDefinitions={columnDefinitions}
            variant="full-page"
            header={
                <Header
                    variant="awsui-h1-sticky"
                    counter="(0)"
                    actions={
                        <SpaceBetween size="xs" direction="horizontal">
                            <Button disabled>View details</Button>
                            <Button disabled>Edit</Button>
                            <Button disabled>Delete</Button>
                            <Button onClick={e => { e.preventDefault(); navigate("./create"); }} variant="primary">Create permission domain</Button>
                        </SpaceBetween>
                    }
                >
                    Permission Domains
                </Header>
            }
            stickyHeader={true}
            empty={
                <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
                    <SpaceBetween size="xxs">
                        <div>
                            <b>No permission domains</b>
                            <Box variant="p" color="inherit">
                                You don't have any permission domains.
                            </Box>
                        </div>
                        <Button>Create permission domain</Button>
                    </SpaceBetween>
                </Box>
            }
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