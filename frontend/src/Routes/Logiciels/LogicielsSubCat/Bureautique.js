const Bureautique = ({ BureautiqueData }) => {
  return BureautiqueData?.filter((elm) => {
    return elm.Sub_category === 'Bureautique';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default Bureautique;
