const PointDaccès = ({ PointDaccèsData }) => {
  return PointDaccèsData?.filter((elm) => {
    return elm.Sub_category === 'Point D’accès';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default PointDaccès;
