const Firewall = ({ FirewallData }) => {
  return FirewallData?.filter((elm) => {
    return elm.Sub_category === 'Firewall';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default Firewall;
