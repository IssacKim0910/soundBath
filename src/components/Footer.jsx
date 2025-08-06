export default function Footer() {
  return (
    // footer: 시맨틱 HTML 태그로, 페이지의 바닥글을 의미
    <footer 
      // py-10: 위아래 안쪽 여백 2.5rem
      // text-center: 텍스트 중앙 정렬
      // text-gray-400: 텍스트 색상을 연한 회색으로
      // text-sm: 폰트 크기를 작게 (0.875rem)
      className="py-10 text-center text-gray-400 text-sm"
    >
      <p>&copy; 2025 SpotLight. All rights reserved.</p>
      <p>
        Instagram: 
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