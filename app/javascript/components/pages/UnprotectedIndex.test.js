import React from "react"
import { render, screen } from "@testing-library/react"
import UnprotectedIndex from "./UnprotectedIndex"
import { BrowserRouter } from "react-router-dom"

describe("<UnprotectedIndex />", () => {
  const trails = [
    {
      id: 1,
      name: "Trail 1",
      user_id: 1,
      image: "https://example.com/trail1.jpg",
      location: "City 1",
      distance: "5 miles",
    },
  ];
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
  it("renders an img", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <UnprotectedIndex trails={trails} />
      </BrowserRouter>,
      div
    )
    const image = screen.getByRole("img")
    expect(image).toHaveAttribute("alt", "Trail Pic")
  })
})