import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const AddItems = () => {
    const imagebbkey = process.env.REACT_APP_imagebb_key
    const [img, setImg] = useState(null)
    const { user } = useContext(AuthContext)
    const handlePostSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const write = form.write.value;
        const name = form.name.value;
        console.log(img);
        // imgbb
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imagebbkey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {
                    const picture = imgData.data.url
                    const uploadPhoto = {
                        write: write,
                        name: name,
                        picture: picture,
                    };
                    console.log(uploadPhoto);
                    fetch('https://socio-buzz-server.vercel.app/post', {
                        method: 'POST',
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(uploadPhoto)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success("Your Post is updated");
                        })
                }
            })
    };
    return (
        <div>
                 <form className='' onSubmit={handlePostSubmit}>
                <label className="label">
                    <span className="label-text font-poppins mx-auto text-lg text-black">User Name</span>
                </label>
                <div className="form-control text-black font-poppins">
                    <input defaultValue={user?.displayName} type="text" name='name' placeholder="Type here" className="  mx-auto  input input-bordered input-primary w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text mx-auto text-lg text-black">Wants to write something?</span>
                    </label>
                    <textarea name='write' id='write' className="text-black textarea  textarea-primary w-[320px] mx-auto h-1/2" placeholder="Write Here"></textarea>
                    <input onChange={(e) => setImg(e.target.files[0])} id='photo' type="file" name='photo' className="file-input mx-auto mt-7 file-input-bordered file-input-primary w-full max-w-xs" />
                    <button className='btn btn-primary text-black w-[320px] mb-20 mx-auto mt-7'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddItems;