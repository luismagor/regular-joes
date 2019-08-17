import React from "react"
import Product from "./Product"
import Title from "../Globals/Title"
import { useStaticQuery, graphql } from "gatsby"

const Products = () => {
  const {
    products: { edges: products },
  } = useStaticQuery(graphql`
    {
      products: allContentfulCoffeeProduct {
        edges {
          node {
            id
            title
            price
            image {
              fluid(maxHeight: 426) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className="py-5">
      <div className="container">
        <Title title="our products" />
        <div className="row">
          {products.map(({ node: product }) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
