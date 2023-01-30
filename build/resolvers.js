"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const universities_data_1 = require("./universities-data");
exports.resolvers = {
    Query: {
        universities: ({ name, state_province }) => {
            let filteredUniversities = universities_data_1.universities;
            if (name) {
                filteredUniversities = filteredUniversities.filter(university => university.name === name);
            }
            if (state_province) {
                filteredUniversities = filteredUniversities.filter(university => university.state_province === state_province);
            }
            return filteredUniversities.map(({ name, state_province, web_pages }) => ({
                name,
                state_province,
                // web_pages,
            }));
        }
    }
};
