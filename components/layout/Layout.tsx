interface LayoutProps {
  children: React.ReactElement;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};
