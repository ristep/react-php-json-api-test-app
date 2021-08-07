const rewire = require("rewire")
const index = rewire("./index")
const usersListQuery = index.__get__("usersListQuery")
// @ponicode
describe("usersListQuery", () => {
    test("0", () => {
        usersListQuery(undefined, undefined, undefined)
    })
})
