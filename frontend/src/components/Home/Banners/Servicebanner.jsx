import React from 'react';

export const Servicebanner = () => {
  return (
    <div className="md:flex flex-row xl:flex-col m-12 mt-24 shadow-lg rounded-xl bg-gray-200 justify-evenly cursor-pointer">
      <div className="flex flex-row items-center p-4 w-[25%] border-r-2 border-cyan-600 justify-center ">
        <div className="text-4xl hover:text-cyan-600 mx-3">
          <ion-icon name="cube-outline"></ion-icon>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-1">
            <h2 className="font-bold uppercase ">Livraison Express</h2>
          </div>
          <div>
            <p className="text-center text-sm">
              Faite vous livrer ou que vous soyez au MAROC En 24/48h.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center p-4 w-[25%] border-r-2 border-cyan-600 justify-center ">
        <div className="text-4xl hover:text-cyan-600 mx-3">
          <ion-icon name="construct-outline"></ion-icon>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-1">
            <h2 className="font-bold uppercase ">Service technique certifié</h2>
          </div>
          <div>
            <p className="text-center text-sm">
              Une équipe avec plusieurs années d'expériences, spécialisée,
              agréée et mobile.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center p-4 w-[25%] border-r-2 border-cyan-600 justify-center">
        <div className="text-4xl hover:text-cyan-600 mx-3">
          <ion-icon name="headset-outline"></ion-icon>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-1">
            <h2 className="font-bold uppercase ">Conseils et devis</h2>
          </div>
          <div>
            <p className="text-center text-sm">
              Nos spécialistes commerciales reste à votre disposition - Devis
              Gratuit.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center p-4 w-[25%] justify-center ">
        <div className="text-4xl hover:text-cyan-600 mr-8">
          <ion-icon name="cash-outline"></ion-icon>
        </div>
        <div className="flex flex-col items-center  ">
          <div className="mb-1">
            <h2 className="font-bold uppercase ">Prix bas garanti</h2>
          </div>
          <div>
            <p className="text-center text-sm">Sur tout nos produits.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
