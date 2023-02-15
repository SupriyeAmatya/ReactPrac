import React from "react";


export default function App() {
  return (
    <div className="container">
      <div className="row min-vh-100">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <h1>Hello World!</h1>
        </div>
      </div>
    </div>
  );


  function renderPostsTable() {
    return (
      <div className="table-responsive mt-5">
        <table className="table table-bordered border-dark">
          <thead>
            <tr>
              <th scope="col">PostId (PK)</th>
              <th scope="col">PostId (PK)</th>
              
            </tr>
          </thead>
        </table>
      </div>
    );
  }

}
