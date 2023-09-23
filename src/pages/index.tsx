import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import { Button } from "../components/ui/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/ui/card";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1 className="">Hello world!</h1>
    </main>
  );
};

export default Home;
