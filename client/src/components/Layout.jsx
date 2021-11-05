import Nav from "./Nav";
import Footer from "./Footer";

function Layout(props) {
  const { children, currentUser, handleLogout } = props;
  return (
    <div className="layout">
      <Nav currentUser={currentUser} handleLogout={handleLogout} />
      <div className="layout-children">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;
