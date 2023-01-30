const OrdinateursPortables = ({ OrdinateursPortablesData }) => {
  return OrdinateursPortablesData?.filter((elm) => {
    return elm.Sub_category === 'Ordinateurs Portables';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default OrdinateursPortables;
