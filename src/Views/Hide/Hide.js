import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Heading from '../../Components/Heading/Heading'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import CryptoJS from 'crypto-js';
import Spacecrypt from 'spacecrypt';
import FileDownload from 'js-file-download'
import aes from 'crypto-js/aes';
import fs, { read, readFileSync } from "fs"
import './Hide.css'
import ScriptTag from 'react-script-tag'

export default function Hide() {

    const { register, handleSubmit } = useForm()
    const [iptext, setip] = useState(" ")
    const [ct, setct] = useState(" ")
    const [imagez, setimage] = useState("")
    const [sty, setsty] = useState({ height: '0px', width: '0px' })

    const onSubmit = (data) => {
        console.log(data.image[0])
        const filePath = data.image[0]
        const image = new Image();
        var reader = new FileReader();
        reader.onloadend = function () {
            console.log('RESULT', reader.result)
            const key = iptext
            console.log(reader.result)
            const encodedMessage = Spacecrypt.encrypt(reader.result, key);
            console.log(encodedMessage);
            setimage(reader.result)
            image.src = reader.result
            FileDownload(encodedMessage,"hidden.png")
        }
        reader.readAsDataURL(filePath);
        image.onload = async function () {
            const str1 = image.height.toString() + "px";
            const str2 = image.width.toString() + "px";
            setsty({ height: str1, width: str2 })
            console.log(sty)
        }
    }
    const handleChange = (e) => {
        setip(e.target.value)
    }
    return (
        <>
            <Navbar />
            <div id="box1">
                <Heading head="HIDE MESSAGE IN IMAGE" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('image', { required: true })} type="file" id="inp" />
                    <p id="sk">ENTER HIDDEN TEXT</p>
                    <div>
                        <input id="ok" type="text" onChange={handleChange} />
                    </div>
                    <div id="bt">
                        <button className="button"><span>Hide</span></button>
                    </div>
                </form>
                <a href={imagez} download>
                <img src={imagez} style={sty}></img>
                </a>
            </div>
        </>
    )
}
