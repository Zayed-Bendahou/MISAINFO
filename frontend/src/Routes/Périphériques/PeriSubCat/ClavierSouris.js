const ClavierSouris = ({ ClavierSourisData }) => {
  return ClavierSourisData?.filter((elm) => {
    return elm.Sub_category === 'Claviers & Souris';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default ClavierSouris;
