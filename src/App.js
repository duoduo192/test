import "./App.css";
import React from 'react';
import { Table } from "antd";
import { CopyOutlined, ControlOutlined, SwapOutlined, RetweetOutlined } from '@ant-design/icons'
import { PureComponent } from "react";
import { Pie } from "@ant-design/plots";


const dataSource = [
  {
    key: "1",
    name: "Vanguard S&P 500 ETF",
    fundId: "Voo53",
    price: "144.06",
    expense: "0.00%",
    assetClass: "Large Growth",
    paycheck: "25%",
    balance1: "22.74%",
    balance2: "14,112.79"
  }, {
    key: "2",
    name: "Vanguard S&P 500 ETF",
    fundId: "Voo53",
    price: "144.06",
    expense: "0.00%",
    assetClass: "Large Growth",
    paycheck: "25%",
    balance1: "22.74%",
    balance2: "14,112.79"
  }, {
    key: "3",
    name: "Vanguard S&P 500 ETF",
    fundId: "Voo53",
    price: "144.06",
    expense: "0.00%",
    assetClass: "Large Growth",
    paycheck: "25%",
    balance1: "22.74%",
    balance2: "14,112.79"
  }, {
    key: "4",
    name: "Vanguard S&P 500 ETF",
    fundId: "Voo53",
    price: "144.06",
    expense: "0.00%",
    assetClass: "Large Growth",
    paycheck: "25%",
    balance1: "22.74%",
    balance2: "14,112.79"
  }];

const columns = [
  {
    title: "Investment Name",
    dataIndex: "name",
    align: "center",
    render: text => <a className="text-blue-300">{text}</a>
  }, {
    title: "Fund ID",
    dataIndex: "fundId",
    align: "center"
  }, {
    title: "Price",
    dataIndex: "price",
    align: "right",
    render: (text) => text && "$" + text
  }, {
    title: "Expense",
    dataIndex: "expense",
    align: "right"
  }, {
    title: "Asset Class",
    dataIndex: "assetClass",
    align: "center"
  }, {
    title: "From My Paycheck",
    dataIndex: "paycheck",
    align: "right"
  }, {
    title: "Balance(%)",
    dataIndex: "balance1",
    align: "right"
  }, {
    title: "Balance($)",
    dataIndex: "balance2",
    align: "right"

  }
];

const data = [
  {
    type: "分类一",
    value: 25,
  },
  {
    type: "分类二",
    value: 25,
  },
  {
    type: "分类三",
    value: 25,
  },
  {
    type: "分类四",
    value: 25,
  }
];

const config = {
  appendPadding: 10,
  data,
  angleField: "value",
  colorField: "type",
  color: ["#04244d", "#4480b6", "#59669b", "#8dbae3"],
  radius: 1,
  innerRadius: 0.75,
  label: null,
  legend: false,
  interactions: [
    {
      type: "element-selected",
    },
    {
      type: "element-active",
    },
  ],
  pieStyle: { lineWidth: 0 },
  statistic: {
    title: false,
    content: {
      style: {
        whiteSpace: "pre-wrap",
        overflow: "hidden",
        fontSize: 14,
        fontWeight: 300
      },
      customHtml: (container, view, datum, data) => {
        return "<span>$64,965<br />Vested Balance</span>";
      },
    },
  },
};
class App extends PureComponent {

  transformIcon = (icon) => {
    switch (icon) {
      case 'CopyOutlined': return <CopyOutlined className="text-4xl" />;
      case 'ControlOutlined': return <ControlOutlined className="text-4xl" />;
      case 'RetweetOutlined': return <RetweetOutlined className="text-4xl" />;
      case 'SwapOutlined': return <SwapOutlined className="text-4xl" />;
      default: return null;
    }
  }

  renderCard = (title, content, icon) => {
    return <div className="border-solid border-gray-100 rounded-md border flex flex-col overflow-auto w-full h-full">
      <h1 className="text-base px-2 border-b leading-8"> {title}Change Elections</h1>
      <div className="flex-grow">
        <div className="grid grid-flow-col grid-cols-4 items-center h-full" >
          {this.transformIcon(icon)}
          <div className="col-span-3">
            <span>{content}</span>
          </div>
        </div>
      </div>
    </div>
  }

  render () {

    return (
      <div className="w-full p-4 h-full">

        <div className="grid gap-4 grid-cols-3 h-1/2">
          <div className="w-full h-full">
            <div className="border-solid border-gray-100 rounded-md border flex flex-col overflow-auto w-full h-full relative">
              <h1 className="text-base px-2 border-b leading-loose">Account Balance</h1>
              <div className="flex-grow">
                <p className="text-center text-2xl font-bold mt-6">
                  $62,069
                  <span className="text-sm">.07</span></p>
                <Pie {...config} width={300} height={180} />
              </div>
              <div className="text-center leading-loose bg-blue-200 text-white absolute bottom-0 w-full">Manage Investments</div>
            </div>
          </div>
         

          <div className="w-full h-full">
            {/* 上半部分 */}
            <div className="h-1/2 pb-2">
              {this.renderCard("Change Elections", "The funds you put the money from your pakcheck into.", "CopyOutlined")}
            </div>

            {/* 下半部分 */}
            <div className="h-1/2 pt-2">
              {this.renderCard("Rebalance", "Make the balance match your existing.", "ControlOutlined")}
            </div>
          </div>

          <div className="w-full h-full">
            {/* 上半部分 */}
            <div className="h-1/2 pb-2">
              {this.renderCard("Move Money", "Transfer the money in your account between the funds in your plan.", "SwapOutlined")}
            </div>
            {/* 下半部分 */}
            <div className="h-1/2 pt-2">
              {this.renderCard("Change Contributions", "Change how much money you ut in your account from your paycheck.", "RetweetOutlined")}
            </div>
          </div>
        </div>
        <div className="border-solid border-gray-100 rounded-md border my-4">
          <h1 className="text-base px-2 border-b leading-loose">My Portfolio</h1>

          <Table
            dataSource={dataSource}
            align="center"
            size={"small"}
            columns={columns}
            rowKey={"key"}
            rowClassName={(record, index) => {
              return index % 2 === 1 ? "bg-gray-50" : null
            }}
            className={"my-4"}
            pagination={false}
          />

          <p className="text-sm text-center text-blue-300"><a>View More</a></p>

        </div>

      </div>
    );
  }

}


export default App;
