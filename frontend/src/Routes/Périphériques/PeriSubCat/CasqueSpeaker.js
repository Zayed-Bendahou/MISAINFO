const CasqueSpeaker = ({ CasqueSpeakerData }) => {
  return CasqueSpeakerData?.filter((elm) => {
    return elm.Sub_category === 'Casque & Speaker';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default CasqueSpeaker;
