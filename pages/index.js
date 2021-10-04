import Header from "../components/Header"
import Card from "../components/Card"
import Card2 from "../components/Card2"
import Image from 'next/image'
import Link from 'next/link'

function Index() {
  const data = [
    {
      id: 0,
      title: 'Pendahuluan',
      cover: 'https://thumbs.dreamstime.com/b/introduction-concept-word-cork-board-77226561.jpg',
      link: 'https://joko19.github.io/materi/pendahuluan/presentation.html'
    },
    {
      id: 1,
      title: 'Algoritma dan Flowchart',
      cover: 'https://static7.depositphotos.com/1194063/684/i/600/depositphotos_6843383-stock-photo-hand-draws-flow-chart-on.jpg',
      link: 'https://joko19.github.io/materi/flowchart/presentation.html'
    },
    {
      id: 2,
      title: 'Mengenal Python',
      cover: 'https://remakelearning.org/wp-content/uploads/2020/01/105.jpg',
      link: 'https://joko19.github.io/materi/pengenalan-python/presentation.html'
    },
    {
      id: 3,
      title: 'Pertemuan 3',
      cover: 'https://raw.githubusercontent.com/joko19/online-programming-platform/gh-pages/img/sintaks.png',
      link: 'https://drive.google.com/file/d/1mWUcxGrcRkDmVNtlmtdeXaoknjPk_DeE/view?usp=sharing'
    },
    {
      id: 4,
      title: 'Pertemuan 4',
      cover: 'https://raw.githubusercontent.com/joko19/online-programming-platform/gh-pages/img/tipeData.png',
      link: 'https://drive.google.com/file/d/19h-sSkefRACTBhFgtANwRRSj3prCsP-0/view?usp=sharing'
    },
    {
      id: 5,
      title: 'Pertemuan 5',
      cover: 'https://raw.githubusercontent.com/joko19/online-programming-platform/main/public/img/operator.png',
      link: 'https://drive.google.com/file/d/1onGtWBx0LHbukMWbBGjC4Y72eDUJHo-d/view?usp=sharing'
    },
    {
      id: 5,
      title: 'Pertemuan 6',
      cover: 'https://remakelearning.org/wp-content/uploads/2020/01/105.jpg',
      link: '#'
    },
    {
      id: 5,
      title: 'Ulangan Tengah Semester',
      cover: 'https://remakelearning.org/wp-content/uploads/2020/01/105.jpg',
      link: '#'
    },

  ]
  return (
    <>
      <Header />
      <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
          <div className="max-w-lg md:mx-12 md:order-2">
            <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">NiceRoom</h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Media Pembelajaran yang dibuat untuk siswa siswi SMK Negeri 1 Cerme Gresik sebagai penunjang mata pelajaran Pemrograman Dasar</p>
            <div className="mt-6">
              <a href="https://github.com/joko19/NiceRoomApp/releases/download/v1.0/NiceRoom.apk" className="hidden md:block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400">Download</a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-96 md:w-1/2">
          <img className="object-cover w-screen md:w-full h-full max-w-2xl rounded-md" src="https://content.techgig.com/photo/80044166/everything-you-must-know-to-become-a-successful-programmer-in-2021.jpg" alt="header" />
        </div>
      </div>
      <div className="p-10 grid md:grid-cols-4  gap-4 bg-gray-100">
        {data.map((item) => {
          return (
            <Card key={item.id} data={item} />
          )
        })}
      </div>
    </>
  )
}


export default Index