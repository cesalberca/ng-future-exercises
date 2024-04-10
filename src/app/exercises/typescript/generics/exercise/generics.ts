// @ts-nocheck

function identity1(arg: number): number {
  return arg
}

function identity2(arg: string): string {
  return arg
}

function identity3(arg: boolean): boolean {
  return arg
}

function identity<Type>(arg: Type): Type {}

class Generic {
  foo?: number
  bar(x: number): number {
    return x
  }
}

class Generic2 {
  foo?: string
  bar(x: string): string {
    return x
  }
}

class Generic<Type = string, ReturnType> {
  foo?: Type
  bar(x: Type): Type {
    return x
  }
}
