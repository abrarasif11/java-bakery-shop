import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const AddItems = () => {
    const { user } = useContext(AuthContext);
    const handleAddProducts = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const model = form.model.value;
        const original_price = form.originalPrice.value;
        const condition = form.condition.value;
        const imageURL = form.imageURL.value;
        const description = form.description.value;
        const product = {
            email,
            model,
            original_price,
            condition,
            imageURL,
            description,
           
        };

        console.log(product);
        fetch(`https://java-bakery-shop-server.vercel.app/allitems`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Item Added")
                    form.reset();
                }
            })
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <h1 className="text-4xl mt-10 ml-4 font-semibold text-red-700 w-fit px-2 py-2">Add Items</h1>
            <form onSubmit={handleAddProducts} action="" className="mt-5 ">
                <div className="my-3">
                    <input
                        type="text"
                        name="email"
                        defaultValue={user?.email}
                        placeholder="Seller's email here"
                        className="input input-bordered w-4/5 ml-4"
                    />
                </div>
                <div className="my-3">
                    <input
                        type="text"
                        name="model"
                        placeholder="Item Name "
                        className="input input-bordered w-4/5 ml-4"
                    />
                </div>
                <div className="my-3">
                    <input
                        type="text"
                        name="originalPrice"
                        placeholder=" Price"
                        className="input input-bordered w-4/5 ml-4"
                    />
                </div>
                <div>
                    <select name="condition" className="select select-bordered w-4/5 ml-4">
                        <option disabled selected>
                            Category
                        </option>
                        <option value="Excellent">Espresso</option>
                        <option value="Good">Frozen Drinks</option>
                        <option value="Fair">Pastries</option>
                    </select>
                </div>


                <div className="my-3">
                    <input
                        type="text"
                        name="imageURL"
                        placeholder="Put item image url here"
                        className="input input-bordered w-4/5 ml-4"
                    />
                </div>
                <div className="my-3">
                    <textarea
                        className="textarea textarea-bordered w-4/5 ml-4"
                        name="description"
                        placeholder="Items Description"
                    ></textarea>
                </div>
                <button type="submit" className="bg-red-700 text-white px-3 font-semibold py-3 rounded ml-4 mb-10">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddItems;