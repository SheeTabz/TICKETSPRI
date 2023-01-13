import { React } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import { useRef, useState, useEffect } from "react";
import "../Passengers/Passenger.css";
import NavBar2 from "../NavBar2";
import Footer from "../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

function ResponsivePage() {
  const componentRef = useRef();
  const [receipt, setReceipt] = useState([]);
  useEffect(() => {
    fetch("/receipt")
      .then((r) => r.json())
      .then(setReceipt);
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "receipt",
    onAfterprint: () => alert("print success"),
  });
  return (
    <>
    <NavBar2/>

      <Container ref={componentRef} width="70%">
        <Row>
          <Col xs={12} className="text-center flex items-center justify-center" style={{ marginTop: "20px" }}>
            <Image
              src={receipt.logoUrl}
              alt="Bus logo should be here"
              fluid
              width="30%"
              // height="50%"
            />
          </Col>
        </Row>
        <Row className="text-center" style={{ marginTop: "20px" }}>
          <p>
            CONGRATULATIONS On Your Successful <strong>Purchase !!!</strong>
          </p>
        </Row>
        <Row>
          <Col xs={12} className="text-center" style={{ marginTop: "30px" }}>
            <table class="table table-bordered border-primary" Responsive>
              <thead>
                <tr>
                  <th scope="col">
                    Ticket NO. <br />
                    {receipt.qr}
                  </th>
                  <th scope="col">
                    Seat NO. <br />
                    {receipt.seat}
                  </th>
                  <th scope="col">
                    Route: <br />
                    {receipt.route}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* <th scope="row">1</th> */}
                  <td colspan="2">
                    {" "}
                    Name: <br />
                    {receipt.customer}
                  </td>
                  <td>
                    BUS: <br />
                    {receipt.busType}
                  </td>
                  {/* <td>@mdo</td> */}
                </tr>
                <tr>
                  {/* <th scope="row">2</th> */}
                  <td>
                    FROM: <br />
                    {receipt.departure}
                  </td>
                  <td>
                    TO: <br />
                    {receipt.destination}
                  </td>
                  <td>
                    ID: <br />
                    {receipt.idNo}
                  </td>
                </tr>

                <tr>
                  {/* <th scope="row">2</th> */}
                  <td>
                    Booking Date: <br />
                    {receipt.bookindate}
                  </td>
                  <td>
                    Travel Date <br />
                    {receipt.travelDate}
                  </td>
                  <td>
                    Amount Paid <br />
                    KES
                    {receipt.amount}
                  </td>
                </tr>
                <tr>
                  {/* <th scope="row">3</th> */}
                  <td colspan="2">
                    Reporting Time: <br />
                    <strong>Strictly</strong>
                    {"7:30 am"}
                  </td>
                  <td>
                    Phone: <br />
                    {receipt.phone}
                  </td>
                </tr>

                <tr>
                  {/* <th scope="row">3</th> */}
                  <td>
                    Cahier: <br />
                    {"Mobile Money"}
                  </td>
                  <td colspan="2">
                    Office: <br />
                    {"M-PESA online"}
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <button fluid className="printbtn flex justify-center items-center bg-sky-500" onClick={handlePrint}>
        Print Receipt
      </button>
      </Container>
     
      <Footer/>
    </>
   
  );
}

export default ResponsivePage;