const Stockage = ({ StockageData }) => {
  return StockageData?.filter((elm) => {
    return elm.Sub_category === 'Stockage';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default Stockage;
