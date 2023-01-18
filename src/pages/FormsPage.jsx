
import { useEffect, useState } from "react";
import NavBar2 from "../components/NavBar2";
import "./pass.css";

function FormsPage() {
  // const navigate = useNavigate("");
  const [firstname, setFirstName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  const [lastname, setLastName] = useState("");

  const [phone, setPhone] = useState("");
  const [identity, setIdentity] = useState("");
  const [payeename, setPayeeName] = useState("");
  const [payeephone, setPayeePhone] = useState("");
  const [mail, setMail] = useState("");

  const [selectedseats, setSelectedseats] = useState([1, 3]);
  const [currentForm, setCurrentForm] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState([]);

  //async function handleSubmit(event) {
  // event.preventDefault();
  //   if (submitting) {
  //     setSubmitting(false);

  //     // move to the next form
  //     setCurrentForm(currentForm + 1);
  //   }
  //   // gather data from form
  //   const formData = new FormData(event.target);

  //   console.log(formData);
  //   // send data to server
  //   // try {
  //   //   const response = await fetch("/submit", {
  //   //     method: "POST",
  //   //     body: formData
  //   //   });
  //   //   const data = await response.json();
  //   //   console.log("Form submitted successfully: ", data);
  //   //   setSubmitting(false);
  //   //   setCurrentForm(currentForm + 1);
  //   // } catch (error) {
  //   //   console.error("Error submitting form: ", error);
  //   // }
  // }

  // handle submit
  // fetch("/selectedseats")
  //   .then((response) => response.json())
  //   .then((data) => setSelectedseats(data));

  useEffect(() => {
    if (submitting) {
      handleSubmit();
    }
  }, [submitting, currentForm]);

  async function handleSubmit() {
    // gather data for the current form
    const currentFormData = formData[currentForm];
    console.log("Data submitted: ",currentFormData);


    // send data to server
    // try {
    //   const response = await fetch("/submit", {
    //     method: "POST",
    //     body: JSON.stringify(currentFormData),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   const data = await response.json();
    //   console.log("Form submitted successfully: ", data);
    //   setSubmitting(false);
    //   setCurrentForm(currentForm + 1);
    // } catch (error) {
    //   console.error("Error submitting form: ", error);
    // }
  }

const handleChange = (event, index) => {
    if(!formData[index]) setFormData(prevData => [...prevData, {}]);
    const { name, value } = event.target;
    setFormData(prevData => {
      const newData = [...prevData];
      newData[index] = { ...newData[index], [name]: value };
      return newData;
    });
  };
  // let data = {
  //   firstname,
  //   gender,
  //   age,
  //   lastname,
  //   phone,
  //   identity,
  //   payeename,
  //   payeephone,
  //   mail,
  // };
  //  function handleSubmit(e) {
  //e.preventDefault();
  //   window.location.href = "src/components/Passengers/Payment.jsx";
  //   // navigate("");
  //   fetch("/booking", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   }).then();
  //}


  return (
    <>
      <NavBar2 />
      {/* this is the overall parent div */}
      <div className="flex justify-around  ">
        {/* the right row */}

        <div className=" flex   w-1/2 flex-col">

          <label className="text-center ">Enter Passenger Details</label>
          {/* form template */}

          {selectedseats &&
            selectedseats.map((seatNo, index) => (
              <form
                key={index}
                disabled={index !== currentForm}
                onSubmit={() => setSubmitting(true)}
                class="w-auto md:xl:w-1/2 p-4 shadow-xl  "
              >
                {/* 1st row */}
                <label>Seat Number: {seatNo}</label>
                <div class="flex flex-wrap -mx-3 mb-6 space-x-2  mb-4 ">
                  <div class="w-auto md:xl:w-1/3 mb-6 ">
                    <label
                      class="block uppercase tracking-wider text-blue-500 text-xs md:text-sm font-regular mb-2 "
                      for="grid-first-name"
                    >
                      Full Name
                    </label>
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none border-b border-teal-500 "
                      type="text"
                      placeholder="Jane Doe"
                      value={formData[index] ? formData[index].fullName : ""}
                      onChange={(e) => handleChange(e, index)}
                    ></input>
                  </div>
                  <div class="w-auto md:xl:w-1/3 mb-6 ">
                    <label class="block uppercase tracking-wider text-blue-500 text-xs md:text-sm font-regular mb-2">
                      Seat No:
                    </label>
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none border-b border-teal-500 "
                      id="grid-first-name"
                      type="text"
                      // onChange={(e) => setSeatNo(e.target.value)}
                      value={formData[index] ? formData[index].seat : seatNo}
                      onChange={(e) => handleChange(e, index)}
                    ></input>
                  </div>
                  <div class="w-auto md:xl:w-1/3 mb-6 ">
                    <label
                      class="block uppercase tracking-wider text-blue-500 text-xs md:text-sm font-regular mb-2"
                      for="grid-first-name"
                    >
                      Age
                    </label>
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none border-b border-teal-500 "
                      value={formData[index] ? formData[index].age : ""}
                      onChange={(e) => handleChange(e, index)}
                      required
                      maxLength={2}
                      min="7"
                      max="92"
                      type="number"
                    ></input>
                  </div>
                </div>
                {/* 2nd row */}
                <div class="flex flex-wrap -mx-3 mb-6 space-x-2  mb-4">
                  <div class="w-auto md:xl:w-1/3 mb-6 ">
                    <label
                      class="block uppercase tracking-wider text-blue-500 text-xs md:text-sm font-regular mb-2"
                      for="grid-first-name"
                    >
                      Gender
                    </label>
                    <select
                      class="appearance-none bg-transparent border-none w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none border-b border-teal-500 "
                      id="grid-first-name"
                      value={formData[index] ? formData[index].gender : ""}
                      onChange={(e) => handleChange(e, index)}
                      required
                    >
                      <option value="nil"></option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Not Say">Not Say</option>
                    </select>
                  </div>
                  <div class="w-auto md:xl:w-1/3 mb-6 ">
                    <label
                      class="block uppercase tracking-wider text-blue-500 text-xs md:text-sm font-regular mb-2"
                      for="grid-first-name"
                    >
                      ID No.
                    </label>
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none border-b border-teal-500 "
                      id="grid-first-name"
                      value={formData[index] ? formData[index].id : ""}
                      onChange={(e) => handleChange(e, index)}
                      type="number"
                      maxLength={9}
                    ></input>
                  </div>
                  <div class="w-auto md:xl:w-1/3 mb-6 ">
                    <label
                      class="block uppercase tracking-wider text-blue-500 text-xs md:text-sm font-regular mb-2"
                      for="grid-first-name"
                    >
                      Mobile number
                    </label>
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none border-b border-teal-500 "
                      value={
                        formData[index] ? formData[index].mobileNumber : ""
                      }
                      onChange={(e) => handleChange(e, index)}
                      maxLength={10}
                      minLength={10}
                      required
                      placeholder="07XXX"
                    ></input>
                  </div>
                </div>
                {/* 3rd row
                <div class="flex flex-wrap -mx-3 mb-6 space-x-2  mb-4">
                  <div class="w-auto md:xl:w-1/3 mb-6  ">
                    <label
                      class="block uppercase tracking-wider text-blue-500 text-xs md:text-sm font-regular mb-2"
                      for="grid-first-name"
                    >
                      ID type
                    </label>
                    <select
                      class="appearance-none bg-transparent border-none w-full text-gray-700  py-1 px-7 leading-tight focus:outline-none border-b border-teal-500 "
                      id="grid-first-name"
                    >
                      <option value="nil"></option>

                      <option value="Passport">Passport</option>
                      <option value="ID">ID</option>
                    </select>
                  </div>
                 
                  <div class="w-auto mb-6 ">
                    <label
                      class="block uppercase tracking-wider text-blue-500 text-xs md:text-sm font-regular mb-2"
                      for="grid-first-name"
                    >
                      Usual Redince
                    </label>
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none border-b border-teal-500 "
                      id="grid-first-name"
                    ></input>
                  </div>
                </div> */}
                <button
                  type="button"
                  class="w-full mt-2 inline-block px-6 py-1 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            ))}

          {/* person paying from */}
          <div className="form-pannels">
            <p>Details of Person Paying</p>
            <p>Your will get Mpesa Notification on Below Mobile Number</p>
            <div className="md:w-2/3 pr-4 pl-4">
              <div className="input-group-2">
                <label htmlFor="">Payee Name</label>
                <input
                  type="text"
                  //      onChange={(e) => setPayeeName(e.target.value)}
                  //    value={payeename}
                  required
                  id="payee_name"
                  className="input_field w-1/3 px-4 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400"
                />
              </div>
            </div>
            <div className="md:w-2/3 pr-4 pl-4">
              <div className="input-group-2">
                <label htmlFor="">Mobile No</label>
                <input
                  type="number"
                  id="payee_phone"
                  //   onChange={(e) => setPayeePhone(e.target.value)}
                  //   value={payeephone}
                  maxLength={10}
                  minLength={10}
                  required
                  placeholder="07XXX"
                  className="input_field w-1/3 px-4 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400"
                />
              </div>
            </div>
            <div className="md:w-2/3 pr-4 pl-4">
              <div className="input-group-2">
                <label htmlFor="">Email</label>
                <input
                  type="mail"
                  id="mail_name"
                  //  onChange={(e) => setMail(e.target.value)}
                  //  value={mail}
                  required
                  placeholder="123@abc.com"
                  className="input_field w-1/3 px-4 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400"
                />
              </div>
            </div>
          </div>
          {/* payement options form */}
          <div className="form-pannels">
            <p>Select Payment Options</p>
            <p>
              You will be redirected to related website to do this transaction
            </p>
            <p>
              <span>M-Pesa</span>
            </p>
            <p>
              By clicking on "Make Payment" below, I agree to the Terms and
              Conditions
            </p>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              PROCEED TO BOOK
            </button>
          </div>
        </div>

        {/* left row */}
        <div className="w-48  border-solid border-2 border-sky-500">
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <thead class="bg-white border-b">
                      <tr>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Seat
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Age
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Gender
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Fare
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          1
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

                          firstname

                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Otto
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @mdo
                        </td>
                      </tr>
                      <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          2
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Jacob
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Thornton
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @fat
                        </td>
                      </tr>
                      <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          3
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Larry
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Wild
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @twitter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormsPage;
