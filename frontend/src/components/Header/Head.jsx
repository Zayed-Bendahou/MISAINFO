import React from 'react';

export const Head = () => {
  return (
    <>
      <section className={`bg-cyan-600 p-0 box-border w-full`}>
        <div className="text-base text-white mx-2.5 w-full">
          <ul className="mx-5 flex justify-center w-full">
            <div className="mx-5">
              MISADAT votre partenaire de matériel informatique professionnel.
            </div>
            <li className="flex justify-around ">
              <div className="space-x-3">
                <i className="fa fa-phone"></i>
                <label className="border-r pr-2">
                  (+212) 668191545 - (+212) 808639627
                </label>
                <i className="fa fa-envelope"></i>
                <label>Contact@misainfo.ma </label>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
