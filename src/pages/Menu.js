import { useState } from "react";

function Menu() {
    const [menus, setMenu] = useState(
        [
            {idmenu:35, idkategori:14, menu:"Apel Manalagi", gambar:"apell.jpg", harga:3000},
            {idmenu:36, idkategori:14, menu:"Pisang Raja", gambar:"piisang.jpg", harga:5000},
            {idmenu:39, idkategori:1, menu:"Nasi Padang", gambar:"nasi padang.jpeg", harga:20000},
            {idmenu:40, idkategori:1, menu:"Nasi Ayam Bakar", gambar:"nasi ayam.jpg", harga:15000},
            {idmenu:43, idkategori:2, menu:"Es Teh", gambar:"es teeh.jpg", harga:5000},
            {idmenu:44, idkategori:2, menu:"Es Jeruk", gambar:"es jeeruk.jpg", harga:7000},
        ]
    )

    return (
      <div className="App">
        <h1>Menu Restoran</h1>
        <div>
            {menus.map((data)=>(
                <li key={data.idmenu}>{data.menu} Rp {data.harga}</li>
            ))}
        </div>
      </div>
    );
  }
  
  export default Menu;

  