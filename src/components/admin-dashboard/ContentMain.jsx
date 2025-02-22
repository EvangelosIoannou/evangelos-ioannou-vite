import "./ContentMain.css";
import Cards from "./Cards";
import Transactions from "./Transactions";
import Report from "./Report";
import Budget from "./Budget";
import Subscriptions from "./Subscriptions";
import Savings from "./Savings";
import Loans from "./Loans";
import Financial from "./Financial";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Cards />
        <Transactions />
        <Report />
      </div>
      <div className="content-grid-two">
        <Budget />
        <div className="grid-two-item">
          <div className="subgrid-two">
            <Subscriptions />
            <Savings />
          </div>
        </div>

        <div className="grid-two-item">
          <div className="subgrid-two">
            <Loans />
            <Financial />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMain;
