async function addCar() {
  e.prevent.default();
  const data = {
    name: document.getElementById("name").value,
  };

  const responseApi = await axios.post("localhost:3000/api/cars", data);
  if (responseApi.data.status === "success") {
    alert("berhasil tambah data baru");
  } else {
    alert(response.data.message);
  }
}
