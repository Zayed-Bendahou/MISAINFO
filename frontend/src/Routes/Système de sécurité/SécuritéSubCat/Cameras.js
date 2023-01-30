const Cameras = ({ CamerasData }) => {
  return CamerasData?.filter((elm) => {
    return elm.Sub_category === 'Cameras de surveillances';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default Cameras;
