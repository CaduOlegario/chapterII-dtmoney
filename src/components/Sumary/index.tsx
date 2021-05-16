import { Container } from "./styles";

import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import React, { useContext } from "react";
import { TransactionsContext } from './../../TransactionsContext';

export function Sumary() {

  const {transactions} = useContext(TransactionsContext)
  console.log(transactions)



  const sumary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <Container>
      {/* <TransactionsContext.Consumer>
        {(data) => {
          console.log(data);

          return <p>Ok</p>
        }}
      </TransactionsContext.Consumer> */}


      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(sumary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
        -{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(sumary.withdraws)}
        </strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(sumary.total)}
        </strong>
      </div>
    </Container>
  )
}