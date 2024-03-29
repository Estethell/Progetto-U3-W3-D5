import { Col } from "react-bootstrap";

const AlbumCard = ({ data }) => {
  debugger;
  return (
    <Col className="text-center" id={data.id}>
      <img className="img-fluid" src={data.album.cover_medium} alt="track" />
      <p>
        Track: {data.title.length < 16 ? `${data.title}` : `${data.title.substring(0, 16)}...`}
        <br />
        Artist: {data.artist.name}
      </p>
    </Col>
  );
};

export default AlbumCard;
