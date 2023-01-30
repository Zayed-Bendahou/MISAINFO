const ÉcransDeProjection = ({ ÉcransDeProjectionData }) => {
  return ÉcransDeProjectionData
    ?.filter((elm) => {
      return elm.Sub_category === 'Écrans de projection';
    })
    ?.map((elm) => {
      return (
        <div>
          {elm.Name} {elm.Price}
        </div>
      );
    });
};
export default ÉcransDeProjection;
