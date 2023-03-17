export default function (context) {
  if (!context.store.getters.getUserInfo && (context.route.name === 'lk' || context.route.name === 'profile')) {
    return context.redirect('/')
  }

  if (context.store.getters.getUserInfo && (context.route.name === 'auth' || context.route.name === 'register')) {
    return context.redirect('/')
  }
}
