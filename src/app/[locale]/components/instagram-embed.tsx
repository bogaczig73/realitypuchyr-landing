import React from 'react';

const InstagramEmbed = () => {
  return (
    <div className="w-full max-w-3xl mx-auto my-8">
      <div className="p-6 rounded shadow-sm shadow-gray-200 dark:shadow-gray-700 overflow-hidden">
        <iframe
          src="https://www.instagram.com/realitypuchyr/embed"
          className="w-full"
          style={{ height: '581px' }}
          allow="encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default InstagramEmbed; 