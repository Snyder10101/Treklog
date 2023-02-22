import React from "react"
import { render, screen } from "@testing-library/react"
import ProtectedIndex from "./ProtectedIndex"
import { BrowserRouter } from "react-router-dom"


describe("<ProtectedIndex />", () => {
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
  const current_user = {
    id: 1,
    name: "John Doe",
  };
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
  it("renders an img", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <ProtectedIndex current_user={current_user} trails={trails} />
      </BrowserRouter>,
      div
    )
    const image = screen.getByRole("img")
    expect(image).toHaveAttribute("alt", "Trail Pic")
  })
})