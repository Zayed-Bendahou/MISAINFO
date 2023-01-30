const Routeurs = ({ RouteursData }) => {
  return RouteursData?.filter((elm) => {
    return elm.Sub_category === 'Routeurs';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default Routeurs;
