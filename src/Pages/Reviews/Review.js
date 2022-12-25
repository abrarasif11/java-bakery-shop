import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
const Review = () => {
    const { user, } = useContext(AuthContext);
    const handleReviewSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const reviews = form.reviews.value;
        const name = form.name.value;


        const formValue = { reviews, name };
        console.log(formValue);

        if (user?.uid) {
            fetch("https://java-bakery-shop-server.vercel.app/review", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(formValue),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.acknowledged) {
                        toast.success("Thanks for your review!!!");
                    }
                })
                .catch((err) => console.log(err));
        } else {
            toast.alert("Please login first to provide Items");
        }
    }
    return (

        <form onSubmit={handleReviewSubmit}>
            <div className="flex mx-auto font-josefin mt-20 flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-900 text-gray-100">
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                    <div className="flex flex-col items-center py-6 space-y-3">
                        <span className="text-center">How was your experience?</span>

                    </div>
                    <div className="flex flex-col w-full">
                        <input defaultValue={user?.displayName} type="text" name="name" id="name" placeholder="Username" className="w-full px-4 mb-2 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" />
                        <textarea name='reviews' rows="3" placeholder="Message..." className="p-4 rounded-md resize-none text-black bg-gray-100"></textarea>
                        <button class=" w-full mt-3 mb-3 px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-700 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Review;