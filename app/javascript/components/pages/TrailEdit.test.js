
import React from "react"
import { render, screen } from "@testing-library/react"
import TrailEdit from "./TrailEdit"
import { BrowserRouter } from "react-router-dom"

describe("<TrailEdit />", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div")
      render(
          <BrowserRouter>
            <TrailEdit />
          </BrowserRouter>)
        })
    })