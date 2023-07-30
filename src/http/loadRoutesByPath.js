/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const path = require('path')
const filterFiles = require('filter-files')
const isDir = require('is-directory')

const isRouteFile = (fileName) => /(route)\.js$/.test(fileName)

const getRoutesFilesFromDirName = (dirName) =>
  filterFiles.sync(dirName, (fp, dir) => {
      if (isRouteFile(fp)) {
        return true
      }

      return isDir.sync(path.join(dir, fp))
    },
    true
  )

const loadRoutesByPath = (server, dirName) => {
  getRoutesFilesFromDirName(dirName).forEach((fileName) =>
    require(fileName)(server)
  )
}

module.exports = loadRoutesByPath
