import React from 'react'

export default function Qr() {
    return (
        <body>
            <div id = "container">
                <img id = "QRCode" src="image-qr-code.png" alt="QR Code Image"/> 
                <div id = "text">
                    <h1 class="bolded"> Improve your front-end  <br /> skills by building projects <br/> </h1>
                    <p class="notBolded"> Scan the QR code to visit Frontend <br /> 
                    Mentor and take your coding skills <br /> to the next level </p>
                </div>
            </div> 
        </body>
    )
}