import Link from 'next/link'

function Card2(props) {
  return (
    <div className="bg-gray-100">
      <div className="container ">
        <div className="max-w-sm py-3">
          <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
            <img className="rounded-t-lg" style={{ height: '200px' }} src={props.data.cover} alt="cover item" />
            <div className="py-2 px-4 rounded-lg bg-white">
              <h1 className="text-gray-700 font-bold text-xl hover:text-gray-900 hover:cursor-pointer mb-2">{props.data.title}</h1>
              <Link href={`${props.data.link}`}>
                <a className="mt-2 py-2 mb-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Open</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card2