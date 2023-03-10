import AppLayout from "@cloudscape-design/components/app-layout";
import Button from "@cloudscape-design/components/button";
import Container from "@cloudscape-design/components/container";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Form from "@cloudscape-design/components/form";
import FormField from "@cloudscape-design/components/form-field";
import Header from "@cloudscape-design/components/header";
import Input from "@cloudscape-design/components/input";
import Link from "@cloudscape-design/components/link";
import { SideNavigationProps } from "@cloudscape-design/components/side-navigation";
import SpaceBetween from "@cloudscape-design/components/space-between";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "urql";
import BreadcrumbGroup from "../../../components/BreadcrumbGroup";
import SideNavigation from "../../../components/SideNavigation";
import { graphql } from "../../../gql";

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
        text: 'Create permission domain',
        href: '/manage/permissiondomains/create',
    },
];

type Props = {
    navItems: SideNavigationProps.Item[],
}

const createPermissionDomainMutation = graphql(`mutation AddNewPermissionDomain($data:CreatePermissionDomainInput!) {
    createPermissionDomain(input:$data) {
      permissionDomain {
        id
        name
      }
    }
}`);

export default function CreatePermissionDomainPage({ navItems }: Props) {
    let navigate = useNavigate();
    const [writeInAction, setWriteInAction] = useState(false);
    const [createPermissionResult, createPermission] = useMutation(createPermissionDomainMutation);

    let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setWriteInAction(true);
        e.preventDefault();
        if (permissionDomainName.length === 0) {
            setErrorMessage("Permission Domain Name is required.");
        } else {
            createPermission({ data: { permissionDomain: { name: permissionDomainName } } }).then((result) => {
                if (result.error) {
                    setErrorMessage("Something went wrong.");
                } else {
                    setErrorMessage("");
                    navigate("/manage/permissiondomains");
                }
                setWriteInAction(false);
            });
        }
    };
    const [errorMessage, setErrorMessage] = useState("");
    const [permissionDomainName, setPermissionDomainName] = useState("");

    return <AppLayout
        toolsHide
        navigation={<SideNavigation activeHref="/manage/permissiondomains" items={navItems} />}
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
                                    onClick={(e) => { e.preventDefault(); navigate(-1) }}>
                                    Cancel
                                </Button>
                                <Button variant="primary" loading={writeInAction} disabled={writeInAction}>Create permission domain</Button>
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