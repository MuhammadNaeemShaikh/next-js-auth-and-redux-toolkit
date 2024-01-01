import Link from 'next/link';
import React from 'react';

const url = 'https://simple-books-api.glitch.me';

interface IBook {
  id: number;
  name: string;
  available: boolean;
  type: string;
}

const page = async () => {
  const res = await fetch(`${url}/books`);
  const books: IBook[] = await res.json();

  return (
    <div>
      {books.map((book: IBook, index) => {
        return (
          <Link href={`/books/${book?.id}`} key={index}>
            <ul>
              <li>{book?.id}</li>
              <li>{book?.name}</li>
              <li>{book?.type}</li>
              <li>{book?.available}</li>
            </ul>
          </Link>
        );
      })}
    </div>
  );
};

export default page;
