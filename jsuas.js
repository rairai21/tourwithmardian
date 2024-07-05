document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('transaksi-form');
    const confirmationDiv = document.getElementById('confirmation');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const hotel = document.getElementById('hotel').value;
        const checkin = document.getElementById('checkin').value;
        const checkout = document.getElementById('checkout').value;

        confirmationDiv.innerHTML = `
            <h3>Konfirmasi Pemesanan</h3>
            <p>Terima kasih, ${nama}!</p>
            <p>Anda telah berhasil memesan di <strong>${hotel}</strong>.</p>
            <p><strong>Tanggal Check-in:</strong> ${checkin}</p>
            <p><strong>Tanggal Check-out:</strong> ${checkout}</p>
            <p>Konfirmasi telah dikirim ke email: ${email}</p>
        `;

        form.reset();
    });
});
