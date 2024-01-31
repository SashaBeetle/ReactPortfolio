import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();


  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: '',
    },
    OnSubmit: async (values) => {
      try {
        formik.setSubmitting(true);

        const submitResponse = await submit(values);
        if (submitResponse.type === "success") {
          onOpen({
            title: "Submission Successful",
            description: `Thank you, ${values.firstName}! Your message has been sent successfully.`,
            status: "success",
          });

          formik.resetForm();
        } else {
          onOpen({
            title: "Submission Failed",
            description: `Oops! Something went wrong. Please try again later.`,
            status: "error",
          });
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        formik.setSubmitting(false);
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string(),
      comment: Yup.string()
        .required("Required")
        .min(25, "Must be at least 25 to 250 characters"),
    }),
  });

  useEffect(() => {
    if (response) {
      console.log("API Response:", response);
    }
  }, [response]);



  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input {...formik.getFieldProps('firstName')}
                  id="firstName"
                  name="firstName"
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input {...formik.getFieldProps('email')}
                  id="email"
                  name="email"
                  type="email"
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select  id="type" name="type">
                  <option id='list' value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy session</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea {...formik.getFieldProps('comment')}
                  id="comment"
                  name="comment"
                  height={250}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" isLoading={isLoading} colorScheme="purple"  width="full">
              {isLoading ? "Submitting..." : "Submit"}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};



export default LandingSection;
