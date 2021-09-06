import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main role="main">{children}</main>
    </>
  );
}

export default Layout;
