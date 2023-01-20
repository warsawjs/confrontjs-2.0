import Nav from "../Nav";
import Footer from "../Footer";



interface LayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
  <>
    <nav>
      <Nav/>
    </nav>
    <main>
      {children}
    </main>
    <footer>
      <Footer/>
    </footer>
  </>
  )
};

