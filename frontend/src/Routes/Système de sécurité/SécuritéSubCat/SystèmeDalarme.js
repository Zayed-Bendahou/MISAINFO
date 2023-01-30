const SystèmeDalarme = ({ SystèmeDalarmeData }) => {
  return SystèmeDalarmeData?.filter((elm) => {
    return elm.Sub_category === 'Système D’alarme';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default SystèmeDalarme;
