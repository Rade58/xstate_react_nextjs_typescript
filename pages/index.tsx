/* eslint react/react-in-jsx-scope: 0 */
/* eslint jsx-a11y/anchor-is-valid: 1 */

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
//

import MachineWithReducer from "../components/MachineWithReducer";

export default function Home() {
  return (
    <>
      <MachineWithReducer />
    </>
  );
}
