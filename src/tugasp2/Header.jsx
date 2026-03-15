import React from 'react';
// Pastikan path (jalur) ini sesuai dengan posisi folder assets kamu
import fotoRafi from '../assets/rafi.jpeg'; 

const Header = () => {
  return (
    <header className="header-section">
      {/* Memanggil gambar dengan class profile-pic */}
      <img src={fotoRafi} alt="Foto Profil Rafi" className="profile-pic" />
      
      <h1>Rafi</h1> {/* Ganti nama sesuai keinginan */}
      <p>Frontend Web Developer</p>
    </header>
  );
};

export default Header;