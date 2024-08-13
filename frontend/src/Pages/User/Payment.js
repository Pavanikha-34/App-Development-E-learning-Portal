import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { jsPDF } from "jspdf";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.css";
import "../../Assets/CSS/Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { coursePrice } = location.state || {};

  const [cardholderName, setCardholderName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Debit Card");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    script.onload = () => {
        console.log("Razorpay script loaded successfully.");
    };

    script.onerror = () => {
        console.error("Failed to load Razorpay script.");
    };

    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    };
  }, []);

  const validateFields = () => {
    let formErrors = {};

    if (!cardholderName.trim()) {
      formErrors.cardholderName = "Cardholder's Name is required";
    }
    if (!email.trim()) {
      formErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email Address is invalid";
    }
    if (!phoneNumber.trim()) {
      formErrors.phoneNumber = "Phone Number is required";
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      formErrors.phoneNumber = "Phone Number is invalid";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handlePaymentSuccess = (response) => {
    alert("Payment successful!");
    savePaymentToBackend(response.razorpay_payment_id);
    generatePDF(response.razorpay_payment_id);
    navigate(`/course`, { state: { enrolled: true } });
  };

  const savePaymentToBackend = async (paymentId) => {
    const paymentData = {
        cardholderName,
        phoneNumber,
        email,
        coursePrice,
        paymentMethod,
        paymentId
    };

    try {
        await axios.post("http://localhost:8080/payments/add", paymentData); // Ensure the URL is correct
        console.log("Payment saved successfully.");
    } catch (error) {
        console.error("Error saving payment:", error);
    }
  };

  const handlePayment = () => {
    if (!validateFields()) {
      return;
    }
    
    const amount = coursePrice || 4999;

    if (typeof window.Razorpay === "undefined") {
        alert("Razorpay SDK failed to load. Please try again later.");
        return;
    }

    const options = {
        key: "rzp_test_t0DKFhP0fFX10m", // Replace with your Razorpay API key
        amount: amount * 100, // Amount in paise
        currency: "INR",
        name: "SCHOLAR",
        description: "Course Enrollment Fee",
        handler: handlePaymentSuccess,
        prefill: {
            name: cardholderName,
            email: email,
            contact: phoneNumber,
        },
        theme: {
            color: "#3399cc",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const generatePDF = (paymentId) => {
    const doc = new jsPDF();
    doc.text("Payment Receipt", 20, 20);
    doc.text(`Payment ID: ${paymentId}`, 20, 30);
    doc.text(`Course Price: ₹${coursePrice || 4999}`, 20, 40);
    doc.text(`Payment Method: ${paymentMethod}`, 20, 50);
    doc.text(`Cardholder's Name: ${cardholderName}`, 20, 60);
    doc.text(`Email: ${email}`, 20, 70);
    doc.save("receipt.pdf");
  };

  return (
    <div className="payment-container">
      <div className="progress-bar">
        <div className="step completed">1</div>
        <div className="step completed">2</div>
        <div className="step completed">3</div>
        <div className="step completed">4</div>
        <div className="step active">5</div>
        <div className="step">6</div>
        <div className="step">7</div>
      </div>
      <h2>Payment Details</h2>
      <div className="payment-form">
        <div className="form-group">
          <label>Cardholder's Name</label>
          <input
            type="text"
            className="form-control"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
          />
          {errors.cardholderName && (
            <span className="error-message">{errors.cardholderName}</span>
          )}
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {errors.phoneNumber && (
            <span className="error-message">{errors.phoneNumber}</span>
          )}
        </div>
        <button type="button" className="pay-button" onClick={handlePayment}>
          Pay ₹{coursePrice || 4999.0}
        </button>
      </div>
      <div className="payment-summary">
        <h4>Payment Method</h4>
        <p>Course Price: ₹{coursePrice || 4999.0}</p>
      </div>
    </div>
  );
};

export default Payment;
