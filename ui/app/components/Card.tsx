import Image from 'next/image';

interface CardProps {
  id: string;
  title: string;
  imageUrl: string;
  isRead: boolean;
  author?: string;
  description?: string;
  showButtons?: boolean;
  buttonType?: 'want-to-read' | 'read';
  onRead?: () => void;
  onTrash?: () => void;
  onStart?: () => void;
}

export default function Card({ title, imageUrl, isRead, author, description, showButtons = false, buttonType, onRead, onTrash, onStart }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-[28rem] flex flex-col relative">
      <div className="relative h-64 w-full shrink-0 bg-white p-4">
        <div className="relative h-full w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
        {isRead && !showButtons && (
          <div className="absolute top-6 right-6 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-3">
          {title}
        </h3>
        {author && (
          <p className="text-sm text-gray-600 mb-3">by {author}</p>
        )}
        {/* Spacer to ensure consistent bottom padding placement */}
        <div className="mt-auto" />
        {description && (
          <p className={`text-base text-gray-700 line-clamp-5 ${showButtons ? 'pb-16' : ''}`}>
            {description}
          </p>
        )}
      </div>

      {/* Mobile-friendly buttons - positioned absolutely at bottom */}
      {showButtons && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent">
          <div className="flex gap-2">
            {buttonType === 'want-to-read' && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRead?.();
                  }}
                  className="flex-1 bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2 shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Read
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onTrash?.();
                  }}
                  className="bg-red-500 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </>
            )}
            {buttonType === 'read' && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onStart?.();
                  }}
                  className="flex-1 bg-yellow-500 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2 shadow-lg"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  Start
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onTrash?.();
                  }}
                  className="bg-red-500 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
