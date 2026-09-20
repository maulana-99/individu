import { Component, Suspense, use } from "react";
import getData from "../api/getData";

const productsPromise = getData();

class ProductErrorBoundary extends Component {
    state = { error: null };

    static getDerivedStateFromError(error) {
        return { error };
    }

    render() {
        if (this.state.error) {
            return (
                <p role="alert" className="rounded-lg bg-red-50 p-6 text-center text-red-700">
                    Gagal memuat produk. Cek koneksi lalu muat ulang halaman.
                </p>
            );
        }

        return this.props.children;
    }
}

function ProductList() {
    const products = use(productsPromise);

    return (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <li key={product.id} className="flex flex-col rounded-lg bg-white p-4 shadow">
                    <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        className="mx-auto mb-4 h-40 object-contain"
                    />
                    <h3 className="font-semibold text-slate-800">{product.title}</h3>
                    <p className="mt-auto pt-2 text-slate-600">${product.price}</p>
                </li>
            ))}
        </ul>
    );
}

function Merch() {
    return (
        <section className="mx-auto max-w-5xl px-8 py-12">
            <h1 className="mb-2 text-4xl font-extrabold text-slate-900">Merch</h1>
            <p className="mb-8 text-lg text-slate-600">Katalog merchandise pilihan kami.</p>

            <ProductErrorBoundary>
                <Suspense fallback={<p className="py-20 text-center text-slate-500">Memuat produk...</p>}>
                    <ProductList />
                </Suspense>
            </ProductErrorBoundary>
        </section>
    );
}

export default Merch;
