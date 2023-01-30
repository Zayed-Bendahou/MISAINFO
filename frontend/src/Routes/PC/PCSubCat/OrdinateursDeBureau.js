const OrdinateursDeBureau = ({ OrdinateursDeBureauData }) => {
  return OrdinateursDeBureauData?.filter((elm) => {
    return elm.Sub_category === 'Ordinateurs De Bureau';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default OrdinateursDeBureau;
