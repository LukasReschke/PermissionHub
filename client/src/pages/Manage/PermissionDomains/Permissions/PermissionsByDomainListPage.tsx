import { Button, Header, SpaceBetween, Table, TableProps } from "@cloudscape-design/components";
import AppLayout from "@cloudscape-design/components/app-layout";
import { SideNavigationProps } from "@cloudscape-design/components/side-navigation";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "urql";
import BreadcrumbGroup from "../../../../components/BreadcrumbGroup";
import Link from "../../../../components/Link";
import SideNavigation from "../../../../components/SideNavigation";
import { graphql } from "../../../../gql";
import { FetchPermissionDomainInfosByIdQuery, PermissionDomain, PermissionDomainsConnection } from "../../../../gql/graphql";

type Props = {
    navItems: SideNavigationProps.Item[],
}

const PermissionDomainQuery = graphql(`query FetchPermissionDomainInfosById($id: ID!) {
    node(id: $id) {
      ... on PermissionDomain {
        name
        permissions {
          nodes {
            id
            name
          }
        }
      }
    }
  }
`);

export default function PermissionsByDomainListPage({ navItems }: Props) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [permissionDomainId, setPermissionDomainId] = useState<string | undefined>(id);

    const [result, reexecuteQuery] = useQuery({
        query: PermissionDomainQuery,
        variables: {
            id: permissionDomainId!,
        },
        pause: permissionDomainId === undefined,
    });

    const [permissionDomain, setPermissionDomain] = useState<FetchPermissionDomainInfosByIdQuery>();
    useEffect(() => {
        setPermissionDomain(result.data);
    }, [result]);


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

    if (permissionDomain !== undefined && permissionDomain.node && "name" in permissionDomain.node) {
        breadcrumbs.push(
            {
                text: permissionDomain.node.name,
                href: '.',
            }
        );
    }

    return <AppLayout
        toolsHide
        breadcrumbs={<BreadcrumbGroup items={breadcrumbs} expandAriaLabel="Show path" ariaLabel="Breadcrumbs" />}
        navigation={<SideNavigation activeHref="/manage/permissiondomains" items={navItems} />}
        contentType="table"
        content={
            <Table
                variant={"full-page"}
                loading={result.fetching}
                columnDefinitions={[
                    {
                        header: "Name",
                        cell: e => <Link href={'./' + e.id}>{e.name}</Link>,
                    },
                ]}
                header={
                    <Header
                        actions={
                            <SpaceBetween size="xs" direction="horizontal">
                                <Button onClick={e => { e.preventDefault(); navigate("./create"); }} variant="primary">Create permission</Button>
                            </SpaceBetween>
                        }
                    >
                        {(permissionDomain !== undefined && permissionDomain.node && "name" in permissionDomain.node) &&
                            <>{permissionDomain.node.name}</>
                        }
                    </Header>
                }
                items={permissionDomain?.node && "permissions" in permissionDomain.node ? permissionDomain?.node.permissions.nodes : []}
            />
        }
    />;
}