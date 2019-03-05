function removeMain() {
  const body = document.querySelector('body'),
        main = document.querySelector('main')

  if (body.contains(main) === true) {
    main.remove()
  }
}

export { removeMain }
