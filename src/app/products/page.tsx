
import type { ReactElement } from 'react'
import type { GetStaticProps } from 'next'
import ProductsLayout from './products-layout'

export default function ProductsIndex({ title }: { title: string }): ReactElement {
  return (
    <div>
      <h1>{title}</h1>
      {/* Your products index content here */}
    </div>
  )
}

ProductsIndex.layout = ProductsLayout

export const getStaticProps: GetStaticProps = async () => {
  // Fetch your products data here
  return {
    props: {
      // Pass your products data as props here
      title: 'Products Index',
    },
  }
}
