import { Link } from 'react-router-dom';
const SystèmeDalarme = ({ SystèmeDalarmeData }) => {
  return SystèmeDalarmeData?.filter((elm) => {
    return elm.Sub_category === 'Système D’alarme';
  })?.map((elm) => {
    return (
      <div class="my-7 max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md flex">
        <Link
          to={`/product/${elm.Category}/${elm.Sub_category}/${elm._id}`}
          classMame="block w-1/3"
        >
          <img
            class="w-full h-full object-scale-down"
            src={elm.Image}
            alt="Product"
          />
        </Link>
        <div class="w-2/3 p-4">
          <Link to={`/product/${elm.Category}/${elm.Sub_category}/${elm._id}`}>
            <h2 class="text-xl font-medium text-gray-800">{elm.Name}</h2>
          </Link>

          <p class="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            euismod justo nec quam pharetra, vel sodales magna dapibus.
          </p>
          <div class="mt-4 flex justify-between items-center">
            <span class="text-gray-700 font-medium">{elm.Price} DH</span>
            <Link
              to={`/product/${elm.Category}/${elm.Sub_category}/${elm._id}`}
              class="px-4 py-2 text-black bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Voir Produit
            </Link>
          </div>
        </div>
      </div>
    );
  });
};
export default SystèmeDalarme;
