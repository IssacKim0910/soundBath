export default function Footer() {
  return (
    <footer 
      className="py-10 text-center text-gray-400 text-sm"
    >
      <p>&copy; 2025 SpotLight. All rights reserved.</p>
      <p>문의 및 제안 : spotlightcoffee77@naver.com</p>
      <p>
        Instagram : &nbsp;
        <a 
          href="https://www.instagram.com/spotlight__coffee/" 
          target="_blank" // 링크를 새 탭에서 열도록 설정
          // underline: 텍스트에 밑줄 추가
          className="underline"
        >
          spotlight__coffee
        </a>
      </p>
    </footer>
  )
}