import React, { useState } from 'react'
import CSS from './style.module.css'

export const MultipleImg = () => {
    const [files, setFiles] = useState("");

    const handleImage = (e) => {
        console.log(e.target.files);
        setFiles(e.target.files);
    };

    return (
        <div className={CSS.Upload}>
            <input type="file" id="upload" name="files[]" onChange={handleImage} multiple hidden />
            <label for="upload">Upload Image</label>
            {files && Array.from(files).map((files) => (
                <div className={CSS.Store}>
                    <img src={URL.createObjectURL(files)} alt={files.name} key={files.name} />
                </div>
            ))}


        </div>
    )
}
