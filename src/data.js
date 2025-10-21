export const servicesData = [
  {
    slug: 'sound-bath',
    title: '사운드배스',
    image: '../src/assets/events/soundBathThum.jpg',
    description: [
      '사운드배스(Sound Bath)는 전통 울림 악기의 깊은 공명으로',
      `몸과 마음을 '소리로 목욕하듯' 씻어내는 힐링 프로그램입니다.`,
      '이어지는 차담(茶啖) 시간에는 따뜻한 전통차와 달콤한 다과로 정돈된 감각을 더욱 풍요롭게 완성합니다.'],
    videoUrl: 'https://youtu.be/BCAxFMkGwzo'
  },
  {
    slug: 'exhibition',
    title: '전시',
    image: '../src/assets/exhibitions/exhibThum.jpg',
    link: '/exhibitions', // Special link for this card
    description: 'Our space transforms to host rotating exhibitions from local and international artists. Discover new perspectives with every cup.'
  },
  {
    slug: 'coffee-class',
    title: '센서리 클래스',
    image: '../src/assets/sensoryThum.jpg',
    description: [
      '전문 바리스타가 기업의 특성과 니즈에 맞춰 설계한 맞춤형 커피 교육 프로그램을 제공합니다.',
      '임직원 복지, 팀 빌딩, 고객 대상 이벤트 등 다양한 목적에 맞춰 최고의 커피 경험을 선사합니다.'
    ],
    features: [
      '원두 1종마다 향미-시음-기록을 체계적으로 반복',
      '참여형 루틴을 통해 몰입도 극대화',
      '스스로 취향을 찾아가는 주체적인 시간'
    ],
    curriculum: [
      '사전교육 (15분 - 센서리 개념과 표현 방법을 교육)',
      '원두별 5단계 체험 (60분 - 향미체험, 시음, 센서리카드 작성)',
      '취향정리 (15분)',
      '마무리 & 선물 (참가자가 선택한 원두의 드립백 제공)'
    ]
  },
  {
    slug: 'Spotlight-Band',
    title: '밴드',
    image: 'https://placehold.co/1200x800/585858/FFFFFF/png?text=Spotlight-Band',
    description: ['Spotlight Band는 국악, 재즈, 클래식, 실용음악 등 서로 다른 장르의 아티스트들이 모여', '새로운 사운드를 창조하는 크로스오버 밴드입니다.'],
  },
  {
    slug: 'events',
    title: '행사',
    image: 'https://placehold.co/1200x800/676767/FFFFFF/png?text=Events',
    description: 'Join our community for special events, from live music nights to poetry readings and seasonal celebrations. There is always something happening here.'
  }
];

export const soundBathHistoryData = [
  {
    id: 'sb-2024-08',
    title: '여름밤의 사운드배스',
    date: '2024.08.15',
    image: '../src/assets/night.jpg',
    description: '한여름 밤, 시원한 공간에서 진행된 사운드배스 세션입니다.'
  },
  {
    id: 'sb-2023-09',
    title: '봄의 소리, 마음의 울림',
    date: '2023.09.27',
    image: '../src/assets/soundBath/sb230927.jpg',
    description: '새로운 시작을 응원하는 봄 시즌 특별 사운드배스입니다.'
  },
  {
    id: 'sb-2024-02',
    title: '겨울의 끝, 새로운 시작',
    date: '2023.10.03',
    image: '../src/assets/soundBath/sb231003.jpg',
    description: '겨우내 움츠렸던 몸과 마음을 깨우는 시간을 가졌습니다.'
  },
];


export const sensoryClassHistoryData = [
  {
    id: 'sc-250821',
    title: '담양군 다문화지원센터',
    date: '2025.08.21',
    image: '../src/assets/sensory/dy.JPG',
    description: '담양군 다문화 지원센터에서 다양한 원두를 맛보고 경험하는 시간을 가졌습니다'
  },
  {
    id: 'sc-2024-04',
    title: '봄의 향기를 담은 커피',
    date: '2024.04.15',
    image: '../src/assets/sensoryThum.JPG',
    description: '꽃향기가 가득한 에티오피아 원두를 중심으로 다양한 커피의 아로마를 탐험했습니다.'
  },
];
