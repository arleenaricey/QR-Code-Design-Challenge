import React from 'react';

export default function Qr() {
  return (
    <React.Fragment>
    <body class="bg-blue-200 flex justify-center items-center h-[110vh]">
        <div id="container" className="flex flex-col items-center w-[40vh]" style={{ height: '60vh' }}>
        <img id="QRCode" src="image-qr-code.png" alt="QR Code Image" className="w-[90h] rounded-lg mt-5 mb-10"/>
        <div id="text">
          <h1 className="text-lg font-bold text-center">
            Improve your front-end <br /> 
            skills by building projects <br />
          </h1>
          <p className="text-sm mt-5 text-center text-gray-600">
            Scan the QR code to visit Frontend <br />
            Mentor and take your coding skills <br />
            to the next level
          </p>
        </div>
      </div>
    </body>
    </React.Fragment>
  );
}
