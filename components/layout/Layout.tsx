import Nav from "../Nav";
import Footer from "../Footer";

interface LayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="container mx-auto">
    <Nav/>
    <main>{children}</main>
    <footer>
      <Footer/>
    </footer>
  </div>;
};
