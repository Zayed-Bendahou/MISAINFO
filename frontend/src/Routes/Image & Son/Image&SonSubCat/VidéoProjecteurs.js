const vidéoProjecteurs = ({ VidéoProjecteursData }) => {
  return VidéoProjecteursData?.filter((elm) => {
    return elm.Sub_category === 'Vidéo projecteurs';
  })?.map((elm) => {
    return (
      <div>
        {elm.Name} {elm.Price}
      </div>
    );
  });
};
export default vidéoProjecteurs;
