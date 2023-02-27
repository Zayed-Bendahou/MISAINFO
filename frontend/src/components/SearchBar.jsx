import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <div className="bg-white w-full h-full ">
      <div className=" flex flex-row ">
        <div className="flex flex-row content-center pl-24 py-2">
          <input
            type="text"
            placeholder="Chercher un produit"
            className="ring-1 ring-gray-300 rounded-md mr-2 px-8 py-0 outine-none focus:ring-2 focus:ring-teal-300 "
          />
          <button className=" inline-block bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 hover:bg-teal-500">
            Chercher
          </button>
        </div>
        <div className=" w-full inline-flex py-3 px-8 text-2xl text-cyan-700 justify-end  ">
          <div>
            <Link to="/" className="px-2">
              <ion-icon name="person"></ion-icon>
            </Link>
          </div>
          <div>
            <Link to="/" className="px-2">
              <ion-icon name="chatbox-ellipses"></ion-icon>
            </Link>
          </div>
          <div>
            <Link to="/" className="px-2">
              <ion-icon name="heart"></ion-icon>
            </Link>
          </div>
          <div>
            <Link to="/" className="px-2">
              <ion-icon name="cart"></ion-icon>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavScrollExample;
