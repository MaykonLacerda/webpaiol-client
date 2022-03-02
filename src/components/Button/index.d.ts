export interface IButton {
    icon?: JSX.Element;
    label: string;
    loading: boolean;
    href?: string;
    onClick?: () => void;
}
