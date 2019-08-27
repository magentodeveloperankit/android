const OS = require('sf-core/device/system').OS;
const buildExtender = require("sf-extension-utils/lib/router/buildExtender");
const {
    NativeRouter: Router,
    NativeStackRouter: StackRouter,
    Route
} = require("@smartface/router");
require("sf-extension-utils/lib/router/goBack"); // Implements onBackButtonPressed

const router = Router.of({
    path: "/",
    isRoot: true,
    routes: [
        StackRouter.of({
            path: "/pages",
            routes: [
                Route.of({
                    path: "/pages/page1",
                    build: buildExtender({ pageName: "page1", headerBarStyle: { visible: true } })
                }),
                Route.of({
                    path: "/pages/page2",
                    build: buildExtender({ pageName: "page2", headerBarStyle: { visible: true } })
                }),
                 Route.of({
                    path: "/pages/pgReview",
                    build: buildExtender({ pageName: "pgReview", headerBarStyle: { visible: true } })
                }),
                 Route.of({
                    path: "/pages/newPage001",
                    build: buildExtender({ pageName: "newPage001", headerBarStyle: { visible: true } })
                }),
            ]
        })
    ]
});

module.exports = router;
