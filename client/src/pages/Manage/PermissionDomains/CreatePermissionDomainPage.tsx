import AppLayout from "@cloudscape-design/components/app-layout";
import Button from "@cloudscape-design/components/button";
import Container from "@cloudscape-design/components/container";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Form from "@cloudscape-design/components/form";
import FormField from "@cloudscape-design/components/form-field";
import Header from "@cloudscape-design/components/header";
import Input from "@cloudscape-design/components/input";
import Link from "@cloudscape-design/components/link";
import SideNavigation, { SideNavigationProps } from "@cloudscape-design/components/side-navigation";
import SpaceBetween from "@cloudscape-design/components/space-between";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadcrumbGroup from "../../../components/BreadcrumbGroup";

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
    {
        text: 'Create Permission Domain',
        href: '/manage/permissiondomains/create',
    },
];

type Props = {
    navItems: SideNavigationProps.Item[],
}

export default function CreatePermissionDomainPage({ navItems }: Props) {
    let navigate = useNavigate();
    let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (permissionDomainName.length == 0) {
            setErrorMessage("Permission Domain Name is required.");
        } else {
            setErrorMessage("");
        }
    };
    const [errorMessage, setErrorMessage] = useState("");
    const [permissionDomainName, setPermissionDomainName] = useState("");

    return <AppLayout
        toolsHide
        navigation={<SideNavigation activeHref="#/pages" items={navItems} />}
        breadcrumbs={<BreadcrumbGroup items={breadcrumbs} expandAriaLabel="Show path" ariaLabel="Breadcrumbs" />}
        contentType="form"
        content={
            <ContentLayout
                header={<Header
                    variant="h1"
                    info={<Link variant="info">Info</Link>}
                    description="When you create a permission domain, you tell PermissionHub what type of services exist."
                >
                    Create permission domain
                </Header>}>
                <form onSubmit={handleSubmit}>
                    <Form
                        actions={
                            <SpaceBetween direction="horizontal" size="xs">
                                <Button
                                    variant="link"
                                    onClick={(e) => {e.preventDefault(); navigate(-1)}}>
                                    Cancel
                                </Button>
                                <Button variant="primary">Create permission domain</Button>
                            </SpaceBetween>
                        }
                        errorIconAriaLabel="Error"
                    >
                        <Container
                            header={<Header variant="h2">Permission domain settings</Header>}
                        >
                            <SpaceBetween size="l">
                                <FormField
                                    label="Permission Domain Name"
                                    errorText={errorMessage}
                                    constraintText
                                    description="Enter the unique name of this permission domain.">
                                    <Input
                                        ariaRequired={true}
                                        onChange={({ detail }) => setPermissionDomainName(detail.value)}
                                        placeholder="User Support Tool"
                                        value={permissionDomainName} />
                                </FormField>
                            </SpaceBetween>
                        </Container>
                    </Form>
                </form>
            </ContentLayout>
        }
    />;
}