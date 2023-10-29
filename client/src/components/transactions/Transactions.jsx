import React from "react";
import TransactionEach from './TransactionEach'

const Transactions = ({ transactions }) => {
  return (
    <>
      <div className="mb-3 border rounded-4 p-3">
        <h3 className="mb-3">
          Transactions<i className="fa fa-info-circle" aria-hidden="true"></i>
        </h3>

        {/* Buttons to filter transactions by type */}
        <button className="btn btn-outline-secondary rounded-5 px-4 me-3">
          All
        </button>
        <button className="btn btn-outline-secondary rounded-5 px-4 me-3">
          Credits
        </button>
        <button className="btn btn-outline-secondary rounded-5 px-4">
          Debits
        </button>

        <div>
          {transactions ? (
            // Map through the transactions array and display each transaction using the TransactionEach component
            transactions.map((item, index) => (
              <TransactionEach
                type={item.type}
                description={item.description}
                accountNo={item.accountNo}
                date={item.date}
                amount={item.amount}
                key={index} // It's a good practice to provide a unique key when mapping through elements
              />
            ))
          ) : (
            <p>You do not have any transactions yet</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Transactions;
