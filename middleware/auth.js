export default function (context) {
  if (!context.store.getters.getUserInfo && context.route.name === 'lk') {
    return context.redirect('/')
  }
}
