import React from "react"
import { render, screen } from "@testing-library/react"
import TrailNew from "./TrailNew"

describe("<TrailNew />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<TrailNew />, div)
  })
  it("can see the title of the page", () => {
    const div = document.createElement("div")
    render(<TrailNew />, div)
    const title = screen.getByText("Create", {exact: false})
    expect(title.textContent).toEqual("Create a new Trail")
  })
})