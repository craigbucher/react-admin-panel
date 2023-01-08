import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery"; // so can have responsive layout
import Header from "../../components/Header";

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "", // easier to establish as empty string and change when needed
    address1: "",
    address2: "",
  };

// copied from stack overflow:
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// yup provides many pre-made schema validators
const checkoutSchema = yup.object().shape({
// displays 'required' if left empty
firstName: yup.string().required("required"),
lastName: yup.string().required("required"),
// .email = yup email validator
email: yup.string().email("invalid email").required("required"),
contact: yup
  .string()
//   yup doesn't have a native phone # validator
  .matches(phoneRegExp, "Phone number is not valid")
  .required("required"),
address1: yup.string().required("required"),
address2: yup.string().required("required"),
});

const Form = () => {

    // if screen size < 600px, triggers MUI's 'useMediaQuery'
    // allows use of Media Queries for responsive CSS
    const isNonMobile = useMediaQuery("(min-width:600px)");

    // in this tutorial, we're not going to do anything with form
    // values once they're submitted
    const handleFormSubmit = (values) => {
        console.log(values);
        alert(values.firstName + ' ' + values.lastName)
      };

    return(
        <Box m='20px'>
            <Header title="CREATE USER" subtitle="Create a New User Profile" />
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {/* all of these items are Formik operators */}
                {/* arrow function allows us to use these inside form component */}
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit, }) => (
                    <form onSubmit={handleSubmit}>
                        <Box display="grid" // using CSS grid
                            gap="30px"      // space between each item
                            height='100%'   // otherwise throws an error in console if height not specified
                            // split grid into 4 sections
                            // each section has min size = 0; max size = 1 fraction
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            // target specific grid:
                            // if not mobile, don't do anything
                            // if *is* mobile, use entire line (4 of 4)
                            sx={{"& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"         // type of field
                                label="First Name"  // displayed as field title
                                onBlur={handleBlur} // function run when focus changes
                                onChange={handleChange} // function run when field input changes
                                value={values.firstName}    // name of value to change
                                name="firstName"    // name of field
                                // trigger error if field has received focus
                                // and error condition is met
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Contact Number"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                name="contact"
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Address 1"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address1}
                                name="address1"
                                error={!!touched.address1 && !!errors.address1}
                                helperText={touched.address1 && errors.address1}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Address 2"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address2}
                                name="address2"
                                error={!!touched.address2 && !!errors.address2}
                                helperText={touched.address2 && errors.address2}
                                sx={{ gridColumn: "span 4" }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                            Create New User
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
}

export default Form;