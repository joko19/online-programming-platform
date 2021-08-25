import Header from "../components/Header"

function OnlineCompiler() {
  return (
    <>
      <Header />
      <iframe className="onlinecompiler" src="https://trinket.io/embed/python/351465970b" width="100%" frameBorder="0" marginWidth="0" marginHeight="0" allowFullScreen></iframe>
    </>
  )
}

export default OnlineCompiler