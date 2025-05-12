export interface NavigationProps {
  children: ReactNode;
}

export interface SidebarProps {
  children?: ReactNode;
  className?: string;
}

export type InputChatProps = {
  onSend: (input: string) => void;
  loading: boolean;
};

export interface NavigateProps {
  icon: ReactNode;
  to: string;
  text: string;
}

export interface SidebarProps {
  children?: ReactNode;
  className?: string;
  logo?: ReactNode;
  text?: string;
}

