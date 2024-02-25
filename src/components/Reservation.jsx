import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [name, setname] = useState("");
  const [collegeName, setcollegeName] = useState("");
  const [email, setEmail] = useState("");
  // const [service, setservice] = useState("");
  // const [time, setTime] = useState("");
  const [age, setage] = useState("Age");
  const [service, setservice] = useState('');
  const [gender, setgender] = useState('');


  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://vengeance-api.vercel.app/api/v1/reservation/send",
        { name, collegeName, service, gender,email, age},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setname("");
      setcollegeName("");
      setage(0);
      setEmail("");
      setservice("")
      setgender("")
      navigate("/success");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <div className="banner_correct">
          <h1 className="bannerh">How it Works:</h1>
          <ol>
            <li>1) Fill the complete details of "Book A Service Form".</li>
            <li>2) We will let you know as soon as we receive the request.</li>
            <li>3) Further communication will be done through Email you provided while booking.</li>
            <li>4) You will be required to submit an email outlining your needs for a specific service.</li>
            <li>5) After reviewing the case, we will inform you of the possibility.</li>
            <li>6) Once conformed, you can send the details of the target person(images,number,information if have any).</li>
            <li>7) After the work completion we will let you know (on Sat-Sun).</li>
          </ol>
    </div>
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>Book A Service</h1>
            <p>No calls allowed.</p>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="Ur Nickname"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="College Name"
                  value={collegeName}
                  onChange={(e) => setcollegeName(e.target.value)}
                />
              </div>
              <div>
              <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

            <select
            value={service}
            onChange={(e) => setservice(e.target.value)}
            required>
          <option value="" disabled>Select Service</option>
            <option value="access log file">Access Log File</option>
            <option value="intercept network">Intercept Network</option>
            <option value="custom virus">Custom Virus</option>
            <option value="brute force website">Brute Force Website</option>
            <option value="bypass network">Byoass Network</option>
            <option value="social exploitation">Social Exploitation</option>
            <option value="social exploitation">System Exploitation</option>
            <option value="get information">Get Information</option>
          </select>
              </div>
              <div>
              <input
                  type="number"
                  placeholder="Your Age"
                  value={age}
                  onChange={(e) => setage(e.target.value)}
                />
              <select
            value={gender}
            onChange={(e) => setgender(e.target.value)}
            required>
          <option value="" disabled>Select Your Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

              </div>
              <button type="submit" onClick={handleReservation}>
                BOOK NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
