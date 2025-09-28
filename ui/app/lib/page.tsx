'use client';

import Navigation from '../components/Navigation';
import Card from '../components/Card';
import { useState } from 'react';
import { useLibrary } from '../hooks/libHooks';

export default function LibPage() {
  const { libraryBooks, readBooks, wantToReadBooks, removeBook, markAsRead, markAsUnread } = useLibrary();
  const [viewState, setViewState] = useState<string>("Want to Read")
  const handleRemoveBook = (bookId: string) => {
    if (confirm('Are you sure you want to remove this book from your library?')) {
      removeBook(bookId);
    }
  };

  if (libraryBooks.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">My Library</h2>
            <p className="text-gray-600">Your personal collection of books</p>
          </div>
          
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Your library is empty</h3>
            <p className="text-gray-600 mb-4">Start building your collection by adding books from the feed</p>
            <a 
              href="/" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Browse Feed
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          {/* Header with title and toggle buttons in the same row */}
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-3xl font-bold text-gray-900">My Library</h2>
            
            {/* Toggle buttons positioned on the right */}
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              <button 
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                  viewState === "Want to Read" 
                    ? 'bg-white text-yellow-500 shadow-sm' 
                    : 'text-gray-600'
                }`}
                onClick={() => setViewState("Want to Read")}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span>Want to Read</span>
              </button>
              <button 
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                  viewState === "READ" 
                    ? 'bg-white text-green-600 shadow-sm' 
                    : 'text-gray-600'
                }`}
                onClick={() => setViewState("READ")}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Read</span>
              </button>
            </div>
          </div>
          
          <p className="text-gray-600">Your personal collection of books ({libraryBooks.length} books)</p>
        </div>

        {
          viewState === "Want to Read" ? 
          <section className="mb-10">
          <div className="flex items-baseline justify-between mb-4">
            <h3 className="text-2xl font-semibold text-gray-900">Want to Read</h3>
            <span className="text-gray-500">{wantToReadBooks.length}</span>
          </div>
          {wantToReadBooks.length === 0 ? (
            <p className="text-gray-600">No books in your want-to-read list.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wantToReadBooks.map((book) => (
                <div key={book.id} className="relative">
                  {/* Status icon: Want to Read (yellow star in white circle) */}
                  <div className="absolute top-6 right-6 bg-white text-yellow-500 w-8 h-8 rounded-full flex items-center justify-center shadow-lg z-10" title="Want to Read" aria-label="Want to Read">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>

                  <Card
                    id={book.id}
                    title={book.title}
                    imageUrl={book.imageUrl}
                    isRead={false}
                    author={book.author}
                    description={book.description}
                    showButtons={true}
                    buttonType="want-to-read"
                    onRead={() => markAsRead(book.id)}
                    onTrash={() => handleRemoveBook(book.id)}
                  />
                </div>
              ))}
            </div>
          )}
        </section>
        :
        <section>
          <div className="flex items-baseline justify-between mb-4">
            <h3 className="text-2xl font-semibold text-gray-900">Read</h3>
            <span className="text-gray-500">{readBooks.length}</span>
          </div>
          {readBooks.length === 0 ? (
            <p className="text-gray-600">No books in your read list.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {readBooks.map((book) => (
                <div key={book.id} className="relative">
                  <Card
                    id={book.id}
                    title={book.title}
                    imageUrl={book.imageUrl}
                    isRead={true}
                    author={book.author}
                    description={book.description}
                    showButtons={true}
                    buttonType="read"
                    onStart={() => markAsUnread(book.id)}
                    onTrash={() => handleRemoveBook(book.id)}
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      }
      </div>
    </div>
  );
}
