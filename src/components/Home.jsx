import React from "react";
import styles from "../styles/home.module.scss";

export default function Home() {
  const transactions = [
    {
      id: "",
      status: "pending",
      source: "online payment",
      title: "Home Shopping",
      createdDate: "2021-10-05T14:48:00.000Z",
      type: "",
      account: {
        id: "",
        name: "",
        image: ""
      },
      ammount: {
        currency: "UGX"
      }
    }
  ];
  return (
    <div className={styles.wrapper}>
      <section>
        <h3>Transactions</h3>
      </section>
    </div>
  );
}
