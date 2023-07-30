const badRequest = (error) => ({
  statusCode: 500,
  body: error,
})

const missingParamsError = (paramName) => `Missing parameter ${paramName}`

const ok = (data) => ({
  statusCode: 200,
  body: data,
})

module.exports = {
  badRequest,
  missingParamsError,
  ok,
}
