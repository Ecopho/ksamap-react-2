//개발 이유, 과정, 목표

import Navbar from "/src/components/Navbar.jsx";
import '/src/components/site.css'
//npm run dev 로 코드 실행하기

export default function GuidlinesPage() {
  return (
    <>
      <Navbar></Navbar>
      <section className = "dev_section">
        <div className = "dev_site1">
            <div className = "textbox_site">
                <h1>개발 이유</h1>
            </div>
        </div>
        <div className = "dev_site2">
            <div className = "textbox_site">
                <h1>개발 이유</h1>
            </div>
        </div>
        <div className = "dev_site3">
            <div className = "textbox_site">
                <h1>개발 이유</h1>
            </div>
        </div>
      </section>
    </>
  );
}