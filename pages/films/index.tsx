import { GetStaticProps, NextPage } from "next";
import { Films } from "@/components/screens/Films/Films";
import { getFilms } from "@/services/KinopoiskService";
import { initStore } from "@/store/store";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

const FilmsPage: NextPage = () => {
  return (
    <>
      <Header />
      <Films />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const store = initStore();
  const state = store.getState();
  const { filters } = state.filtersReducer;
  const { page } = state.paginationReducer;

  await store.dispatch(getFilms.initiate({ page: page, filters }));

  return { props: { initialReduxState: store.getState() } };
};

export default FilmsPage;