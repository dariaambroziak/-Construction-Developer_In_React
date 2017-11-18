import React from 'react';

export class Finance extends React.Component {
   constructor(props) {
       super(props)

       this.state = {
       }
   }

      render() {
          return (<div className="financeByCredit">
                    <h2 className="offerFinancing"><b>FINANCING OFFER</b></h2>
                    <div className="credit">
                        <h3>Take advantage of a convenient loan for a new apartment.</h3>
                        <p>With Finamax Mortgage Expert's free help you get the best financing deal,
                            <strong> plus real estate valuation or insurance you will get FREE!</strong></p>
                    </div>
                    <div className="creditList">
                      <ul>
                        <li className="col-sm-12 col-md-6 col-lg-3 creditLi"><h4>Preparation</h4>
                          <ul>
                            <li>check your ability before visiting the bank</li>
                            <li>preparation of the list of documents</li>
                            <li>select the optimal offer from among 20 banks</li>
                          </ul>
                        </li>
                        <li className="col-sm-12 col-md-6 col-lg-3 creditLi"><h4>Loan application</h4>
                          <ul>
                            <li>help in completing documents</li>
                            <li>preparation of the cost estimate</li>
                            <li>provide documentation of real estate</li>
                          </ul>
                        </li>
                        <li className="col-sm-12 col-md-6 col-lg-3 creditLi"><h4>Process in the bank</h4>
                          <ul>
                            <li>negotiation of offers</li>
                            <li>keep in touch with the analysis department</li>
                            <li>favorable property valuation</li>
                          </ul>
                        </li>
                        <li className="col-sm-12 col-md-6 col-lg-3 creditLi"><h4>Credit Agreement</h4>
                          <ul>
                            <li>presentation of the contract before the visit to the bank</li>
                            <li>verification of subscriptions in the contract</li>
                            <li>presence of the adviser when signing the contract</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="finaMax">
                      <h5><strong>FINAMAX</strong> provides financing to our customers.</h5>
                    </div>
            </div>);
   }
 }

export default Finance;
