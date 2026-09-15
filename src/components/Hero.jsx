import { useState } from 'react'

function Hero() {
    const [angka, setAngka] = useState(0);


    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold">Solusi Terbaik Untuk Bisnis Anda</h1>
                <p className="text-gray-600">Platform All in one untuk management</p>
                <button
                    onClick={() => setAngka(angka + 1)}
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Klik button ini: {angka}
                </button>
            </div>
        </section>
    );
}

export default Hero;