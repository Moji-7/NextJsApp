
import type { ReactElement } from 'react'
import type { GetStaticProps, GetStaticPaths } from 'next'
import { ProductsLayout } from './products-layout'

export default function Shoes(): ReactElement {
  return (
    <div>
      <h3>Shoes</h3>
      <ul>
        {/* This is how you display some data or information for the page */}
        <li>Nike Air Max 270</li>
        <li>Adidas Ultraboost 21</li>
        <li>Reebok Nano X1</li>
      </ul>
    </div>
  )
}

Shoes.layout = ProductsLayout

export const getStaticProps: GetStaticProps = async (context) => {
  // Fetch your shoes data based on context.params here
  return {
    props: {
      // Pass your shoes data as props here
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Generate your shoes paths here
  return {
    paths: [
      // Your shoes paths here
    ],
    fallback: false,
  }
}
