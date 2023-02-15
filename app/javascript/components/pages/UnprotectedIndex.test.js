import React from "react"
import { render } from "@testing-library/react"
import UnprotectedIndex from "./UnprotectedIndex"

describe("<UnprotectedIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<UnprotectedIndex />, div)
  })
})