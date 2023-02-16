import React from "react"
import { render } from "@testing-library/react"
import UnprotectedIndex from "./UnprotectedIndex"
import { BrowserRouter } from "react-router-dom"

describe("<UnprotectedIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<UnprotectedIndex />, div)
  })
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <UnprotectedIndex />
      </BrowserRouter>
    )
  })
})