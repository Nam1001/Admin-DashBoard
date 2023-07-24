import * as Yup from 'yup'

export const userSchema=Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    address: Yup.string().min(6).required("Please enter your Address"),
    aadhar:Yup.string().min(12).max(12).required("please enter your Aadhar Number"),
    phoneNumber:Yup.string().min(10).max(10).required('please enter your phone number')

    // confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Password must match"),

})
