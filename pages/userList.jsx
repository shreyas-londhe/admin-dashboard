import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 300 },
  { field: "lastName", headerName: "Last name", width: 300 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 120,
  },
  {
    field: "isAlive",
    headerName: "Is Alive",
    type: "boolean",
    width: 200,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, isAlive: false },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42, isAlive: true },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45, isAlive: true },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, isAlive: true },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
    isAlive: false,
  },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150, isAlive: false },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44, isAlive: true },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36, isAlive: false },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, isAlive: true },
];

export default function UserList() {
  return (
    <div className="flex-4">
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
