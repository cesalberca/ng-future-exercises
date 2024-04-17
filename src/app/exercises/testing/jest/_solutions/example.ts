import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class OtherService {
  getValue() {
    return 42
  }
}

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private readonly otherService: OtherService) {}

  delete({ id }: { id: number }) {
    return this.otherService.getValue() + id
  }
}
