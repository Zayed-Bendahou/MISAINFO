const Sacoche = ({ SacocheData }) => {
  return SacocheData?.filter((elm) => {
    return elm.Sub_category === 'Sacoche';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default Sacoche;
