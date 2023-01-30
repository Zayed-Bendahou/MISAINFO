const Antivirus = ({ AntivirusData }) => {
  return AntivirusData?.filter((elm) => {
    return elm.Sub_category === 'Antivirus';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default Antivirus;
