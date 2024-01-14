import { AdminInterface } from "../../interfaces/admin";

const apiUrl = "http://localhost:8080";

async function GetEmployee() {
  const requestOptions = {
    method: "GET",
    headers: {
    //   Authorization: `Bearer ${localStorage.getItem("token")}`,
    //   "Content-Type": "application/json",
    },
  };
  let res = await fetch(`${apiUrl}/admin/employee`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });
  return res;
}

async function CreateEmployee(data: AdminInterface) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };
    let res = await fetch(`${apiUrl}/admin/employee`, requestOptions)
        .then((response) => response.json())
        .then((res) => {
            if (res.data) {
                return res.data;
              } else {
                return false;
              }
        });
    return res;
}

async function DeleteEmployee(id: Number | undefined) {
    const requestOptions = {
      method: "DELETE"
    };
  
    let res = await fetch(`${apiUrl}/admin/employee/${id}`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          return res.data;
        } else {
          return false;
        }
      });
  
    return res;
  }

  async function UpdateEmployee(id: number, data: AdminInterface) {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  
    let res = await fetch(`${apiUrl}/admin/employee/${id}`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          return res.data;
        } else {
          return false;
        }
      });
  
    return res;
}
export {
  GetEmployee,
  CreateEmployee,
  DeleteEmployee,
  UpdateEmployee,
};