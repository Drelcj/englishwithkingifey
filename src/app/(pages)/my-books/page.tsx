import React from "react";

const MyBooks = () => {
  const bookLinks = [
    { platform: "Amazon Kindle", url: "https://a.co/d/a" },
    { platform: "Amazon Paperback", url: "https://a.cM7b" },
    // { platform: "Okadabooks", url: "bit.ly/3Ywa06R" },
    // { platform: "BamBooks", url: "https://bambooks.io/book/share/becoming-a-news--titan/16103" },
    { platform: "Selar", url: "https://selar.co/" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl text-center font-semibold text-gray-900 mb-6">Shop Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookLinks.map((book, index) => (
          <a key={index} href={book.url} target="_blank" rel="noopener noreferrer" className="bg-white rounded shadow p-4 flex flex-col items-center text-center hover:bg-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Available on {book.platform}</h2>
            <p className="text-blue-500">Get your copy</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MyBooks;
