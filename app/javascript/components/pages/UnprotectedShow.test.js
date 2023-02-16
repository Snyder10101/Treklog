import React from "react"
import { render } from "@testing-library/react"
import UnprotectedShow from "./UnprotectedShow"

describe("<UnprotectedShow />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<UnprotectedShow />, div)
  })
})