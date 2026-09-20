import axios from "axios";

async function getData() {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export default getData;