import Head from "next/head";
import { Heading, Link } from "@chakra-ui/core";
import { Formik, Form } from "formik";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <h1>HELLO FROM HOME</h1>{" "}
    </>
  );
}
