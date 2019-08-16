import React, { useState } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

const getCategories = items => [
  "all",
  ...Array.from(new Set(items.map(item => item.node.category))),
]

const Menu = ({ items }) => {
  const [state, setState] = useState({
    items: items.edges,
    coffeeItems: items.edges,
    categories: getCategories(items.edges),
  })

  const handleItems = category => {
    setState(prevState => ({
      items: prevState.items,
      coffeeItems: prevState.items.filter(
        ({ node }) => category === "all" || node.category === category
      ),
      categories: prevState.categories,
    }))
  }

  if (state.items.length > 0) {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of our menu" />
          {/* categories */}
          <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
              {state.categories.map((category, index) => (
                <button
                  key={index}
                  type="button"
                  className="btn btn-yellow text-capitalize m-3"
                  onClick={() => handleItems(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          {/* items */}
          <div className="row">
            {state.coffeeItems.map(({ node }) => (
              <div
                key={node.id}
                className="col-11 col-md-6 my-3 d-flex mx-auto"
              >
                <div>
                  <Img fixed={node.image.fixed} />
                </div>
                {/* item content */}
                <div className="flex-grow-1 px-3">
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-0">
                      <small>{node.title}</small>
                    </h6>
                    <h6 className="mb-0 text-yellow">
                      <small>${node.price}</small>
                    </h6>
                  </div>
                  <p className="text-muted">
                    <small>{node.description.description}</small>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of our menu" />
          <div className="row">
            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
              <h1>there are no items to display</h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Menu
