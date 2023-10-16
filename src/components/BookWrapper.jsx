import BookListColumn from "./BookListColumn";
import BookListInteractive from "./BookListInteractive";

const BookWrapper = () => {
  return (
    <main className="flex flex-col gap-5 w-full lg:flex-row">
        <BookListInteractive/>
        <BookListColumn/>
    </main>
  )
};

export default BookWrapper;
