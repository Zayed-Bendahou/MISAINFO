const ÉcranPC = ({ ÉcranPCData }) => {
  return ÉcranPCData
    ?.filter((elm) => {
      return elm.Sub_category === 'Écran PC';
    })
    ?.map((elm) => {
      return (
        <div>
          {elm.Name} {elm.Price}
        </div>
      );
    });
};
export default ÉcranPC;
