import React, { useState, useEffect } from "react";
import { fetchData } from "../apicall";
import List from "./List";
function Customer() {
  const [customerData, setCustomerData] = useState([]);
  const [limitSize, setLimitSize] = useState(5);

  const onLoadMore = () => {
    setLimitSize(limitSize + 5);
  };
  useEffect(() => {
    fetchData().then((data) => {
      setCustomerData(data.customers);
    });
  }, []);
  return (
    <div className='bg-light m-4'>
        <h5>Customers</h5>
      <table className="table p-2">
        <thead className="thead-light">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Created</th>
            <th>Orders</th>
          </tr>
        </thead>
        <tbody>
          {customerData.length > 0
            ? customerData.slice(0, limitSize).map((data) => {
                return (
                  <List
                    key={data.id}
                    id={data.id}
                    firstName={data.firstName}
                    lastName={data.lastName}
                    email={data.email}
                    created={data.created}
                    orders={data.orders}
                  ></List>
                );
              })
            : `Loading...`}
        </tbody>
      </table>
      <div className="text-center">
        <button className="btn btn-info" onClick={onLoadMore}>
          Load More
        </button>
      </div>
    </div>
  );
}

export default Customer;
