import { BooksContext } from "../context/BooksContext";
import { useContext } from "react";

const BookListColumn = () => {

  const {booksList, removeBookToList} = useContext(BooksContext);

  return (
    <section className="bg-bgBookList rounded-sm p-5 flex-flex h-full overflow-auto">
      <ul className='grid grid-cols-4 lg:grid-cols-2 gap-5'>
        {
          booksList && booksList.map((book, index) => {
            return (
              <li
              key={index}
              onClick={() => removeBookToList(book)}
              className="hover:translate-y-1 brightness-90 hover:brightness-105 transition cursor-pointer">
                <img src={book.img} className='h-full rounded-md' alt={book.alt} />
              </li>
            )    
          })
        }
      </ul>
    </section>
  )
};

export default BookListColumn;
