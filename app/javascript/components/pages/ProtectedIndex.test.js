import React from "react"
import { render, screen } from "@testing-library/react"
import ProtectedIndex from "./ProtectedIndex"

describe("<ProtectedIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ProtectedIndex />, div)
  })
  it("can see the title of the page", () => {
    const div = document.createElement("div")
    render(<ProtectedIndex />, div)
    const title = screen.getByText("My", {exact: false})
    expect(title.textContent).toEqual("My Trails")
  })
})