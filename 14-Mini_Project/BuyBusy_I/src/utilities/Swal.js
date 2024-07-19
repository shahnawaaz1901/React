import Swal from "sweetalert2";

async function confirm() {
  return (
    await Swal.fire({
      title: "Do you want to SignOut ..?",
      text: "You need Credentials to login Again !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Signout !",
    })
  ).isConfirmed;
}

export default confirm;
