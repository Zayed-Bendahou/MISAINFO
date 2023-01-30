import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav class=" nav-tabs navbar navbar-expand-lg bg-body-tertiary ">
      <div class="container-fluid">
        <Link class="navbar-brandd" to="/home">
          Accueil
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tous nos produits
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PC & Ordinateurs
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/pc/ordinateursportables">
                    Ordinateurs Portables
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/pc/ordinateursdebureau">
                    Ordinateurs De Bureau
                  </a>
                </li>
                <li>
                  <a class="dropdown-divider"></a>
                </li>
                <li>
                  <a class="dropdown-item" href="/pc/serveurs">
                    Serveurs
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/imprimantes"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Imprimantes
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/imprimantes/imprimantes">
                    Imprimantes
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/imprimantes/consommables">
                    Consommables
                  </a>
                </li>
                <li>
                  <a class="dropdown-divider"></a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Image & Son
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/image&son/écransdeprojection">
                    Écrans de projection
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/image&son/téléviseurs">
                    Téléviseurs
                  </a>
                </li>
                <li>
                  <a class="dropdown-divider"></a>
                </li>
                <li>
                  <a class="dropdown-item" href="/image&son/vidéoprojecteurs">
                    Vidéo projecteurs
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Réseaux
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/réseaux/firewall">
                    Firewall
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/réseaux/point_dacces">
                    Point D’accès
                  </a>
                </li>
                <li>
                  <a class="dropdown-divider"></a>
                </li>
                <li>
                  <a class="dropdown-item" href="/réseaux/routeurs">
                    Routeurs
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/réseaux/switches">
                    Switches
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Système de sécurité
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/systèmedesécurité/cameras">
                    Cameras de surveillances
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="/systèmedesécurité/contrôledacces"
                  >
                    Contrôle d’accès
                  </a>
                </li>
                <li>
                  <a class="dropdown-divider"></a>
                </li>
                <li>
                  <a class="dropdown-item" href="/systèmedesécurité/pointeuse">
                    Pointeuse
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="/systèmedesécurité/systèmedalarme"
                  >
                    Système D’alarme
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Périphériques
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a
                    class="dropdown-item"
                    href="/périphériques/câbles&adaptateurs"
                  >
                    Câbles & adaptateurs
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/périphériques/casque&speaker">
                    Casque & Speaker
                  </a>
                </li>
                <li>
                  <a class="dropdown-divider"></a>
                </li>
                <li>
                  <a class="dropdown-item" href="/périphériques/clavier&souris">
                    Claviers & Souris
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/périphériques/écranpc">
                    Écran PC
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/périphériques/mémoireram">
                    Mémoire RAM
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/périphériques/onduleur">
                    Onduleur
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/périphériques/sacoche">
                    Sacoche
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/périphériques/stockage">
                    Stockage
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/périphériques/autres">
                    Autres
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Logiciels
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/logiciels/antivirus">
                    Antivirus
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/logiciels/bureautique">
                    Bureautique
                  </a>
                </li>
                <li>
                  <a class="dropdown-divider"></a>
                </li>
                <li>
                  <a class="dropdown-item" href="/logiciels/os">
                    Système D’exploitation
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Téléphonie
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a
                    class="dropdown-item"
                    href="/Téléphonie/téléphoneanalogique"
                  >
                    Téléphone Analogique
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="/Téléphonie/smartphones&tablettes"
                  >
                    Smartphones & Tablettes
                  </a>
                </li>
                <li>
                  <a class="dropdown-divider"></a>
                </li>
                <li>
                  <a class="dropdown-item" href="/Téléphonie/téléphoneip">
                    Téléphones IP
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
