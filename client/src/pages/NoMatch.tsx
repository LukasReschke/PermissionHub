import Alert from "@cloudscape-design/components/alert";
import Button from "@cloudscape-design/components/button";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Flashbar, { FlashbarProps } from "@cloudscape-design/components/flashbar";
import Header from "@cloudscape-design/components/header";
import Link from "@cloudscape-design/components/link";
import SpaceBetween from "@cloudscape-design/components/space-between";
import React from "react";

export default function NoMatch() {
    return <ContentLayout

        header={
            <SpaceBetween size="m">
                <Header
                    variant="h1"
                >
                    404 not found
                </Header>
            </SpaceBetween>
        }
    />
}