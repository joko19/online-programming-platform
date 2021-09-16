import React from 'react'
import { NotionAPI } from 'notion-client'
import { NotionRenderer } from 'react-notion-x'

const notion = new NotionAPI()

function Docs({ recordMap }) {
  return (
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
  )
}

export const getServerSideProps = async (context) => {
  const recordMap = await notion.getPage(context.query.pageId)

  return { props: { recordMap } }
}

export default Docs