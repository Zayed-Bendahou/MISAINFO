import React from 'react';

export const Head = () => {
  return (
    <>
      <section className={`bg-blue p-0 box-border`}>
        <div className="text-lg text-white mx-2.5">
          <ul className="mx-5 flex justify-around">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <li className="flex justify-around ">
              <div className="space-x-3">
                <i className="fa fa-phone"></i>
                <label>+212 623456789 / </label>

                <i className="fa fa-envelope"></i>
                <label>Misainfo@gmail.com / </label>

                <i className="fa fa-compass"></i>
                <label>Lorem ipsum dolor sit amet / </label>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
