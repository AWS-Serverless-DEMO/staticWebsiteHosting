import React from 'react';

const Navigation = () => (
  <nav className="bg-white/80 backdrop-blur-md shadow-lg fixed w-full z-10 transition-all duration-300">
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-center h-16">
        <a href="#home" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
            김클라우드
          </span>
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300 text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

const Home = () => (
  <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50">
    <div className="container mx-auto px-6 pt-32 pb-20">
      <div className="text-center space-y-8">
        <div className="relative">
          <div className="w-40 h-40 mx-auto relative">
            <img 
              src="/images/user.png" 
              alt="프로필" 
              className="rounded-full object-cover w-full h-full shadow-xl ring-4 ring-white"
            />
            <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-2 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-gray-800">
            안녕하세요, 
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
              김클라우드
            </span>
            입니다
          </h1>
          <p className="text-xl text-gray-600">인하대학교 컴퓨터공학과 1학년</p>
          <p className="text-gray-500 max-w-2xl mx-auto">
            클라우드 컴퓨팅을 공부하는 새내기 개발자입니다
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <button className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300">
            프로젝트 보기
          </button>
          <button className="px-8 py-3 border border-gray-300 rounded-full hover:border-blue-500 hover:text-blue-500 transition-colors duration-300">
            연락하기
          </button>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-16">
        <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
          About Me
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="bg-blue-100 p-2 rounded-lg mr-3">📚</span>
            현재 수강 중인 과목
          </h3>
          <ul className="space-y-4">
            {['Python 프로그래밍 기초', '웹 개발 입문', '컴퓨터 구조'].map((item) => (
              <li key={item} className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="bg-green-100 p-2 rounded-lg mr-3">🎯</span>
            활동
          </h3>
          <ul className="space-y-4">
            {[
              'AWS 대학생 그룹 스터디 리더',
              '인하대 코딩 동아리 \'클라우드나인\' 회원',
              'GitHub 스터디 참여 중'
            ].map((item) => (
              <li key={item} className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const ProjectCard = ({ image, title, description }) => (
  <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      image: "/images/s3.png",
      title: "나의 첫 AWS 웹사이트",
      description: "S3와 CloudFront를 이용한 정적 웹사이트 호스팅"
    },
    {
      image: "/images/python.jpeg",
      title: "파이썬 학과 공지사항 크롤러",
      description: "학과 공지사항을 자동으로 수집하는 파이썬 프로그램"
    },
    {
      image: "/images/inha.png",
      title: "인하대 맛집 리뷰 웹페이지",
      description: "교내 맛집 정보를 공유하는 웹사이트"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
            My Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-16">
        <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
          Contact Me
        </span>
      </h2>
      <div className="max-w-lg mx-auto">
        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg">
              <div className="bg-blue-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">cloud.kim@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg">
              <div className="bg-purple-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">GitHub</p>
                <p className="font-medium">github.com/</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-12">
    <div className="container mx-auto px-6">
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4">김클라우드</h3>
        <p className="text-gray-400 mb-6">클라우드 컴퓨팅을 공부하는 새내기 개발자</p>
        <div className="flex justify-center space-x-4 mb-8">
          <a href="#" className="hover:text-white transition-colors duration-300">
            <span className="sr-only">GitHub</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <p className="text-sm">&copy; 2025 김클라우드. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const Portfolio = () => {
  React.useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="bg-gray-50">
      <Navigation />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;