import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import CryptoJS from 'crypto-js';
import aes from 'crypto-js/aes';
import fs from "fs";
import FileDownload from 'js-file-download'


const Test = () => {
    const { register, handleSubmit } = useForm()
    const [image, setimage] = useState("")
    const [width, setwidth] = useState("")
    const [sty,setsty] = useState({height : '0px',width:'0px'})

    const onSubmit = (data) => {
        console.log(data.image[0])
        const image = new Image();

        const filePath = data.image[0]
        console.log(filePath.naturalHeight)
        var reader = new FileReader();
        reader.onloadend = function () {
            console.log('RESULT', reader.result)
            const key = 'SECRET_KEY'
            const dataFile = reader.result,
                dataBase64 = dataFile.toString('base64')
            var ciphertext = aes.encrypt(dataBase64, key).toString();
            console.log(ciphertext)
            var bytes = aes.decrypt(ciphertext, 'SECRET_KEY');
            var originalText = bytes.toString(CryptoJS.enc.Utf8);
            console.log(originalText); // 'my message'
            image.src = originalText;
            setimage(originalText)
            const ima = "data:image/jpeg;base64," + originalText
            FileDownload(ima,"Encoded.jpg")
        }
        reader.readAsDataURL(filePath);

        image.onload = async function() {
            const str1 = image.height.toString() + "px";
            const str2 = image.width.toString() + "px";
            setsty({height:str1,width:str2})
           };
       
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('image', { required: true })} type="file" />
                <button>Submit</button>
                <img src={image} style={sty}/>
                <button>{}</button>
            </form>
        </div>
    )
}

export default Test
