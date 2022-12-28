import { Textarea } from "@cloudscape-design/components";
import Alert from "@cloudscape-design/components/alert";
import AppLayout from "@cloudscape-design/components/app-layout";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import ColumnLayout from "@cloudscape-design/components/column-layout";
import Container from "@cloudscape-design/components/container";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Form from "@cloudscape-design/components/form";
import FormField from "@cloudscape-design/components/form-field";
import Header from "@cloudscape-design/components/header";
import Input from "@cloudscape-design/components/input";
import Link from "@cloudscape-design/components/link";
import SpaceBetween from "@cloudscape-design/components/space-between";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Grant() {
    const navigate = useNavigate();
    const [writeInAction, setWriteInAction] = useState(false);

    let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setWriteInAction(true);
        e.preventDefault();
    };

    return <AppLayout
        toolsHide
        navigationHide={true}
        contentType="form"
        content={
            <ContentLayout
                header={
                    <SpaceBetween size="m">
                        <Header
                            variant="h1"
                            info={<Link variant="info">Info</Link>}
                            description="Request access to the tools you need to do your job efficiently. Please provide a clear and concise reason for your request."
                        >
                            Access Request Form
                        </Header>

                        <Alert type="warning" header="Attention">Access to internal tools and data is strictly controlled and regularly audited. Requests for access will be carefully reviewed and granted only to authorized individuals with a legitimate business need. <strong>Please do not submit a request unless you have a valid reason for needing access.</strong></Alert>
                    </SpaceBetween>
                }>
                <SpaceBetween size="l">
                    <Container
                        header={
                            <Header
                                variant="h2"
                            >
                                Permission details
                            </Header>
                        }
                    >
                        <ColumnLayout columns={2} variant="text-grid">
                            <SpaceBetween size="l">
                                <div>
                                    <Box variant="awsui-key-label">Permission Domain</Box>
                                    <div>TODO</div>
                                </div>
                            </SpaceBetween>

                            <SpaceBetween size="l">
                                <div>
                                    <Box variant="awsui-key-label">Permission Name</Box>
                                    <div>TODO</div>
                                </div>
                            </SpaceBetween>
                        </ColumnLayout>
                    </Container>

                    <form onSubmit={handleSubmit}>
                        <Form
                            actions={
                                <SpaceBetween direction="horizontal" size="xs">
                                    <Button
                                        variant="link"
                                        onClick={(e) => { e.preventDefault(); navigate(-1) }}>
                                        Cancel
                                    </Button>
                                    <Button variant="primary" loading={writeInAction} disabled={writeInAction}>Request access</Button>
                                </SpaceBetween>
                            }
                            errorIconAriaLabel="Error"
                        >
                            <Container
                                header={<Header variant="h2">Request justification</Header>}
                            >
                                <SpaceBetween size="l">
                                    <FormField
                                        label="Supportive links"
                                        description="Provide optional supportive links to gain access.">
                                        <Textarea
                                            ariaRequired={true}
                                            value=""
                                            placeholder="I need access to this tool because..." />
                                    </FormField>
                                    <FormField
                                        label="Supportive links - optional"
                                        description="Provide optional supportive links to gain access.">
                                        <Input
                                            ariaRequired={true}
                                            value=""
                                            placeholder="https://..." />
                                    </FormField>
                                </SpaceBetween>
                            </Container>
                        </Form>
                    </form>
                </SpaceBetween>
            </ContentLayout>
        }
    />;
}