import { SideNavigationProps } from "@cloudscape-design/components/side-navigation/interfaces";
import { SideNavigation as SideNavigationOriginal } from "@cloudscape-design/components";
import { useNavigate } from "react-router-dom";

export default function SideNavigation({ header, activeHref, items, ...props}: SideNavigationProps) {
    const navigate = useNavigate();

    if (activeHref === undefined) {
        activeHref = window.location.pathname;
    }
    const onFollowHandler = (e: CustomEvent<SideNavigationProps.FollowDetail>) => {
        e.preventDefault();
        navigate(e.detail.href);
    };

    return <SideNavigationOriginal activeHref={activeHref} items={items} header={header} onFollow={onFollowHandler} {...props} />;
}