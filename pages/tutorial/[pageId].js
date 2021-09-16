import React,{useEffect} from 'react'
import Head from 'next/head'

import { getPageTitle, getAllPagesInSpace } from 'notion-utils'
import { NotionAPI } from 'notion-client'
import { NotionRenderer } from 'react-notion-x'

const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const notion = new NotionAPI()

export const getStaticProps = async (context) => {
  const pageId = context.params.pageId
  const recordMap = await notion.getPage(pageId)
  // const recordMap = await notion.getPage('067dd719a912471ea9a3ac10710e7fdf')


  return {
    props: {
      recordMap
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  if (isDev) {
    return {
      paths: [],
      fallback: true
    }
  }


  const rootNotionPageId = '067dd719a912471ea9a3ac10710e7fd'
  const rootNotionSpaceId = 'fde5ac74-eea3-4527-8f00-4482710e1af3'

  // This crawls all public pages starting from the given root page in order
  // for next.js to pre-generate all pages via static site generation (SSG).
  // This is a useful optimization but not necessary; you could just as easily
  // set paths to an empty array to not pre-generate any pages at build time.
  const pages = await getAllPagesInSpace(
    rootNotionPageId,
    rootNotionSpaceId,
    notion.getPage.bind(notion),
    {
      traverseCollections: false
    }
  )
  console.log(pages)
console.log("hahah")
  const paths = Object.keys(pages).map((pageId) => `/${pageId}`)
  // const paths = Object.keys(pages).map((pageId) => ({params: { pageId: `/${pageId}` }}) )
  console.log(paths)
  const newPaths = []
  
  newPaths.push(paths)
  console.log(newPaths)
  // for (let slug of paths) {
  //   newPaths.push({ params: { ...slug } });
  // }
  return {
    paths,
    fallback: false
  }
}

export default function NotionPage({ recordMap }) {
  if (!recordMap) {
    return null
  }

  const title = getPageTitle(recordMap)
  console.log(title, recordMap)

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])


  return (
    <>
      <Head>
        <meta name='description' content='React Notion X demo renderer.' />
        <title>{title}</title>
      </Head>

      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
    </>
  )
}