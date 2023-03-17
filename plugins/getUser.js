export default async function (context) {
  await context.store.dispatch('nuxtClientInit')
  if (process.client) {
    // console.log(context.store.dispatch('setUserId', localStorage.getItem('UID')))
    // console.log(localStorage.getItem('UID'))
  }

  // if (process.client) {
  //   store.dispatch('setUserId').then((res) => { console.log(res) })
  // }
}
