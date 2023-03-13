import Card from "react-bootstrap/Card";

function AddCard() {
  return (
    <div className="d-flex justify-content-center container mt-5">
      <div>
        <Card
          style={{
            width: "20rem",
            marginRight: "35px",
            border: "2px solid gold",
          }}
        >
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwBphV7Gze61lS3f2xfFCk-9TtNvIBMK1B32Q4DAN3DRcY6dn80VTN7JOIF4wyXijQ0k&usqp=CAU"
          />
          <Card.Body style={{ color: "gold", background: "black" }}>
            <Card.Title>Арстан</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <Card
        style={{
          width: "18rem",
          marginRight: "35px",
          border: "2px solid gold",
        }}
      >
        <div>
          <Card.Img
            variant="top"
            src="https://vjoy.cc/wp-content/uploads/2020/08/18d85a68460015afd40967f5a85c2a47.jpg"
          />
          <Card.Body
            style={{
              color: "gold",
              background: "black",
            }}
          >
            <Card.Title>Лев</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
      <Card
        style={{
          width: "18rem",
          border: "2px solid gold",
        }}
      >
        <div>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKSjfA2-T3Hql-L6aFOQ10rdJLULclAQ0DcjD_jLa36UDJjk3WwppOLzTuvulWOAIpfA&usqp=CAU"
          />
          <Card.Body style={{ color: "gold", background: "black" }}>
            <Card.Title>Lion</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              recusandae enim ex voluptatem? .
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}

export default AddCard;
