const OS = ({ OSData }) => {
  return OSData?.filter((elm) => {
    return elm.Sub_category === "Système D'exploitation";
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default OS;
