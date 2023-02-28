import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="not-found-overlay" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1464716821973-e1031cfa43dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGlraW5nJTIwbG9zdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)", backgroundSize: 'cover', height:'700px', backgroundPosition: 'center'}}>
          <h1 className="not-title">Oops! You're Lost!</h1>
          <h3 className="not-subtitle">We're sorry, but the page you're looking for isn't here. It looks like you took a wrong turn somewhere.</h3>
      </div>
    </>
  );
};

export default NotFound;