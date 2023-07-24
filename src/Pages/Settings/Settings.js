import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import "./setting.scss";
import { useFormik } from "formik";
import { userSchema } from "../../Components/Schema/FormSchema";
const initialValues = {
  name: "",
  email: "",
  address:"",
  aadhar:"",
  phoneNumber:""
};
function Settings() {
  const[username,setusername]=useState("")
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues,
    validationSchema: userSchema,
    onSubmit: (values,{resetForm }) => {
      setusername(values.name)
      console.log(values)
      resetForm();
      
    },
  });

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar username={username}/>
        <div className="bottom">
          <div className="right">
            <h3>User Form</h3>
            <form onSubmit={handleSubmit}>
              <div className="formInput">
              <label htmlFor="name" className="input-label">
                      Name
              </label>
              <input
                      type="name"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
              </div>
              {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
              <div className="formInput">
              <label htmlFor="email" className="input-label">
                       Email
              </label>
              <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
              </div>
              {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
              <div className="formInput">
              <label htmlFor="phoneNumber" className="input-label">
                       Phone Number
              </label>
              <input
                      type="text"
                      autoComplete="off"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Phone Number"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
              </div>
              {errors.phoneNumber && touched.phoneNumber ? (
                      <p className="form-error">{errors.phoneNumber}</p>
                    ) : null}
              <div className="formInput">
              <label htmlFor="aadhar" className="input-label">
              Aadhar Number
              </label>
              <input
                      type="text"
                      autoComplete="off"
                      name="aadhar"
                      id="aadhar"
                      placeholder="Aadhar Number"
                      value={values.aadhar}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
              </div>
              {errors.aadhar && touched.aadhar ? (
                      <p className="form-error">{errors.aadhar}</p>
                    ) : null}
              <div className="formInput">
              <label htmlFor="address" className="input-label">
                       Address
              </label>
              <input
                      type="text"
                      autoComplete="off"
                      name="address"
                      id="address"
                      placeholder="Address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
              </div>
              {errors.address && touched.address ? (
                      <p className="form-error">{errors.address}</p>
                    ) : null}
              <button type="submit" className="btn-submit">Register</button>
            </form>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
