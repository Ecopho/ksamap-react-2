
import Navbar from "@/components/Navbar.jsx";
import '/src/components/site.css'
//    @ = src  IMPORTANT
//npm run dev 로 코드 실행하기

export default function HomePage() {
  return (
    <>
      <link rel='stylesheet'></link>

      <Navbar></Navbar>
      <section>
        <div className = "site">
            <div className = "textbox_site">
                <h1 id = "text">테스트 중입니다</h1>
                <h3 id = "text">뭐라도 생기지 않을까요?</h3>
            </div>
        </div>
      </section>
    </>
  );
}
