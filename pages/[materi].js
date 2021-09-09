import { useRouter } from 'next/router'

const Materi = () => {
  const router = useRouter()
  const { materi } = router.query

  return 
  <>
    <iframe className="onlinecompiler" src={pdf} width="100%" height="calc(100vh - 100px)" frameBorder="0" marginWidth="0" marginHeight="0" allowFullScreen></iframe>
  </>
}

export default Materi