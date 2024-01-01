'use client';

const url = 'https://simple-books-api.glitch.me/books/';

interface IBook {
  id: number;
  name: string;
}

interface Iprops {
  params: {
    id: number;
  };
}

interface IBook {
  id: number;
  name: string;
  author: string;
  isbn: string;
  type: string;
  price: number;
  'current-stock': number;
  available: boolean;
}

const page = async ({ params }: Iprops) => {
  const { id } = params;
  console.log(`${url}${id}`)

  const res = await fetch(`${url}${id}`);
  const books = await res.json();

  console.log(books);

  return (
    <div>
      <p>Book Name: {books?.name}</p>
    </div>
  );
};

export default page;
