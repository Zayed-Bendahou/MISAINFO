const Téléphone_IP = ({ TéléphoneIPData }) => {
  return TéléphoneIPData?.filter((elm) => {
    return elm.Sub_category === 'Téléphones IP';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default Téléphone_IP;
