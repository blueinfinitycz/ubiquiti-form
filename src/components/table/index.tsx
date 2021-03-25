import React from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getTableData } from '../../redux/actions';

interface IDataItem {
  name: string;
  height: number;
  file: string;
}

const TableContainer = ({ data = [] }) => {
  console.log(data);
  return (
    <Table striped={true} responsive="md" bordered={true} hover={true} size="md">
      <thead>
        <tr>
          <th>Name:</th>
          <th>Height:</th>
          <th>File:</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item: { name: string; height: number; file: string }, idx: number) => (
            <tr key={idx.toString()}>
              <td>{item.name}</td>
              <td>{item.height}</td>
              <td>{item.file}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

const TableData = () => {
  const { payload } = useSelector((state: any) => state.AppReducer);
  console.log('PAYLOAD: ', payload);
  const dispatch = useDispatch();
  return (
    <section>
      <button type="button" onClick={() => dispatch(getTableData())}>
        load data to table
      </button>
      {payload.length > 0 && <TableContainer data={payload} />}
    </section>
  );
};

export default TableData;
