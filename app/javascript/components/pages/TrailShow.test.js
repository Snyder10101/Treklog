import React from "react"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import TrailShow from "./TrailShow"
import {  MemoryRouter, Routes, Route } from "react-router-dom"
import mockTrails from "../mockTrails"

const renderShow = () => {
  render(
      <MemoryRouter initialEntries={["/show/1"]}>
        <Routes>
          <Route path="show/:id" element={<TrailShow trails={mockTrails}/>} /> 
        </Routes>
      </MemoryRouter>
  )
}
describe("<TrailShow />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    renderShow(div)
  })
  it("displays a picture", () => {
    renderShow()
    const image = screen.getByRole("img")
    expect(image).toHaveAttribute("alt", "Picture of trail")
  })
})