import React from 'react';
import { books } from '@/data/books'; // Adjust the import path as necessary
import BookPost from '@/components/BookPost'; // Adjust the import path as necessary
import PageHeader from '@/components/PageHeader'; // Adjust the import path as necessary

export const metadata = {
  title: 'Books | neir.me',
  description: 'A curated list of books on various topics, including technology, philosophy, and more.',
}

const BooksPage = () => {
  return (
    <main className="flex-1 py-6">
      <PageHeader
        title="Books"
        description="A curated list of books on various topics, including technology, philosophy, and more."
      />

      <div className="flex-1">
        {books.map((book) => (
          <BookPost key={book.url} {...book} />
        ))}
      </div>
    </main>
  );
};

export default BooksPage; 