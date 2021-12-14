require('dotenv').config();

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
const apiLink = `https://www.google.com/maps/embed/v1/place?key=${REACT_APP_API_KEY}&q=660+E+Main+St,Enterprise+UT`;

function GMaps() {
  return (
    <>
      <div id="gMapsContainter">
        <iframe
          title="GmapFrame"
          id="gMapIFrame"
          loading="lazy"
          allowFullScreen
          src={apiLink}
        ></iframe>
      </div>
    </>
  );
}

export default GMaps;
