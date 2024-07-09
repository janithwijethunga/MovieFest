import React from 'react';

function Message() {
  const name = "Janith";
  return (
    <div className='p-4'>
      <h1 className="text-red-400, border-2">Hello {name}!</h1>
      <p>How are you?</p>
    </div>
  );
}

export default Message;
