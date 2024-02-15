import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'; // Import Box from Material-UI
import { useForm } from 'react-hook-form'; // Validation library
import Footer from '../components/Footer';
import './Delivery.css'
import { AddItemContext } from '../Context/ContextShare';

function Delivery() {
    const { handleSubmit, formState: { errors } } = useForm(); // Get form controls and error state
    const [submitted, setSubmitted] = useState(false); // Track form submission
    const [proceedToPayStatus, setProceedToPayStatus] = useState(false);
    const [grandTotal, setGrandTotal] = useState(0);
    const { emptyCart } = useContext(AddItemContext);

    const proceedtoPay = () => {
        setProceedToPayStatus(true)
        const total = sessionStorage.getItem("Total Amount")
        setGrandTotal(total)
    }

    const [deliveryDetails, setDeliveryDetails] = useState({
        apartment: "",
        place: "",
        pincode: ""
    });

    const changeHandler = (e) => {
        setDeliveryDetails({ ...deliveryDetails, [e.target.name]: e.target.value })
    }

    const onSubmit = (data) => {
        setSubmitted(true); // Indicate submission after data validation
        console.log('Submitted address:', data);
        console.log(deliveryDetails);
    };

    const handleCancel = () => {
        setDeliveryDetails({
            apartment: "",
            place: "",
            pincode: ""
        });
        console.log('Cancel button clicked');
    }

    const MakePayment = (e) => {
        e.preventDefault();
        var options = {
            key: "rzp_test_Jt9sBXsKlyC9ZD",
            key_secret: "ITT14FJx8nG0t8rq87KWbS0H",
            amount: parseInt(grandTotal) * 100,
            currency: "INR",
            name: "GameMart",
            description: "E-com",
            handler: function (response) {
                alert(response.razorpay_payment_id);
                
                emptyCart();
                
                
            },
            prefill: {
                name: "Prajith Prakash",
                email: "prajith@gmail.com",
                contact: "7012444123"
            },
            notes: {
                address: "Razorpay Corporate office"
            },
            theme: {
                color: "#2E8BC0"
            }
        };
        var pay = new window.Razorpay(options);
        pay.open();
        
        
    }

    return (
        <>
            <Box display="flex" alignItems="center">
                <img className='m-5' src="https://assets-global.website-files.com/62a991fe7443d71b2ed1afb0/63a99832ddf2277ef743f5e4_Last-Mile-Delivery.webp" alt="Image" style={{ width: 700, height: 500 }} />
                <div>
                    {!proceedToPayStatus &&
                        <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 400, width: '100%' }}>

                            <TextField name='apartment' value={deliveryDetails.apartment} onChange={changeHandler}
                                label="Apartment"
                                error={Boolean(errors.apartment)}
                                helperText={errors.apartment?.message}
                                fullWidth
                                className='mt-4'
                            />
                            <TextField name='place' value={deliveryDetails.place} onChange={changeHandler}
                                label="Place"
                                error={Boolean(errors.place)}
                                helperText={errors.place?.message}
                                fullWidth
                                className='mt-4'
                            />
                            <TextField name='pincode' value={deliveryDetails.pincode} onChange={changeHandler}
                                label="Pincode"
                                error={Boolean(errors.pincode)}
                                helperText={errors.pincode?.message}
                                fullWidth
                                className='mt-4'
                            />
                            <Box mt={2} display="flex" justifyContent="space-between" width="100%">
                                <Button type="submit" onClick={proceedtoPay} variant="contained" disabled={submitted}>
                                    Submit Address
                                </Button>
                                <Button variant="outlined" onClick={handleCancel}>
                                    Cancel
                                </Button>
                            </Box>
                        </form>}
                </div>

                {/* Confirm the Delivery Address section */}

                {proceedToPayStatus &&
                    <Box className="container-box ">
                        <Box className="delivery-address">
                            <h4 className='mb-3'>Confirm the Delivery Address:</h4>

                            <div>Apartment:  <strong>{deliveryDetails.apartment}</strong> </div>
                            <div>Place:  <strong>{deliveryDetails.place}</strong></div>
                            <div>Pincode:  <strong>{deliveryDetails.pincode}</strong></div>
                        </Box>
                        <Box className="total-amount">
                            <strong>Total Amount:</strong>
                            <div>Rs. {grandTotal}</div>
                        </Box>
                        <Box className="payment-buttons" mt={2} display="flex" justifyContent="space-between" width="100%">
                            <Button onClick={MakePayment} className="make-payment me-4" type="submit" variant="contained" disabled={submitted}>
                                Make the payment
                            </Button>
                            <Button className="cancel" variant="outlined" onClick={handleCancel}>
                                Cancel
                            </Button>
                        </Box>
                    </Box>
                }
            </Box>

            <Footer navigation />
        </>
    );
}

export default Delivery;
