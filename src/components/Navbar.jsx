
//Navbar.jsx

import '/src/components/NavbarStyle.css';
import Image from "next/image";



export default function Navbar(){  //function name start with capital



    return(
        <nav id="Navbar">
            <ul>
                <li><a className = 'NavbarA' href='../home' >
                        <Image
                          src="/public_images/ksamap.png"
                          alt="ksamap logo"
                          width={300}
                          height={50}
                        />
                    </a></li>
                <li><a className = 'NavbarA' href='../guidlines'>유의사항</a></li>
                <li><a className = 'NavbarA' href='../development'>개발</a></li>
                <li><a className = 'NavbarA' href='../suggest'> 기능 제안 </a></li>
                <li><a className = 'NavbarA' href='../questions/page'>문의</a></li>
            </ul>
        </nav>
    );
}