import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import type { ILocation } from "types";
import { isCountryPartiallySelected, isCountrySelected, selectAllLocations } from "helpers";

afterEach(() => {
  cleanup()
  vi.resetAllMocks()
})

describe("<LocationFilters />", () => {
  // Let's load up the reducer itself and test the entire interaction.
  const country: ILocation = { country: "UK" }
  const locations: ILocation[] = [
    { country: "UK" }
  ]
  describe("isCountrySelected", () => {
    it("Should return true if a country is selected", () => {
      const selected = isCountrySelected(country, locations)
      expect(selected).toBe(true)
    })
  })

  describe("selectAllLocations", () => {
    it("Should add any locations passed to it without duplicating existing ones", () => {
      const locations: ILocation[] = [
        { country: "UK" },
        { country: "UK", city: "London" },
        { country: "UK", city: "Brighton" },
        { country: "UK", city: "Edinburgh" }
      ]
      const selectedLocations: ILocation[] = [
        { country: "UK" },
        { country: "UK", city: "Brighton" },
        { country: "Canada" }
      ]
      const updatedSelectedLocations = selectAllLocations(locations, selectedLocations)
      const country = updatedSelectedLocations.filter(l => l.country === "UK" && !l.city)
      expect(country.length).toBe(1)
      const canada = updatedSelectedLocations.filter(l => l.country === "Canada" && !l.city)
      expect(canada.length).toBe(1)
    })
  })

  describe("isCountryPartiallySelected", () => {
    it("should return true if the country has some but not all locations selected", () => {
      const location: ILocation = { country: "UK"}
      const selectedLocations: ILocation[] = [ { country: "UK" }, { country: "UK", city: "Brighton" }, { country: "Canada" }]
      const allLocations: ILocation[] = [ { country: "UK" }, { country: "UK", city: "London" }, { country: "UK", city: "Brighton" }, { country: "UK", city: "Edinburgh" }, { country: "Canada" } ]
      const isPartialSelected = isCountryPartiallySelected(location, selectedLocations, allLocations)
      expect(isPartialSelected).toBe(true)
    })

    it("Should return true if only the country is selected", () => {
      const location: ILocation = { country: "UK" }
      const selectedLocations: ILocation[] = [ { country: "UK" } ]
      const allLocations: ILocation[] = [ { country: "UK" }, { country: "UK", city: "London" }, { country: "UK", city: "Brighton" }, { country: "UK", city: "Edinburgh" }, { country: "Canada" } ]
      const isPartialSelected = isCountryPartiallySelected(location, selectedLocations, allLocations)
      expect(isPartialSelected).toBe(true)
    })
  })
})
