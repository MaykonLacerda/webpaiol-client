export interface Props {
  title?: string;
  description?: string;
  info?: string;
  actions?: IAction[];
}

export interface IAction {
  label: string;
  icon: JSX.Element;
  handleClick: () => void;
}

export interface ActionsProps {
  actions?: IAction[];
}
