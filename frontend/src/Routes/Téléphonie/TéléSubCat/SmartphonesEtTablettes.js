const Smartphones_Tablettes = ({ SmartphonesEtTablettesData }) => {
  return SmartphonesEtTablettesData?.filter((elm) => {
    return elm.Sub_category === 'Smartphones & Tablettes';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default Smartphones_Tablettes;
