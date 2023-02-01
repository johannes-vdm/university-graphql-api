import { universities } from "./universities-data"
import { University, UniversityFilter } from "./types";

export const resolvers = {
  Query: {
    universities: ({name, state_province} : UniversityFilter) => {
      let filteredUniversities: University[] = universities

      if (name) {
        filteredUniversities = filteredUniversities.filter(
          university => university.name === name
        )
      }

      if (state_province) {
        filteredUniversities = filteredUniversities.filter(
          university => university.state_province === state_province
        )
      }

      return filteredUniversities.map(
        ({ name, state_province, web_pages }: University): UniversityFilter => ({
          name,
          state_province,
          // web_pages,
        })
      )
    }
  }
}
