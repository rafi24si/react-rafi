import React from 'react';

const Experience = () => {
  return (
    <section className="section experience-section">
      <h2>Pengalaman Kampus</h2>
      <div className="job">
        <h3>Anggota Kepanitiaan Seminar Teknologi</h3>
        <p><em>Mei 2025</em></p>
        <p>Membantu perencanaan acara, koordinasi narasumber, dan publikasi untuk seminar bertema UX dan pengembangan web.</p>
      </div>
      <div className="job">
        <h3>Ketua Tim Project Capstone</h3>
        <p><em>September 2024 - Desember 2024</em></p>
        <p>Memimpin tim dalam pengembangan platform manajemen tugas berbasis Laravel dan pengalaman pengguna (UX).</p>
      </div>
      <div className="job">
        <h3>Relawan Workshop DPP</h3>
        <p><em>Februari 2024</em></p>
        <p>Menjadi fasilitator untuk sesi desain pengalaman pengguna, memperkenalkan metode user research dan prototyping.</p>
      </div>
    </section>
  );
};

export default Experience;