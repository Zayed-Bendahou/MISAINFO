const Serveurs = ({ ServeursData }) => {
  return ServeursData?.filter((elm) => {
    return elm.Sub_category === 'Serveurs';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default Serveurs;
