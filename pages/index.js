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
    
  ]
  return (
    <>
      <Header />
      <iframe className="onlinecompiler" src="https://trinket.io/embed/python/351465970b" width="100%" frameBorder="0" marginWidth="0" marginHeight="0" allowFullScreen></iframe>
    </>
  )
}


export default Index