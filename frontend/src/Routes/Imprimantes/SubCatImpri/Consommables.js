const Consommables = ({ ConsommablesData }) => {
  return ConsommablesData?.filter((elm) => {
    return elm.Sub_category === 'Consommables';
  })?.map((elm) => {
    return (
      <div>
        <p1> Nom du produit : </p1>
        {elm.Name}
        <p2> Prix du produit : </p2>
        {elm.Price}
      </div>
    );
  });
};
export default Consommables;
