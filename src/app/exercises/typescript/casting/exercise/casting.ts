// @ts-nocheck

const someValue: any = 'this is a string'
const strLength: any = (someValue as any).length

const someOtherValue: any = null
;(someOtherValue as any).length

export {}
