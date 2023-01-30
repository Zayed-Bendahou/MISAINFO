const CâblesAdaptateurs = ({ CâblesAdaptateursData }) => {
  return CâblesAdaptateursData?.filter((elm) => {
    return elm.Sub_category === 'Câbles & adaptateurs';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default CâblesAdaptateurs;
