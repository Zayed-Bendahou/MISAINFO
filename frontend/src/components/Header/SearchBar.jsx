import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

function NavScrollExample() {
  const [user, setUser] = useState({});
  function handleCallbackresponse(response) {
    console.log('Encoded JWT ID token: ' + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById('signInDiv').hidden = true;
  }
  function handleSignOut(event) {
    setUser({});
    document.getElementById('signInDiv').hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        '763024192985-esdnugu70p91vvii7jt8lacnik1khsdf.apps.googleusercontent.com',
      callback: handleCallbackresponse,
    });
    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });
    // google.accounts.id.prompt();
  }, []);

  return (
    <div className="bg-white w-full h-full ">
      <div className=" flex flex-row w-full justify-between ">
        <div className=" py-3 ml-64  ">
          <input
            type="text"
            placeholder="Chercher un produit"
            className="ring-1 ring-gray-300 rounded-md mr-3 px-8 py-2 outine-none focus:ring-2 focus:ring-teal-300 w-96"
          />
          <button className=" bg-cyan-600 text-white font-bold rounded-lg px-8 py-2 hover:bg-teal-500">
            Chercher
          </button>
        </div>
        <div className=" py-3 px-8 text-2xl flex flex-row border-l border-gray-300">
          <div className="px-2 py-1 border-l " id="signInDiv">
            <Link
              to=""
              className="flex flex-col items-center hover:text-cyan-600"
            >
              <ion-icon name="person-outline"></ion-icon>
              <label className="text-base">Se connecter</label>
            </Link>
          </div>
          <div className=" border-r ">
            {user && (
              <div className="flex flex-row ">
                <div>
                  <img src={user.picture} alt="" className="h-12"></img>
                </div>
                <div>
                  <h4 className="text-sm font-semibold px-2 mt-3">
                    {user.name}
                  </h4>
                </div>
              </div>
            )}
          </div>
          <div className="px-2 border-r ">
            <Link
              to="/"
              className="flex flex-col items-center hover:text-cyan-600"
            >
              <ion-icon name="chatbox-ellipses-outline"></ion-icon>
              <label className="text-base">Messages</label>
            </Link>
          </div>
          <div className="px-2 border-r">
            <Link
              to="/"
              className="flex flex-col items-center hover:text-cyan-600"
            >
              <ion-icon name="heart-outline"></ion-icon>
              <label className="text-base">Mes ordres</label>
            </Link>
          </div>
          <div className="px-2 border-r">
            <Link
              to="/"
              className="flex flex-col items-center hover:text-cyan-600"
            >
              <ion-icon name="cart-outline"></ion-icon>
              <label className="text-base">Panier</label>
            </Link>
          </div>

          <div className="px-2">
            {Object.keys(user).length !== 0 && (
              <button
                onClick={(e) => handleSignOut(e)}
                className="bg-cyan-600 rounded-md mt-2 py-1 px-2 text-white text-base hover:bg-red-400"
              >
                Se déconnecter
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavScrollExample;
