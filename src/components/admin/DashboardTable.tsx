import { Column } from "react-table";
import TableHOC from "./TableHOC";
import { useEffect, useState } from "react";

interface DataType {
  _id: string;
  quantity: number;
  discount: number;
  amount: number;
  status: string;
}

const columns: Column<DataType>[] = [
  {
    Header: "Id",
    accessor: "_id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

const DashboardTable = ({ data: initialData = [] }: { data: DataType[] }) => {
  const [data] = useState(initialData);

  useEffect(() => {
    // Handle data updates or other side effects here
    // For example, you could fetch new data or update the table state
  }, [data]);

  return TableHOC<DataType>(
    columns,
    data,
    "transaction-box",
    "Top Transaction"
  )();
};

export default DashboardTable;
