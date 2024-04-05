// @ts-nocheck
function printId(id: any) {
  console.log(id)
}

printId(101)
printId('202')
// @ts-expect-error
printId({ myID: 22342 })

function printId2(id: any) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}

interface NetworkLoadingState {
  state: 'loading'
}

interface NetworkFailedState {
  state: 'failed'
  code: number
}

interface NetworkSuccessState {
  state: 'success'
  response: string
}

type NetworkState = any

const networkState: NetworkState =
  Math.random() > 0.7
    ? Math.random() < 0.3
      ? { state: 'loading' }
      : { response: 'foo', state: 'success' }
    : { state: 'failed', code: 404 }

function getStatus() {
  let status: string
  switch (networkState.state) {
    case 'failed':
      // OK
      status = 'error'
      networkState.code
      break
    case 'loading':
      // @ts-expect-error
      networkState.code
      status = 'loading'
      break
    case 'success':
      status = 'success'
      // OK
      networkState.response
      break
  }

  return status
}

export {}
