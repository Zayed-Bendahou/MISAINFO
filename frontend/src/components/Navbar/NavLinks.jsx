import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');
  const links = [
    {
      name: 'TOUS LES PRODUITS',
      submenu: true,
      sublinks: [
        {
          Head: 'PC & Ordinateurs',
          link: '/',
          sublink: [
            { name: 'Ordinateurs portables', link: '/pc/ordinateursportables' },
            { name: 'Ordinateurs de bureau', link: '/pc/ordinateursdebureau' },
            { name: 'Serveurs', link: '/pc/serveurs' },
          ],
        },
        {
          Head: 'Image & Son',
          sublink: [
            {
              name: 'Écrans de projection',
              link: '/image&son/écransdeprojection',
            },

            { name: 'Téléviseurs', link: '/image&son/téléviseurs' },
            { name: 'Vidéo projecteurs', link: '/image&son/vidéoprojecteurs' },
          ],
        },
        {
          Head: 'Téléphonie',
          sublink: [
            {
              name: 'Smartphones & Tablettes',
              link: '/Téléphonie/smartphones&tablettes',
            },
            {
              name: 'Téléphone analogique',
              link: '/Téléphonie/téléphoneanalogique',
            },
            { name: 'Téléphone IP', link: '/Téléphonie/téléphoneip' },
          ],
        },

        {
          Head: 'Réseaux',
          sublink: [
            { name: 'Firewall', link: '/réseaux/firewall' },
            { name: 'Point d’accès', link: '/réseaux/point_dacces' },
            { name: 'Routeurs', link: '/réseaux/routeurs' },
            { name: 'Switches', link: '/réseaux/switches' },
          ],
        },
        {
          Head: 'Périphériques',
          sublink: [
            {
              name: 'Câbles & Adaptateurs',
              link: '/périphériques/câbles&adaptateurs',
            },
            { name: 'Casque & Speaker', link: '/périphériques/casque&speaker' },
            {
              name: 'Claviers & Souris',
              link: '/périphériques/clavier&souris',
            },
            { name: 'Écran PC', link: '/périphériques/écranpc' },
            { name: 'Mémoire RAM', link: '/périphériques/mémoireram' },
            { name: 'Stockage', link: '/périphériques/stockage' },
            { name: 'Onduleur', link: '/périphériques/onduleur' },
            { name: 'Sacoche', link: '/périphériques/sacoche' },
            { name: 'Autres', link: '/périphériques/autres' },
          ],
        },
        {
          Head: 'Logiciels',
          sublink: [
            { name: 'Antivirus', link: '/logiciels/antivirus' },
            { name: 'Bureautique', link: '/logiciels/bureautique' },
            { name: 'Système d’exploitation', link: '/logiciels/os' },
          ],
        },
        {
          Head: 'Système de sécurité',
          sublink: [
            {
              name: 'Cameras de surveillances',
              link: '/systèmedesécurité/cameras',
            },
            {
              name: 'Contrôle d’accès',
              link: '/systèmedesécurité/contrôledacces',
            },
            { name: 'Pointeuse', link: '/systèmedesécurité/pointeuse' },
            {
              name: 'Système D’alarme',
              link: '/systèmedesécurité/systèmedalarme',
            },
          ],
        },

        {
          Head: 'Imprimantes',
          sublink: [
            { name: 'Imprimantes', link: '/imprimantes/imprimantes' },
            { name: 'Consommables', link: '/imprimantes/consommables' },
          ],
        },
      ],
    },
  ];
  return (
    <>
      {links.map((link) => (
        <div className="z-50   ">
          <div className=" text-left md:cursor-pointer group ">
            <h1
              className=" flex justify-between items-center hover:text-cyan-600  md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading('');
                setSubHeading('');
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? 'chevron-up' : 'chevron-down'
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 ">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-27 -my-4 hidden group-hover:md:block hover:md:block ">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 border-t border-l border-cyan-600 absolute 
                    mt-1 bg-white rotate-45 "
                    ></div>
                  </div>
                  <div className="bg-white p-4 border-x border-y border-cyan-600 grid grid-cols-4 gap-4">
                    {link.sublinks.map((mysublinks) => (
                      <div className="border-b">
                        <Link to={mysublinks.Head}>
                          <h1 className="text-lg font-semibold">
                            {mysublinks.Head}
                          </h1>
                        </Link>
                        {mysublinks.sublink.map((slink) => (
                          <div className="text-sm text-gray-600  my-2">
                            <Link
                              to={slink.link}
                              className="hover:text-cyan-600"
                            >
                              {slink.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? 'md:hidden' : 'hidden'}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading('')
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between "
                  >
                    {slinks.Head}

                    <span className="text-xl flex md:mt-1 md:ml-2 ">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? 'chevron-up'
                            : 'chevron-down'
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? 'md:hidden' : 'hidden'
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14 flex">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
