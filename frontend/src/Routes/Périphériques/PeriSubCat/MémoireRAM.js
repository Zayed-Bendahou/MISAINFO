const MémoireRAM = ({ MémoireRAMData }) => {
  return MémoireRAMData?.filter((elm) => {
    return elm.Sub_category === 'Mémoire RAM';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default MémoireRAM;
