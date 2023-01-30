const Pointeuse = ({ PointeuseData }) => {
  return PointeuseData?.filter((elm) => {
    return elm.Sub_category === 'Pointeuse';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default Pointeuse;
