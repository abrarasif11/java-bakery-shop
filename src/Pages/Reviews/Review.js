import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
const Review = () => {
    const { user, createUser } = useContext(AuthContext);
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        console.log({ review });
        
            fetch("https://trade-buy-sell-arbinzaman.vercel.app/items", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                // body: JSON.stringify(formValue),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.acknowledged) {
                        toast.success("Items Added Successfully");
                      
                    }
                })
                .catch((err) => console.log(err));
        }
    return (
        
      <form onSubmit={handleSignUp}>
          <div className="flex mx-auto mt-20 flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-900 text-gray-100">
            <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                <div className="flex flex-col items-center py-6 space-y-3">
                    <span className="text-center">How was your experience?</span>
                 
                </div>
                <div className="flex flex-col w-full">
                    <textarea name='review' rows="3" placeholder="Message..." className="p-4 rounded-md resize-none text-black bg-gray-100"></textarea>
                    {/* <button type="button" className="py-4 my-8 font-semibold rounded-md dark:
                    text-gray-900 bg-violet-400">Leave feedback</button> */}
                     <button class=" w-full mt-3 mb-3 px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-700 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        Submit 
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <a rel="noopener noreferrer" href="#" className="text-sm text-gray-400">Maybe later</a>
            </div>
        </div>
      </form>
    );
};

export default Review;