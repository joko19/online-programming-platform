import React, { useEffect } from 'react'
import { NotionAPI } from 'notion-client'
import { useRouter } from "next/router";
import { NotionRenderer } from 'react-notion-x'

const notion = new NotionAPI()


function Tutorial({ recordMap }) {
  return (
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
  )
}


export const getStaticProps = async (context) => {
  const pageId = context.params.pageId
  const recordMap = await notion.getPage(pageId)
  console.log(pageId)
  return { props: { recordMap } }
}

// export const getServerSideProps = async () => {

//   const recordMap = await notion.getPage('067dd719a912471ea9a3ac10710e7fdf')

//   return { props: { recordMap } }
// }

export default Tutorial