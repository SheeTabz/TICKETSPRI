import React, {useRef} from 'react'
import { useReactToPrint } from "react-to-print";
function BookingCard() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "receipt",
    onAfterprint: () => alert("print success"),
  });

  return (
    <div ref={componentRef} >
  
  <div className="text-center py-6">
          <p className="text-xl font-medium text-gray-900">
            CONGRATULATIONS On Your Successful <strong>Purchase !!!</strong>
          </p>
        </div>
        
  <div class="cont">
  <div class="item shadow-xl">
    <div class="item-right">
      <h2 class="num">23</h2>
      <p class="day">Seat No</p>
      <span class="up-border"></span>
      <span class="down-border"></span>
    </div> 
    {/* <!-- end item-right --> */}
    <div class="item-left">
      <p class="event">Ticket</p>
      <h2 class="title">John Snow</h2>
      
      <div class="sce">
       
        <p>Gender: male</p>
      </div>
      <div class="fix"></div>
      <div class="loc">
      
        <p>Phone no:  0789076789</p>
        <p>Route:  Nairobi - Mombasa</p>

      </div>
      <div class="fix"></div>
      <button class="booked" onClick={handlePrint}>Print</button>
    </div> 
  </div> 

</div>
    </div>
  )
}

export default BookingCard