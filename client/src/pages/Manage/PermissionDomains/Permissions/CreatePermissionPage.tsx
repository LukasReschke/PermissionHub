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
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "urql";
import BreadcrumbGroup from "../../../../components/BreadcrumbGroup";
import SideNavigation from "../../../../components/SideNavigation";
import { graphql } from "../../../../gql";

type Props = {
    navItems: SideNavigationProps.Item[],
}

const FetchNameOfPermissionDomainQuery = graphql(`query fetchNameOfPermissionDomain($id: Int!) {
    permissionDomain(id: $id) {
      name
    }
  }`);

const createPermissionMutation = graphql(`mutation createPermissionMutation($data: CreatePermissionInput!) {
    createPermission(input: $data) {
      permission {
        id
        name
      }
    }
  }`);

export default function CreatePermissionPage({ navItems }: Props) {
    let navigate = useNavigate();
    const { id } = useParams();
    const [writeInAction, setWriteInAction] = useState(false);
    const [createPermissionResult, createPermission] = useMutation(createPermissionMutation);
    const [nameOfPermissionDomain, reexecuteNameOfPermissionDomainQuery] = useQuery({
        query: FetchNameOfPermissionDomainQuery,
        variables: {
            id: Number(id) as number,
        },
        pause: id === undefined,
    });

    let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setWriteInAction(true);
        e.preventDefault();
        if (permissionDomainName.length === 0) {
            setErrorMessage("Permission Domain Name is required.");
        } else {
            createPermission({ data: { permission: { name: permissionDomainName, permissionDomainId: Number(id) as number } } }).then((result) => {
                if (result.error) {
                    setErrorMessage("Something went wrong.");
                } else {
                    setErrorMessage("");
                    navigate("./../");
                }
                setWriteInAction(false);
            });
        }
    };
    const [errorMessage, setErrorMessage] = useState("");
    const [permissionDomainName, setPermissionDomainName] = useState("");

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
            text: nameOfPermissionDomain.data?.permissionDomain?.name ?? '',
            href: './../',
        },
        {
            text: 'Create permission',
            href: '/manage/permissiondomains/create',
        },
    ];
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
                    description="When you create a permission, you tell PermissionHub what type of permissions a service has."
                >
                    Create permission
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
                                <Button variant="primary" loading={writeInAction} disabled={writeInAction}>Create permission</Button>
                            </SpaceBetween>
                        }
                        errorIconAriaLabel="Error"
                    >
                        <Container
                            header={<Header variant="h2">Permission domain</Header>}
                        >
                            <SpaceBetween size="l">
                                <FormField
                                    label="Permission Name"
                                    errorText={errorMessage}
                                    description="Enter the unique name of this permission.">
                                    <Input
                                        ariaRequired={true}
                                        onChange={({ detail }) => setPermissionDomainName(detail.value)}
                                        placeholder="Read users"
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