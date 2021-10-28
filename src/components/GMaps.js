//AIzaSyD8reOmDFA9FKRsCUagUH_gEyCasSsgxUQ

function GMaps() {
  return (
    <>
      <div id="gMapsContainter">
        <iframe
          title="GmapFrame"
          id="gMapIFrame"
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/place?key=------&q=660+E+Main+St,Enterprise+UT"
        ></iframe>
      </div>
    </>
  );
}

export default GMaps;
