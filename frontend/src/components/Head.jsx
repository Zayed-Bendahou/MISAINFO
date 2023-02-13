import React from 'react';

export const Head = () => {
  return (
    <>
      <section className={`bg-blue p-0 box-border`}>
        <div className="text-base text-white mx-2.5">
          <ul className="mx-5 flex justify-around">
            <div>
              MISADAT votre partenaire de matériel informatique professionnel.
            </div>
            <li className="flex justify-around ">
              <div className="space-x-3">
                <i className="fa fa-phone"></i>
                <label> (+212) 668191545 - (+212) 808639627 /</label>

                <i className="fa fa-envelope"></i>
                <label>Contact@misainfo.ma / </label>

                <i className="fa fa-compass"></i>
                <label>
                  03, Rue Ait Ourir Boulevard Moulay Youssef Bourgogne
                  Casablanca – Maroc
                </label>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
