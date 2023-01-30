const Téléviseurs = ({ TéléviseursData }) => {
  return TéléviseursData?.filter((elm) => {
    return elm.Sub_category === 'Téléviseurs';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default Téléviseurs;
