import { useRouter } from 'next/router'

const Materi = () => {
  const router = useRouter()
  const { materi } = router.query

  return <p>Post: {materi}</p>
}

export default Materi