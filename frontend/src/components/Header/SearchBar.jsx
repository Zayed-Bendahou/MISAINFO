import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <div className="bg-white w-full h-full ">
      <div className=" flex flex-row justify-between">
        <div className=" py-3  ml-64  ">
          <input
            type="text"
            placeholder="Chercher un produit"
            className="ring-1 ring-gray-300 rounded-md mr-3 px-8 py-2 outine-none focus:ring-2 focus:ring-teal-300 w-96"
          />
          <button className="  bg-cyan-600 text-white font-bold rounded-lg px-8 py-2 hover:bg-teal-500">
            Chercher
          </button>
        </div>
        <div className=" py-3 px-8 text-2xl flex border-l border-gray-300">
          <div className="px-2 border-x">
            <Link
              to="/"
              className="flex flex-col items-center hover:text-cyan-600"
            >
              <ion-icon name="person-outline"></ion-icon>
              <label className="text-base">Se connecter</label>
            </Link>
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
        </div>
      </div>
    </div>
  );
}

export default NavScrollExample;
