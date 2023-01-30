const Imprimante = ({ ImprimanteData }) => {
  return ImprimanteData?.filter((elm) => {
    return elm.Sub_category === 'Imprimantes';
  })?.map((elm) => {
    return (
      <div>
        {elm.Id} <img src={elm.Image} alt="/" /> title{elm.Name} price
        {elm.Price}
      </div>
    );
  });
};
export default Imprimante;
