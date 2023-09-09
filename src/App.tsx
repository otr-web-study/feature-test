import { Header } from '@/components/Header';
import { Main } from './components/Main';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <>
      <Header />
      <Main>
        <AppRouter />
      </Main>
    </>
  );
}

export default App;
