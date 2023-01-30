const Onduleur = ({ OnduleurData }) => {
  return OnduleurData?.filter((elm) => {
    return elm.Sub_category === 'Onduleur';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default Onduleur;
