import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../dummyData";
import Link from "next/link";
import { useState } from "react";

export default function UserList() {
  const [rows, setRows] = useState(userRows);

  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <img
              className="object-cover mr-3 rounded-full w-9 h-9"
              src={params.row.avatar}
              alt=""
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 300 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <>
              <Link href="/user/[id]" as={`/user/${params.row.id}`}>
                <button className="px-2 py-1 mr-5 text-white bg-green-600 cursor-pointer rounded-xl">
                  Edit
                </button>
              </Link>
              <DeleteOutline
                className="text-red-700 cursor-pointer"
                onClick={() => handleDelete(params.row.id)}
              />
            </>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div style={{ height: "75vh", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
