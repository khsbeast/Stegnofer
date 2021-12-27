import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Heading from '../../Components/Heading/Heading'
import { useState } from 'react'
import { set, useForm } from 'react-hook-form'
import CryptoJS from 'crypto-js';
import FileDownload from 'js-file-download'
import aes from 'crypto-js/aes';
import './Decrypt.css'

export default function Decrypt() {
    const { register, handleSubmit } = useForm()
    const [iptext, setip] = useState(" ")
    const [image, setimage] = useState("")
    const [sty, setsty] = useState({ height: '0px', width: '0px' })


    const onSubmit = (data) => {
        console.log(data.encry[0])
        const image = new Image();
        const filePath = data.encry[0]
        var reader = new FileReader();
        reader.onloadend = function () {
            console.log('RESULT', reader.result)
            var bytes = aes.decrypt(reader.result, iptext);
            var originalText = bytes.toString(CryptoJS.enc.Utf8);
            setimage(originalText)
            image.src = originalText;
            console.log(originalText);
        }
        reader.readAsText(filePath);
        image.onload = async function () {
            const str1 = image.height.toString() + "px";
            const str2 = image.width.toString() + "px";
            setsty({ height: str1, width: str2 })
            console.log(sty)
        };
    }
    const handleChange = (e) => {
        setip(e.target.value)
    }
    return (
        <>
            <Navbar />
            <div id="box1">
                <Heading head="Decrypt Image using AES" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('encry', { required: true })} type="file" id="inp" required="true" />
                    <p id="sk">ENTER SECRET KEY</p>
                    <div>
                        <input id="ok" type="text" onChange={handleChange} required="true" />
                    </div>
                    <div id="bt">
                        <button className="button"><span>Decrypt </span></button>
                    </div>
                </form>
                <img src={image} style={sty} />
            </div>
        </>
    )
}
