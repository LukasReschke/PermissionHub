import { LinkProps } from "@cloudscape-design/components/link/interfaces";
import { Link as LinkOriginal } from "@cloudscape-design/components";
import { useNavigate } from "react-router/dist/lib/hooks";

export default function Link({ ...props }: LinkProps) {
    const navigate = useNavigate();

    props.onFollow = (e: CustomEvent<LinkProps.FollowDetail>) => {
        e.preventDefault();
        if (e.detail.href !== undefined) {
            navigate(e.detail.href);
        }
    };

    return <LinkOriginal {...props} />;
}
