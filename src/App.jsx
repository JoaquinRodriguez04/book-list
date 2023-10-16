import BookWrapper from "./components/BookWrapper";
import { BooksProvider } from "./context/BooksContext";

function App() {

  return (
    <BooksProvider>
      <main className="
      bg-bgDark 
      text-txt-white 
      flex
      justify-center 
      font-medium 
      font-Gabarito 
      text-lg 
      h-screen
      px-12
      py-16
      xl:px-32
      2xl:px-80
      ">
        <BookWrapper/>
      </main>
    </BooksProvider>
  )
};

export default App;
