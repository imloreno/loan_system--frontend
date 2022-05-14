import HeaderPage from "presentation/components/layout/HeaderPage";
import ClientList from "presentation/container/screens/Home/ClientList";

const Home = () => {
  return (
    <main>
      <HeaderPage>
        <h1 className="title">¿Que hacemos hoy?</h1>
        <p>filters - filters - filters</p>
      </HeaderPage>
      <ClientList />
    </main>
  );
};

export default Home;
