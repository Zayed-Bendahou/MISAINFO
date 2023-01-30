const Autres = ({ AutresData }) => {
  return AutresData?.filter((elm) => {
    return elm.Sub_category === 'Autres';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default Autres;
