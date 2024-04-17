import { OtherService, Service } from './example'
import { instance, mock, when } from '@typestrong/ts-mockito'

describe('Service', () => {
  it('should return value', () => {
    const { sut, otherService } = setup()
    when(otherService.getValue()).thenReturn(13)

    const actual = sut.delete({ id: 1 })

    expect(actual).toEqual(14)
  })
})

function setup() {
  const otherService = mock(OtherService)

  return {
    otherService,
    sut: new Service(instance(otherService)),
  }
}
