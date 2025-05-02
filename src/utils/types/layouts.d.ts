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
