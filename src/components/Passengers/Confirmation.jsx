import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import "../Passengers/Passenger.css";
import NavBar2 from "../NavBar2";
import Footer from "../Footer";

function ResponsivePage() {
  const componentRef = useRef();
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
              src="https://images.unsplash.com/photo-1635070636690-d887c1a77e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
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
                    {"QRS123422"}
                  </th>
                  <th scope="col">
                    Seat NO. <br />
                    {25}
                  </th>
                  <th scope="col">
                    Route: <br />
                    {"Nairobi - Pusia"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* <th scope="row">1</th> */}
                  <td colspan="2">
                    {" "}
                    Name: <br />
                    {"Nanjala Washington Nanjalaalla"}
                  </td>
                  <td>
                    BUS: <br />
                    {" Mash-Cool Executive"}
                  </td>
                  {/* <td>@mdo</td> */}
                </tr>
                <tr>
                  {/* <th scope="row">2</th> */}
                  <td>
                    FROM: <br />
                    {"Nairobi"}
                  </td>
                  <td>
                    TO: <br />
                    {"Kisumu"}
                  </td>
                  <td>
                    ID: <br />
                    {"40293087"}
                  </td>
                </tr>

                <tr>
                  {/* <th scope="row">2</th> */}
                  <td>
                    Booking Date: <br />
                    {"12/3/2025"}
                  </td>
                  <td>
                    Travel Date <br />
                    {"12/3/2025"}
                  </td>
                  <td>
                    Amount Paid <br />
                    KES
                    {"1,200/="}
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
                    {"072994544"}{" "}
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
