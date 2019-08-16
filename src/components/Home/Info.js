import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem velit in aliquam nisi harum nobis adipisci possimus
              nesciunt eos unde vitae facere corporis provident ad molestias ut
              tempora, repellat saepe quasi deserunt, officia placeat itaque?
              Veniam maxime aperiam repellat tenetur quisquam adipisci at?
              Voluptatibus commodi dignissimos vitae magnam, odit facere.
            </p>
            <Link to="/about">
              <button className="btn btn-yellow text-uppercase">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
