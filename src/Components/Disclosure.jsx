import React, { useEffect } from "react";
import "./Disclosure.css";

const commissions = [
  { sl: 1, type: "Debt", method: "Trail", range: "0.25% to 1.0%", paid: "Portfolio Expenses charged by the AMC" },
  { sl: 2, type: "Equity", method: "Trail", range: "0.5% to 1.5", paid: "Portfolio Expenses charged by the AMC" },
  { sl: 3, type: "Hybrid Funds", method: "Trail", range: "0.5% to 1.5", paid: "Portfolio Expenses charged by the AMC" },
  { sl: 4, type: "Liquid Funds", method: "Trail", range: ".05% to .20", paid: "Portfolio Expenses charged by the AMC" },
];

const CommissionDisclosure = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    })

    
   return (
  <div className="commission-wrapper">
   <h1 id="ids" style={{ fontWeight: 900 }}>Commission Disclosure</h1>

    <p className="description">
      Credence Investments & Technology Services LLP is registered with AMFI as a mutual fund distributor with <b>ARN – 314740</b>.
      It is engaged with various AMCs for providing services related to distribution of Mutual Funds & earns commission from this activity,
      which is already embedded in the product & investors need not pay any fee or commission separately.
    </p>
    <div className="table-responsive">
    <table className="commission-table">
      <thead>
        <tr>
          <th>SL No</th>
          <th>Mutual Fund Type</th>
          <th>Commission Method</th>
          <th>Rate Range</th>
          <th>Paid From</th>
        </tr>
      </thead>
      <tbody>
        {commissions.map(row => (
          <tr key={row.sl}>
            <td>{row.sl}</td>
            <td>{row.type}</td>
            <td>{row.method}</td>
            <td>{row.range}</td>
            <td>{row.paid}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>

    <div className="notes">
      <p>
        Details of Scheme level commission on Mutual funds are available with the Relationship Managers and would be produced on demand.
        Portfolio Expenses are capped at certain level from 1.5% to 2.75% by SEBI and charged as per the Asset size and on annualized calculation method.<br /><br />
        The Firm shall provide distribution services to its non-advisory clients and implementation/execution services to its advisory clients.
        The execution services shall be provided only through direct schemes/products in the market. However, the Firm will not receive any consideration for the execution services.<br /><br />
        The distribution and implementation/execution services shall be carried on through a separately identified department/division and shall be at arm’s length with all the advisory clients.
        The compliance requirements for client level segregation will be followed by the Firm at all times.<br /><br />
        In case you need any clarification or wish to understand more on our fee structure or commissions, do feel free to contact us from Monday to Saturday (working time 10 am to 5 pm IST)
      </p>
    </div>
  </div>
)};

export default CommissionDisclosure;
