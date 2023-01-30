const ContrôleDacces = ({ ContrôleDaccesData }) => {
  return ContrôleDaccesData?.filter((elm) => {
    return elm.Sub_category === 'Contrôle d’accès';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default ContrôleDacces;
