import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Heading from '../../Components/Heading/Heading'
import {useState} from 'react'
import { useForm } from 'react-hook-form'
import CryptoJS from 'crypto-js';
import FileDownload from 'js-file-download'
import aes from 'crypto-js/aes';
import './Encrypt.css'

export default function Encrypt() {
    const { register, handleSubmit } = useForm()
    const [iptext,setip] = useState(" ")

    const onSubmit = (data) => {
        console.log(data.image[0])
        const filePath = data.image[0]
        var reader = new FileReader();
        reader.onloadend = function () {
            console.log('RESULT', reader.result)
            const key = iptext
            console.log(iptext)
            const dataFile = reader.result,
                dataBase64 = dataFile.toString('base64')
            var ciphertext = aes.encrypt(dataBase64, key).toString();
            console.log(ciphertext)
            FileDownload(ciphertext,"Encoded.enc")
        }
        reader.readAsDataURL(filePath);
    }
    const handleChange = (e) => {
        setip(e.target.value)
    }
    return (
        <>
        <Navbar/>
        <div id="box1">
        <Heading head="Encrypt Image using AES" />
        <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('image', { required: true })} type="file" id="inp" required="true"/>
                <p id="sk">ENTER SECRET KEY</p>
                <div>
                <input id="ok" type="text" onChange={handleChange} required="true"/>
                </div>
                <div id="bt">
                <button className="button"><span>Encrypt </span></button>
                </div>
        </form>
        </div>
        </>
    )
}
