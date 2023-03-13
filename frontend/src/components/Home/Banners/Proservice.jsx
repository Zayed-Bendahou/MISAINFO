import React from 'react';
import './Proservice.css';
const Proservice = () => {
  return (
    <div class="container text-white flex justify-evenly brightness-100 ">
      <div className="flex flex-col p-4 mt-24 ">
        <div className=" inline-flex gap-2 mb-4 text-xl">
          <div className="-mt-1">
            <i class="fas fa-server" aria-hidden="true"></i>
          </div>
          <div>
            <h4>Solution informatiques</h4>
          </div>
        </div>
        <div className="space-y-4 ">
          <p>
            <ion-icon name="checkmark-done-outline"></ion-icon> Maintenance
            informatique.
          </p>
          <p>
            <ion-icon name="checkmark-done-outline"></ion-icon>Solution de la
            gestion de présence.
          </p>
          <p>
            <ion-icon name="checkmark-done-outline"></ion-icon> Câblage et
            précâblage informatique et téléphonique
          </p>
        </div>
      </div>
      <div className="flex flex-col p-4 mt-24  ">
        <div className=" inline-flex gap-2 mb-4 text-xl">
          <div className="-mt-1">
            <i class="fas fa-phone" aria-hidden="true"></i>
          </div>
          <div>
            <h4>La téléphonie</h4>
          </div>
        </div>
        <div className="space-y-4 ">
          <p>
            <ion-icon name="checkmark-done-outline"></ion-icon> PABX analogique
            et numérique.
          </p>
          <p>
            <ion-icon name="checkmark-done-outline"></ion-icon> VOIP.
          </p>
        </div>
      </div>
      <div className="flex flex-col p-4 mt-24  ">
        <div className=" inline-flex gap-2 mb-4 text-xl">
          <div className="-mt-1">
            <i class="fas fa-video" aria-hidden="true"></i>
          </div>
          <div>
            <h4>Sécurité et surveillance</h4>
          </div>
        </div>
        <div className="space-y-4 ">
          <p>
            <ion-icon name="checkmark-done-outline"></ion-icon> Control d’accès.
          </p>
          <p>
            <ion-icon name="checkmark-done-outline"></ion-icon> Système de
            détection d’incendie.
          </p>
          <p>
            <ion-icon name="checkmark-done-outline"></ion-icon> système anti
            intrusion.
          </p>
          <p>
            <ion-icon name="checkmark-done-outline"></ion-icon>
            vidéosurveillance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Proservice;
