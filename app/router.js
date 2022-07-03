module.exports = app => {
  const { router, controller } = app

  // config router
  router.get('/', controller.home.index)
}