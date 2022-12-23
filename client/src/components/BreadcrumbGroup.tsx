import { BreadcrumbGroupProps } from "@cloudscape-design/components/breadcrumb-group/interfaces";
import { BreadcrumbGroup as BreadcrumbGroupOriginal } from "@cloudscape-design/components";
import { useNavigate } from "react-router-dom";

export default function BreadcrumbGroup<T extends BreadcrumbGroupProps.Item = BreadcrumbGroupProps.Item>({ items, expandAriaLabel, ...props }: BreadcrumbGroupProps<T>) {
    let navigate = useNavigate();
    return <BreadcrumbGroupOriginal onFollow={e => { e.preventDefault(); navigate(e.detail.href); }} items={items} expandAriaLabel={expandAriaLabel} {...props} />;
}