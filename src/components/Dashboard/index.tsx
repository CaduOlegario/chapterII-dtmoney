import React from "react";
import { Sumary } from "../Sumary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function DashBoard() {
  return (
    <Container>
      <Sumary />
      <TransactionsTable />
    </Container>
  )
}