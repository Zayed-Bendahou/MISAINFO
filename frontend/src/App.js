import { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch as Routes,
} from 'react-router-dom';
import Home from './Pages/Home';
import Imprimantes from './Routes/Imprimantes/Imprimantes';
import Imprimante from './Routes/Imprimantes/SubCatImpri/Imprimante';
import Consommables from './Routes/Imprimantes/SubCatImpri/Consommables';
import Firewall from './Routes/Réseaux/RéseauxSubCat/Firewall';
import PointDaccès from './Routes/Réseaux/RéseauxSubCat/PointsDaccès';
import Routeurs from './Routes/Réseaux/RéseauxSubCat/Routeurs';
import Switches from './Routes/Réseaux/RéseauxSubCat/Switches';
import Autres from './Routes/Périphériques/PeriSubCat/Autres';
import CâblesAdaptateurs from './Routes/Périphériques/PeriSubCat/CâblesAdaptateurs';
import CasqueSpeaker from './Routes/Périphériques/PeriSubCat/CasqueSpeaker';
import ClavierSouris from './Routes/Périphériques/PeriSubCat/ClavierSouris';
import ÉcranPC from './Routes/Périphériques/PeriSubCat/ÉcranPC';
import MémoireRAM from './Routes/Périphériques/PeriSubCat/MémoireRAM';
import Onduleur from './Routes/Périphériques/PeriSubCat/Onduleur';
import Sacoche from './Routes/Périphériques/PeriSubCat/Sacoche';
import Stockage from './Routes/Périphériques/PeriSubCat/Stockage';
import SmartphonesEtTablettes from './Routes/Téléphonie/TéléSubCat/SmartphonesEtTablettes';
import TéléphoneAnalogique from './Routes/Téléphonie/TéléSubCat/TéléphoneAnalogique';
import TéléphoneIP from './Routes/Téléphonie/TéléSubCat/TéléphoneIP';
import OrdinateursPortables from './Routes/PC/PCSubCat/OrdinateursPortables';
import OrdinateursDeBureau from './Routes/PC/PCSubCat/OrdinateursDeBureau';
import Serveurs from './Routes/PC/PCSubCat/Serveurs';
import ÉcransDeProjection from './Routes/Image & Son/Image&SonSubCat/ÉcransDeProjection';
import Téléviseurs from './Routes/Image & Son/Image&SonSubCat/Téléviseurs';
import VidéoProjecteurs from './Routes/Image & Son/Image&SonSubCat/VidéoProjecteurs';
import Cameras from './Routes/Système de sécurité/SécuritéSubCat/Cameras';
import ContrôleDacces from './Routes/Système de sécurité/SécuritéSubCat/ContrôleDacces';
import Pointeuse from './Routes/Système de sécurité/SécuritéSubCat/Pointeuse';
import SystèmeDalarme from './Routes/Système de sécurité/SécuritéSubCat/SystèmeDalarme';
import Antivirus from './Routes/Logiciels/LogicielsSubCat/Antivirus';
import Bureautique from './Routes/Logiciels/LogicielsSubCat/Bureautique';
import OS from './Routes/Logiciels/LogicielsSubCat/OS';
import axios from 'axios';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ContactUs } from './Pages/ContactUs';
import { Devis } from './Pages/Devis';
import Product from './components/Productspage/Product';
import Promo from './Pages/Promo';
function App() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/getAllProducts').then((res) => {
      setdata(res.data);
    });
  }, []);
  console.log(data);
  return (
    <Router>
      <Header />
      <div className="App">
        <div className="content">
          <Routes>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/devis">
              <Devis />
            </Route>
            <Route exact path="/Contact">
              <ContactUs />
            </Route>
            <Route exact path="/imprimantes">
              <Imprimantes />
            </Route>
            <Route exact path="/imprimantes/imprimantes">
              <Imprimante ImprimanteData={data} />
            </Route>
            <Route exact path="/imprimantes/consommables">
              <Consommables ConsommablesData={data} />
            </Route>
            <Route exact path="/réseaux/firewall">
              <Firewall FirewallData={data} />
            </Route>
            <Route exact path="/réseaux/point_dacces">
              <PointDaccès PointDaccèsData={data} />
            </Route>
            <Route exact path="/réseaux/routeurs">
              <Routeurs RouteursData={data} />
            </Route>
            <Route exact path="/réseaux/switches">
              <Switches SwitchesData={data} />
            </Route>
            <Route exact path="/périphériques/autres">
              <Autres AutresData={data} />
            </Route>
            <Route exact path="/périphériques/câbles&adaptateurs">
              <CâblesAdaptateurs CâblesAdaptateursData={data} />
            </Route>
            <Route exact path="/périphériques/casque&speaker">
              <CasqueSpeaker CasqueSpeakerData={data} />
            </Route>
            <Route exact path="/périphériques/clavier&souris">
              <ClavierSouris ClavierSourisData={data} />
            </Route>
            <Route exact path="/périphériques/écranpc">
              <ÉcranPC ÉcranPCData={data} />
            </Route>
            <Route exact path="/périphériques/mémoireram">
              <MémoireRAM MémoireRAMData={data} />
            </Route>
            <Route exact path="/périphériques/onduleur">
              <Onduleur OnduleurData={data} />
            </Route>
            <Route exact path="/périphériques/sacoche">
              <Sacoche SacocheData={data} />
            </Route>
            <Route exact path="/périphériques/stockage">
              <Stockage StockageData={data} />
            </Route>
            <Route exact path="/Téléphonie/smartphones&tablettes">
              <SmartphonesEtTablettes SmartphonesEtTablettesData={data} />
            </Route>
            <Route exact path="/Téléphonie/téléphoneanalogique">
              <TéléphoneAnalogique TéléphoneAnalogiqueData={data} />
            </Route>
            <Route exact path="/Téléphonie/téléphoneip">
              <TéléphoneIP TéléphoneIPData={data} />
            </Route>
            <Route exact path="/pc/ordinateursportables">
              <OrdinateursPortables OrdinateursPortablesData={data} />
            </Route>
            <Route exact path="/pc/ordinateursdebureau">
              <OrdinateursDeBureau OrdinateursDeBureauData={data} />
            </Route>
            <Route exact path="/pc/serveurs">
              <Serveurs ServeursData={data} />
            </Route>
            <Route exact path="/image&son/écransdeprojection">
              <ÉcransDeProjection ÉcransDeProjectionData={data} />
            </Route>
            <Route exact path="/image&son/téléviseurs">
              <Téléviseurs TéléviseursData={data} />
            </Route>
            <Route exact path="/image&son/vidéoprojecteurs">
              <VidéoProjecteurs VidéoProjecteursData={data} />
            </Route>
            <Route exact path="/systèmedesécurité/cameras">
              <Cameras CamerasData={data} />
            </Route>
            <Route exact path="/systèmedesécurité/contrôledacces">
              <ContrôleDacces ContrôleDaccesData={data} />
            </Route>
            <Route exact path="/systèmedesécurité/pointeuse">
              <Pointeuse PointeuseData={data} />
            </Route>
            <Route exact path="/systèmedesécurité/systèmedalarme">
              <SystèmeDalarme SystèmeDalarmeData={data} />
            </Route>
            <Route exact path="/logiciels/antivirus">
              <Antivirus AntivirusData={data} />
            </Route>
            <Route exact path="/logiciels/bureautique">
              <Bureautique BureautiqueData={data} />
            </Route>
            <Route exact path="/logiciels/os">
              <OS OSData={data} />
            </Route>
            <Route exact path="/product/:categorie/:subcategorie/:id">
              <Product productData={data} />
            </Route>
            <Route exact path="/promo">
              <Promo productData={data} />
            </Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}
export default App;
