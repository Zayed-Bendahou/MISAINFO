const Switches = ({ SwitchesData }) => {
  return SwitchesData?.filter((elm) => {
    return elm.Sub_category === 'Switches';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default Switches;
