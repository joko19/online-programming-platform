import Header from './../components/Header'
function Read(){
  return(
    <div >
      <Header/>
      <iframe className="h-screen" type="application/pdf" src="/pdf/TipeData.pdf#view=FitH" frameBorder="0" width="100%" height="100%" marginWidth="0" marginHeight="0" allowFullScreen></iframe>
    </div>
  )
}

export default Read