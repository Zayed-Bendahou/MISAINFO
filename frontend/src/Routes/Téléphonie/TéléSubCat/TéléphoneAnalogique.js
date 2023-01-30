const Téléphone_Analogique = ({ TéléphoneAnalogiqueData }) => {
  return TéléphoneAnalogiqueData?.filter((elm) => {
    return elm.Sub_category === 'Téléphone Analogique';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default Téléphone_Analogique;
