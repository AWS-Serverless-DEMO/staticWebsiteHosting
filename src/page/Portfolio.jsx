import React from 'react';

const Navigation = () => (
  <nav className="bg-white shadow-lg fixed w-full z-10">
    <div className="container mx-auto px-4">
      <div className="flex justify-between">
        <div className="flex space-x-7">
          <a href="#home" className="flex items-center py-4 px-2">
            <span className="font-semibold text-gray-500 text-lg">김클라우드</span>
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-3">
          <a href="#home" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">Home</a>
          <a href="#about" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">About</a>
          <a href="#projects" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">Projects</a>
          <a href="#contact" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">Contact</a>
        </div>
      </div>
    </div>
  </nav>
);

const Home = () => (
  <section id="home" className="pt-20 min-h-screen flex items-center">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <img src="/images/user.png" alt="프로필 이미지" className="rounded-full mx-auto mb-4" />   
        <h1 className="text-4xl font-bold text-gray-800 mb-4">김클라우드</h1>
        <p className="text-xl text-gray-600 mb-8">인하대학교 컴퓨터공학과 1학년</p>
        <p className="text-lg text-gray-500">클라우드 컴퓨팅을 공부하는 새내기 개발자입니다</p>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Me</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">현재 수강 중인 과목</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Python 프로그래밍 기초</li>
              <li>웹 개발 입문</li>
              <li>컴퓨터 구조</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">활동</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>AWS 대학생 그룹 스터디 리더</li>
              <li>인하대 코딩 동아리 '클라우드나인' 회원</li>
              <li>GitHub 스터디 참여 중</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProjectCard = ({ image, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src={image} alt={title} className="w-full" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Me</h2>
      <div className="max-w-md mx-auto">
        <div className="bg-gray-100 rounded-lg p-6">
          <div className="mb-4">
            <p className="text-gray-600"><strong>Email:</strong> cloud.kim@example.com</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-600"><strong>GitHub:</strong> github.com/cloudkim</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto px-4 text-center">
      <p>&copy; 2025 김클라우드. All rights reserved.</p>
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
    <div className="bg-gray-100">
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