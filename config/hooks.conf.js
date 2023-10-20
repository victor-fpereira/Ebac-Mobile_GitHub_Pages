let hooksConfig = {
    beforeSuite: async function () {
        // Check if the app is open and running
        let state = await driver.queryAppState("br.art.ebaconline")
        if (state !== 4) {
            await driver.launchApp()
        }
    },
    afterSuite: async function () {
        // Close the app
        await driver.closeApp()
    }
}

module.exports = { hooksConfig }