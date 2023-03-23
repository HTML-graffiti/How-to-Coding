const $ = (id) => document.getElementById(id)

window.addEventListener('load', () => {
  const form1 = $('form1')

  // "Fetch TEST" button
  $('button1').addEventListener('click', (evt) => {
    evt.preventDefault()

    const fd = new FormData(form1)
    if ($('appendBlob').checked) {
      let blob = new Blob(['Sample text'], {
        type: 'text/plain',
      })
      fd.append('data1', blob, 'foo.txt')
    }

    for (let d of fd) {
      console.log(`${d[0]}: ${d[1]}`)
    }

    fetch('/test1', {
      method: 'POST',
      body: fd,
    })
      .then((response) => {
        console.log('** fetch: then(response)')
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`)
        }
        return response.json()
      })
      .then((data) => {
        console.log('** fetch: then(data)')
        console.log(data)
      })
      .catch((reason) => {
        console.log('** fetch: catch')
        console.log(reason)
      })
  })

  // "XHR TEST" button
  $('button2').addEventListener('click', (evt) => {
    evt.preventDefault()

    const fd = new FormData(form1)
    if ($('appendBlob').checked) {
      let blob = new Blob(['Sample text'], {
        type: 'text/plain',
      })
      fd.append('data1', blob, 'foo.txt')
    }

    const xhr = new XMLHttpRequest()

    xhr.open('POST', '/test1')
    xhr.addEventListener('load', (evt) => {
      let response = JSON.parse(xhr.responseText)
      console.log(response)
    })
    xhr.addEventListener('error', (evt) => {
      console.log('** xhr: error')
      console.log(evt)
    })

    xhr.send(fd)
  })

  // "Fetch (JSON)" button
  $('button3').addEventListener('click', (evt) => {
    evt.preventDefault()

    const fd = new FormData(form1)
    if ($('appendBlob').checked) {
      let blob = new Blob(['Sample text'], {
        type: 'text/plain',
      })
      fd.append('data1', blob, 'foo.txt')
    }

    const obj = Object.fromEntries(fd)

    fetch('/test1', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log('** fetch: then(response)')
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`)
        }
        return response.json()
      })
      .then((data) => {
        console.log('** fetch: then(data)')
        console.log(data)
      })
      .catch((reason) => {
        console.log('** fetch: catch')
        console.log(reason)
      })
  })
})
