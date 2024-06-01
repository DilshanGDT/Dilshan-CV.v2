import React from "react";

const Contact = () => {
  return (
    <div className="flex-auto flex-col bg-slate-900 mx-8">
      <div className="flex bg-lime-500 h-1/2">
        <div className="grid grid-cols-2 gap-1 content-center">
          <div className="px-4">
            <p>Phone :</p>
          </div>
          <div>
            <p className="content-center">
              +94 (0) 81 2384848
              <br />
              +94 (0) 81 2392070
              <br />
              +94 (0) 81 2392900
            </p>
          </div>
        </div>
      </div>
      <div className="flex  bg-lime-800 h-1/2">
        <p className="content-center">
          Extention Line - 2900
          <br />
          info@ceit.pdn.ac.lk/ info.ceit@gs.pdn.ac.lk
          <br />
          www.ceit.pdn.ac.lk
        </p>
      </div>
    </div>
  );
};

export default Contact;
